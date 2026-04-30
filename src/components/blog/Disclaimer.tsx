import type { BlogPost } from "@/lib/blog";

// YMYL disclaimers per blog post type.
// `as of` date is hardcoded — bump it whenever the underlying tax/finance
// content is reviewed against current rules.
const DISCLAIMERS: Record<NonNullable<BlogPost["disclaimer"]>, string> = {
  "tax-au":
    "General information only — not tax advice. This article reflects Australian Taxation Office rules current as of 30 April 2026. Tax rules change. Speak to a registered tax agent before acting on anything in this article.",
};

export default function Disclaimer({
  kind,
}: {
  kind: NonNullable<BlogPost["disclaimer"]>;
}) {
  const text = DISCLAIMERS[kind];
  if (!text) return null;
  return (
    <aside
      role="note"
      className="bg-bg-deep border border-border rounded-sm p-6 my-8"
    >
      <span className="data-label mb-2 block">General Info Only</span>
      <p className="text-text-muted leading-relaxed text-sm">{text}</p>
    </aside>
  );
}
