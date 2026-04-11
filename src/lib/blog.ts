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
    slug: "test-publish-delete-me",
    title:
      "Test Blog Post — Delete After Verification",
    description:
      "This is a test post to verify the publish automation works.",
    date: "2026-04-11",
    author: "Roman Feldman",
    pillar: "Product",
    readTime: "2 min read",
    metaTitle:
      "Test Blog Post",
    metaDescription:
      "This is a test post to verify the publish automation works.",
    content: [
      {
        type: "heading",
        level: "h2",
        text: "Test Heading",
      },
      {
        type: "paragraph",
        text: "This is a test paragraph to verify the markdown-to-content-block conversion works correctly.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Second Section",
      },
      {
        type: "paragraph",
        text: "Here is a numbered list:",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "First item in the list.",
          "Second item in the list.",
          "Third item in the list.",
        ],
      },
      {
        type: "paragraph",
        text: "And a bullet list:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Bullet point one.",
          "Bullet point two.",
        ],
      },
      {
        type: "quote",
        text: "This is a blockquote for testing.",
      },
      {
        type: "paragraph",
        text: "Final paragraph of the test post.",
      },
    ],
  },
  {
    slug: "track-payments-multiple-modeling-agencies",
    title:
      "How to Track Payments When You Work With Multiple Modeling Agencies",
    description:
      "Working across agencies means payments coming from different places at different times. Here's how to keep track of what's owed, what's paid, and what's overdue.",
    date: "2026-04-11",
    author: "Roman Feldman",
    pillar: "Your Money",
    readTime: "6 min read",
    metaTitle:
      "How to Track Payments Across Multiple Modeling Agencies",
    metaDescription:
      "Working with multiple agencies? Learn how to track every payment, spot overdue invoices, and stop money slipping through the cracks.",
    content: [
      {
        type: "heading",
        level: "h2",
        text: "The Problem With Multiple Agencies",
      },
      {
        type: "paragraph",
        text: "You finished a job in February through one agency. A three-day shoot in March through another. A casting callback turned confirmed booking in April through a third. Each agency has its own payment timeline, its own process, and its own definition of \u201Cit\u2019s coming.\u201D",
      },
      {
        type: "paragraph",
        text: "Now multiply that across a year. Dozens of jobs. Three or four agencies. Maybe two countries. The money is real, but keeping track of where it all sits becomes a job in itself.",
      },
      {
        type: "paragraph",
        text: "Most models track this in their heads, or in a Notes app, or not at all. The result is the same: money slips through the cracks. Not because anyone did the wrong thing. Because nobody was keeping track.",
      },
      {
        type: "heading",
        level: "h2",
        text: "How Modeling Agency Payments Actually Work",
      },
      {
        type: "paragraph",
        text: "Before talking about tracking, it helps to understand the timeline. When you do a job, the payment does not come straight to you. It follows a chain:",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "You do the job.",
          "The agency invoices the client.",
          "The client pays the agency (often net 30 or net 60 from invoice date).",
          "The agency takes their commission and pays you.",
        ],
      },
      {
        type: "paragraph",
        text: "That last step \u2014 agency to you \u2014 is where visibility disappears. Some agencies pay within days of receiving the client\u2019s payment. Others batch payments monthly. Some hold funds longer. The point is: the delay between your shoot date and your pay date is often 60 to 90 days. Sometimes longer.",
      },
      {
        type: "paragraph",
        text: "When you work with one agency, this is manageable. You remember the jobs, you have a rough sense of what\u2019s coming. When you work with three or four, it gets out of hand fast.",
      },
      {
        type: "heading",
        level: "h2",
        text: "What Falls Through the Cracks",
      },
      {
        type: "paragraph",
        text: "From talking to models and watching my daughter navigate this, the same patterns come up again and again:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "A job gets done but never logged anywhere. Three months later, you have a vague memory that you\u2019re owed money from a shoot but can\u2019t remember the details.",
          "A payment is overdue but you don\u2019t realise it because you lost track of when the job was. Was it 45 days ago or 75?",
          "Two agencies owe you money at the same time. You follow up with one and forget the other.",
          "You switch agencies or move markets and the outstanding payments from your previous agency get lost in the transition.",
          "Tax time arrives and you have no clear record of what you earned, from whom, and when.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this is because models are careless. It\u2019s because there is no system for it. There is no shared dashboard. No portal. You are expected to just know.",
      },
      {
        type: "heading",
        level: "h2",
        text: "What a Good Tracking System Looks Like",
      },
      {
        type: "paragraph",
        text: "You do not need accounting software. You do not need spreadsheets. You need something that does three things:",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "Logs every job with the agency, client, date, and rate \u2014 in under 30 seconds.",
          "Turns each job into a payment to track, so you know what\u2019s outstanding at any moment.",
          "Reminds you when a payment is overdue so you don\u2019t have to remember.",
        ],
      },
      {
        type: "paragraph",
        text: "That\u2019s it. If your tracking system does those three things, you will never lose sight of money again.",
      },
      {
        type: "paragraph",
        text: "This is exactly why we built payment tracking into BOOKDU. Every job you log becomes a payment to follow. BOOKDU sends a reminder at 35 days and again at 56 days if it\u2019s still outstanding. Every Monday morning, you get a summary of everything you\u2019re waiting on \u2014 across every agency.",
      },
      {
        type: "heading",
        level: "h2",
        text: "The Monday Morning Check",
      },
      {
        type: "paragraph",
        text: "Here is a habit that takes two minutes and keeps you informed all year. Every Monday morning, glance at three things:",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "Outstanding payments \u2014 what\u2019s still waiting to land. You don\u2019t need to chase anything. Just know where things stand.",
          "Your calendar for the next three days \u2014 what\u2019s coming up, what\u2019s confirmed, what\u2019s not.",
          "Anything that landed \u2014 check your bank account or payslip and mark off what\u2019s been paid.",
        ],
      },
      {
        type: "paragraph",
        text: "That\u2019s it. No chasing required. Your jobs sit in the system until you mark them paid. Nothing disappears. Nothing gets forgotten. When a payment arrives, you mark it off. When one hasn\u2019t, you can see exactly how long it\u2019s been and decide if it\u2019s worth a follow-up.",
      },
      {
        type: "paragraph",
        text: "The models who stay on top of their finances are not the ones who chase the hardest. They are the ones who always know where they stand.",
      },
      {
        type: "heading",
        level: "h2",
        text: "What You Can Do Today",
      },
      {
        type: "paragraph",
        text: "You do not need to overhaul your life. Start with these three steps:",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "List every agency you work with and any jobs from the last 90 days that you have not been paid for yet.",
          "For each unpaid job, note the date, the client, and the rate. Check if any are past 60 days.",
          "Set a recurring reminder for Monday mornings to review your outstanding payments. Two minutes. Every week.",
        ],
      },
      {
        type: "paragraph",
        text: "If you want to skip the manual list and have it all tracked automatically, that is what BOOKDU does. Log a job in 30 seconds, get reminded when payment is overdue, and see everything you are owed in one place \u2014 across every agency. Free on iOS.",
      },
    ],
  },
  {
    slug: "one-place-for-all-of-it",
    title: "One Place for All of It: Why We Built BOOKDU",
    description:
      "Jobs, payments, contracts, calendar, expenses, tax — BOOKDU keeps it all in one place. Here's why we built it and what it does.",
    date: "2026-04-12",
    author: "Roman Feldman",
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
    author: "Roman Feldman",
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
