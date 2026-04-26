// App Router serverless function — magic-link review handler.
//
// GET  /api/review/<draftId>/<action>?t=<token>
//   Verifies the HMAC token. Returns an HTML confirmation page with a form
//   that POSTs back to the same URL.
//
// POST /api/review/<draftId>/<action>?t=<token>
//   Verifies the HMAC token. Reads optional body (reject reason / edit notes)
//   from the form. Fires repository_dispatch on the marketing repo.
//
// Env required:
//   REVIEW_LINK_SECRET     — HMAC secret shared with the marketing repo cron
//   GITHUB_DISPATCH_TOKEN  — fine-grained PAT, marketing-repo scoped
//                            (contents:write + actions:write)
//   MARKETING_REPO         — e.g. "Vilo23/bookdu-marketing"

import crypto from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Action = "approve" | "reject" | "edit";

const VALID_ACTIONS: Action[] = ["approve", "reject", "edit"];

function signToken(draftId: string, action: string, secret: string): string {
  return crypto
    .createHmac("sha256", secret)
    .update(`${draftId}:${action}`)
    .digest("hex")
    .slice(0, 32);
}

function verifyToken(draftId: string, action: string, token: string, secret: string): boolean {
  if (!draftId || !action || !token || !secret) return false;
  const expected = signToken(draftId, action, secret);
  try {
    return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(token));
  } catch {
    return false;
  }
}

