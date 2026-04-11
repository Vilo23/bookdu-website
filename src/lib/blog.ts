// ── Blog data layer ──
// Add new posts by adding entries to the `posts` array below.
// Posts are sorted by date (newest first) automatically.

export type ContentBlockType =
  | "paragraph"
  | "heading"
  | "list"
  | "quote"
  | "callout";

export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface HeadingBlock {
  type: "heading";
  level: "h2" | "h3";
  text: string;
}

export interface ListBlock {
  type: "list";
  style: "bullet" | "numbered";
  items: string[];
}

export interface QuoteBlock {
  type: "quote";
  text: string;
}

export interface CalloutBlock {
  type: "callout";
  text: string;
}

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | ListBlock
  | QuoteBlock
  | CalloutBlock;

export type Pillar = "Your Money" | "Model Life" | "Career Admin" | "Product";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  author: string;
  pillar: Pillar;
  readTime: string;
  metaTitle: string;
  metaDescription: string;
  content: ContentBlock[];
}

// ── Posts ──

const posts: BlogPost[] = [
  {
    slug: "one-place-for-all-of-it",
    title: "One Place for All of It: Why We Built BOOKDU",
    description:
      "Jobs, payments, contracts, calendar, expenses, tax — BOOKDU keeps it all in one place. Here's why we built it and what it does.",
    date: "2026-04-12",
    author: "The BOOKDU Team",
    pillar: "Product",
    readTime: "5 min read",
    metaTitle:
      "One Place for All of It: Why We Built BOOKDU — Finance App for Models",
    metaDescription:
      "Jobs, payments, contracts, calendar, expenses, tax — BOOKDU keeps it all in one place. Built for models who work across agencies and countries.",
    content: [
      {
        type: "heading",
        level: "h2",
        text: "One Place for All of It",
      },
      {
        type: "paragraph",
        text: "Modelling is a career that spans agencies, countries, and currencies. A job in Sydney, a contract in Milan, expenses in Paris, tax in three jurisdictions. The work moves fast. The admin doesn\u2019t go away.",
      },
      {
        type: "paragraph",
        text: "Some models track it all meticulously. Some don\u2019t track it at all. Most are somewhere in between \u2014 doing their best with Notes apps, spreadsheets, memory, and good intentions.",
      },
      {
        type: "paragraph",
        text: "We built BOOKDU because all of that admin has something in common: it works better in one place.",
      },
      {
        type: "heading",
        level: "h2",
        text: "What BOOKDU Actually Does",
      },
      {
        type: "paragraph",
        text: "BOOKDU is a finance tracking app built specifically for models and talent who work through agencies. Here\u2019s what it covers:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Jobs \u2014 Log every job with the agency, client, date, and rate. Mark it confirmed or unconfirmed. It shows up on your calendar automatically.",
          "Payments \u2014 Every job you log becomes a payment to track. BOOKDU reminds you at 35 days and again at 56 days if it\u2019s still outstanding. Every Monday morning, you get a summary of everything you\u2019re waiting on.",
          "Contracts \u2014 Store your agency contracts as PDFs. Set the expiry date and BOOKDU reminds you 90 days before, at your notice deadline, and the day before it ends.",
          "Calendar \u2014 See your week and your month. Jobs are colour-coded: confirmed in one colour, unconfirmed in another.",
          "Expenses \u2014 Log what you spend. Snap a photo of the receipt. Categorise it. At tax time, export everything as a CSV.",
          "Tax \u2014 BOOKDU estimates what you might owe based on your country\u2019s tax rates. Supports 10+ countries.",
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "Built for How You Actually Work",
      },
      {
        type: "paragraph",
        text: "Models don\u2019t work like accountants. They don\u2019t sit at desks with filing cabinets. They\u2019re on planes, in studios, between castings. The admin happens in spare moments \u2014 if it happens at all.",
      },
      {
        type: "paragraph",
        text: "BOOKDU is designed for that reality. Log a job in 30 seconds. Check what\u2019s outstanding while you\u2019re waiting for a fitting. Snap a receipt before you lose it. Everything lives on your phone, works offline, and stays private unless you choose to back it up.",
      },
      {
        type: "quote",
        text: "It\u2019s not about being more organised. It\u2019s about having one place where the information lives so it\u2019s there when you need it.",
      },
      {
        type: "heading",
        level: "h2",
        text: "The Payment Cycle",
      },
      {
        type: "paragraph",
        text: "In modelling, the payment cycle is long. You do a job, the client processes the invoice, the payment moves through the agency, and eventually it reaches you. That process can take 60 to 90 days \u2014 sometimes longer. That\u2019s the industry.",
      },
      {
        type: "paragraph",
        text: "The challenge isn\u2019t that payments take time. It\u2019s that when you have 8 jobs across 3 agencies in 2 countries, keeping track of where each payment sits becomes a job on its own.",
      },
      {
        type: "paragraph",
        text: "BOOKDU doesn\u2019t speed up the payment cycle. It gives you visibility into it. You know what\u2019s outstanding, how long it\u2019s been, and when to follow up.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Privacy and Security",
      },
      {
        type: "paragraph",
        text: "Your financial data is yours. BOOKDU stores everything on your phone by default \u2014 no cloud, no tracking, no accounts required. If you want a backup in case you lose your phone, you can sign in with Apple or Google and we\u2019ll keep a secure copy. Biometric lock keeps everything private.",
      },
      {
        type: "paragraph",
        text: "We don\u2019t sell data. We don\u2019t share data. We built this for someone we love. Every user gets treated the same way.",
      },
      {
        type: "callout",
        text: "BOOKDU is free to download. All features included. Whether you\u2019re just starting out with your first agency or managing contracts across multiple countries \u2014 one place for all of it.",
      },
    ],
  },
  {
    slug: "coming-soon-the-bookdu-blog",
    title: "Coming Soon: The BOOKDU Blog",
    description:
      "We are building a space to talk about the business side of modeling. Payments, contracts, tax, admin — the stuff nobody teaches you.",
    date: "2026-04-04",
    author: "The BOOKDU Team",
    pillar: "Product",
    readTime: "2 min read",
    metaTitle: "Coming Soon: The BOOKDU Blog — Model Finance, Career Admin & More",
    metaDescription:
      "The BOOKDU blog is launching. Expect honest writing about payments, contracts, tax, and the admin side of modeling that nobody talks about.",
    content: [
      {
        type: "heading",
        level: "h2",
        text: "A Blog About the Business Side of Modeling",
      },
      {
        type: "paragraph",
        text: "Modeling looks glamorous from the outside. And parts of it are. But behind every shoot, every runway, every casting, there is a mountain of admin that nobody warns you about. Unpaid invoices. Expiring contracts. Tax obligations in multiple countries. Agencies that pay on their own timeline.",
      },
      {
        type: "paragraph",
        text: "We built BOOKDU to handle that admin. And now we are building this blog to talk about it openly.",
      },
      {
        type: "heading",
        level: "h2",
        text: "What We Will Write About",
      },
      {
        type: "paragraph",
        text: "This is not a lifestyle blog. We are not here to talk about what to wear to a casting or how to get signed. There are plenty of places for that. This blog is about the work behind the work.",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Your Money — How payments actually work in modeling. What to do when agencies are late. How to track income across multiple markets.",
          "Model Life — The realities of managing a modeling career. The admin, the scheduling, the mental load.",
          "Career Admin — Contracts, tax, expenses, CSV exports, and everything your accountant wishes you already knew.",
          "Product — Updates on BOOKDU. What we are building, what we shipped, and why.",
        ],
      },
      {
        type: "quote",
        text: "We track your money, guard your contracts, and keep your schedule clear. This blog is the same idea — but in words.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Written for Models, Not Finance People",
      },
      {
        type: "paragraph",
        text: "Every article here will be written in plain language. No jargon. No spreadsheets. Just honest, practical advice from people who have watched the modeling industry up close and built a tool to make the hard parts easier.",
      },
      {
        type: "callout",
        text: "BOOKDU tracks your payments, guards your contracts, reminds you about upcoming jobs, and helps you sort tax. Free on iOS.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Stay Tuned",
      },
      {
        type: "paragraph",
        text: "First articles are coming soon. We will cover how payment timelines really work in modeling, what to look for in an agency contract, and how to stop tax season from being a scramble. If you have got BOOKDU on your phone, you are already ahead.",
      },
    ],
  },
];

// ── Helpers ──

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRecentPosts(count: number): BlogPost[] {
  return getAllPosts().slice(0, count);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