function escapeHtml(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function pageShell(title: string, inner: string): string {
  return `<!doctype html>
<html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${escapeHtml(title)}</title>
<style>
  body { background: #F1ECE4; margin: 0; padding: 24px; font-family: -apple-system, system-ui, "Plus Jakarta Sans", sans-serif; color: #4D5045; }
  .card { max-width: 520px; margin: 32px auto; background: #fff; padding: 28px; border-radius: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
  h1 { font-size: 22px; margin: 0 0 16px 0; }
  textarea, input[type=text] { width: 100%; box-sizing: border-box; padding: 10px; border: 1px solid #d8d2c4; border-radius: 6px; font: inherit; }
  textarea { min-height: 120px; resize: vertical; }
  button { background: #4D5045; color: #fff; border: 0; padding: 12px 22px; border-radius: 6px; font: inherit; font-weight: 600; cursor: pointer; }
  button.danger { background: #9c5042; }
  .muted { color: #A4AA8E; font-size: 13px; }
  label { display: block; margin: 16px 0 6px 0; font-weight: 600; font-size: 14px; }
</style></head>
<body><div class="card">${inner}</div></body></html>`;
}

function htmlResponse(status: number, title: string, inner: string): Response {
  return new Response(pageShell(title, inner), {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

async function dispatchToGithub(args: {
  draftId: string;
  action: string;
  body: string;
  kind: string;
  token: string;
  repo: string;
}): Promise<void> {
  const url = `https://api.github.com/repos/${args.repo}/dispatches`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${args.token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event_type: "content-review-reply",
      client_payload: {
        draftId: args.draftId,
        action: args.action,
        body: args.body,
        kind: args.kind,
      },
    }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`GitHub dispatch failed: ${res.status} ${txt}`);
  }
}

type RouteContext = { params: Promise<{ draftId: string; action: string }> };

async function resolveParams(context: RouteContext) {
  const { draftId, action } = await context.params;
  return { draftId: String(draftId || ""), action: String(action || "") as Action };
}

function readToken(request: Request): string {
  const url = new URL(request.url);
  return url.searchParams.get("t") || "";
}

function checkAuth(draftId: string, action: string, token: string): Response | null {
  const secret = process.env.REVIEW_LINK_SECRET || "";
  if (!VALID_ACTIONS.includes(action as Action)) {
    return htmlResponse(400, "Bad request", "<h1>Bad request</h1><p>Unknown action.</p>");
  }
  if (!verifyToken(draftId, action, token, secret)) {
    return htmlResponse(
      401,
      "Link expired or invalid",
      "<h1>Link invalid</h1><p>This review link couldn't be verified. It may be tampered or stale.</p>",
    );
  }
  return null;
}

export async function GET(request: Request, context: RouteContext): Promise<Response> {
  const { draftId, action } = await resolveParams(context);
  const token = readToken(request);

  const authError = checkAuth(draftId, action, token);
  if (authError) return authError;

  if (action === "approve") {
    return htmlResponse(200, "Approve draft", `
      <h1>Approve this draft?</h1>
      <p class="muted">Draft ID: ${escapeHtml(draftId)}</p>
      <p>The draft will move to <code>content/approved/blog/</code>. You'll publish it to bookdu.co from your local dashboard.</p>
      <form method="POST" action="">
        <button type="submit">✓ Confirm approve</button>
      </form>`);
  }
  if (action === "reject") {
    return htmlResponse(200, "Reject draft", `
      <h1>Reject this draft?</h1>
      <p class="muted">Draft ID: ${escapeHtml(draftId)}</p>
      <p>The draft will move to <code>content/rejected/</code> and the keyword will return to the queue.</p>
      <form method="POST" action="">
        <label>Optional reason (helps tune the next attempt):</label>
        <input type="text" name="body" placeholder="e.g. too generic" maxlength="200"/>
        <p></p>
        <button type="submit" class="danger">✗ Confirm reject</button>
      </form>`);
  }
  if (action === "edit") {
    return htmlResponse(200, "Edit notes", `
      <h1>What should change?</h1>
      <p class="muted">Draft ID: ${escapeHtml(draftId)}</p>
      <p>The pipeline will regenerate from scratch with these notes injected as reviewer feedback.</p>
      <form method="POST" action="">
        <label>Your edit notes:</label>
        <textarea name="body" required placeholder="e.g. tighten the intro, add a stat about voucher usage, shorten section 2"></textarea>
        <p></p>
        <button type="submit">✎ Submit & regenerate</button>
      </form>`);
  }
  return htmlResponse(405, "Method not allowed", "<h1>Method not allowed</h1>");
}

export async function POST(request: Request, context: RouteContext): Promise<Response> {
  const { draftId, action } = await resolveParams(context);
  const token = readToken(request);

  const authError = checkAuth(draftId, action, token);
  if (authError) return authError;

  const ghToken = process.env.GITHUB_DISPATCH_TOKEN || "";
  const repo = process.env.MARKETING_REPO || "Vilo23/bookdu-marketing";

  if (!ghToken) {
    return htmlResponse(500, "Server error", "<h1>Server error</h1><p>Missing GITHUB_DISPATCH_TOKEN.</p>");
  }

  let body = "";
  try {
    const form = await request.formData();
    const raw = form.get("body");
    if (typeof raw === "string") body = raw.trim();
  } catch {
    body = "";
  }

  if (action === "edit" && !body) {
    return htmlResponse(400, "Empty notes", "<h1>Edit notes are empty</h1><p>Go back and add some notes.</p>");
  }

  try {
    await dispatchToGithub({ draftId, action, body, kind: "blog", token: ghToken, repo });
    const confirmation = action === "approve"
      ? "Approved. The draft is moving to content/approved/blog/. Publish it from your dashboard when ready."
      : action === "reject"
      ? "Rejected. The keyword has been returned to the queue."
      : "Submitted. The pipeline is regenerating now — you'll get a fresh review email in a few minutes.";
    return htmlResponse(200, "Done", `
      <h1>✓ ${escapeHtml(action[0].toUpperCase() + action.slice(1))}d</h1>
      <p>${escapeHtml(confirmation)}</p>
      <p class="muted">You can close this tab.</p>`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return htmlResponse(502, "Dispatch failed", `<h1>Dispatch failed</h1><p>${escapeHtml(msg)}</p>`);
  }
}
