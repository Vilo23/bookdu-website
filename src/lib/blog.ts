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

export const AUTHORS = {
  "Roman Feldman": {
    name: "Roman Feldman",
    url: "https://bookdu.co/about/roman-feldman",
  },
  Bec: { name: "Bec", url: "https://bookdu.co/about/bec" },
} as const;

// When the author has a profile page, return a Person node with @id so the
// BlogPosting `author` references the canonical Person defined on /about/<slug>.
// Otherwise, fall back to inline {@type: Person, name}.
export function getAuthorSchema(author: string) {
  const entry = (AUTHORS as Record<string, { name: string; url?: string }>)[
    author
  ];
  if (!entry) return { "@type": "Person" as const, name: author };
  if (!entry.url) return { "@type": "Person" as const, name: entry.name };
  return {
    "@type": "Person" as const,
    "@id": `${entry.url}#person`,
    name: entry.name,
    url: entry.url,
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  dateModified?: string; // YYYY-MM-DD
  author: string;
  pillar: Pillar;
  readTime: string;
  metaTitle: string;
  metaDescription: string;
  image?: string;
  noIndex?: boolean;
  disclaimer?: "tax-au";
  content: ContentBlock[];
}

// ── Posts ──

const posts: BlogPost[] = [
  {
    slug: "modeling-agency-payments-guide",
    title:
      "Modeling Agency Payments: The Complete Guide",
    description:
      "How modeling agency payments actually work — commission rates, payment timelines by country, vouchers, late payments, and tracking across agencies.",
    date: "2026-05-18",
    author: "Roman Feldman",
    pillar: "Your Money",
    readTime: "8 min read",
    metaTitle:
      "Modeling Agency Payments: The Complete Guide",
    metaDescription:
      "How modeling agency payments actually work — commission rates, payment timelines by country, vouchers, late payments, and tracking across agencies.",
    content: [
      {
        type: "paragraph",
        text: "There is a version of modeling that looks like this: you do the job, you get paid, you move on. The reality is messier. Payments arrive weeks or months after the shoot. Commission is deducted before you ever see a dollar. Across multiple agencies in multiple countries, the numbers stop being easy to hold in your head. This guide exists to make the whole system legible.",
      },
      {
        type: "paragraph",
        text: "I built BOOKDU because my daughter was working across three countries and had no reliable way to know what she was owed, what had been paid, and what had quietly slipped through the cracks. What follows is everything I've learned since then about how modeling agency payments actually work.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "How Do Modeling Agency Payments Work?",
      },
      {
        type: "paragraph",
        text: "Modeling agencies do not pay models directly from their own funds. The agency invoices the client for the job, waits to receive that payment, then deducts their commission and passes the remainder to the model. From shoot day to your bank account, you are typically waiting 60 to 120 days. This is not a malfunction — it is how the industry has always operated.",
      },
      {
        type: "paragraph",
        text: "Understanding this cycle is the foundation of every other financial decision you make as a working model.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "The Payment Lifecycle: From Shoot to Bank Account",
      },
      {
        type: "paragraph",
        text: "Most of the confusion around modeling agency payments comes from not understanding the sequence. Here is how a typical payment moves.",
      },
      {
        type: "paragraph",
        text: "**Step 1 — The job happens.** You show up, you work, the shoot wraps. Before you leave set, you should be signing a model voucher — a document that confirms the hours worked, the agreed rate, and the usage terms. [Model vouchers](/blog/what-is-a-modeling-voucher) are the paper trail that protects you if a payment is ever disputed. Never skip this step.",
      },
      {
        type: "paragraph",
        text: "**Step 2 — The agency invoices the client.** Your agency sends an invoice to the client, usually within a few days of the job. This is where the clock starts — but it is the client's clock, not yours.",
      },
      {
        type: "paragraph",
        text: "**Step 3 — The client pays the agency.** Client payment terms vary. Net 30 is common for commercial work. Net 60 and net 90 are standard in editorial and fashion. Large retailers and brands often pay on their own schedules regardless of what the contract says. The agency is waiting, and so are you.",
      },
      {
        type: "paragraph",
        text: "**Step 4 — The agency processes payment to you.** Once the client pays, the agency deducts their commission and sends you the balance. This step can take an additional one to two weeks depending on the agency's internal payroll cycle.",
      },
      {
        type: "paragraph",
        text: "**Step 5 — The money arrives.** From shoot date to bank account, 60 to 90 days is normal for commercial work. Editorial and fashion can stretch to 90 to 120 days. Some models report waiting six months or longer on high-fashion bookings.",
      },
      {
        type: "quote",
        text: "The reason the delay exists is not that agencies are holding your money. Most of the time, they are waiting on the same clients you are. The system is slow. That is different from being broken.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "Commission Rates: What Agencies Actually Take",
      },
      {
        type: "paragraph",
        text: "The standard agency commission is 20% of your gross booking fee. This has been the industry norm for decades. On a $5,000 job, the agency earns $1,000. You receive $4,000 before tax.",
      },
      {
        type: "paragraph",
        text: "A few important layers on top of that.",
      },
      {
        type: "paragraph",
        text: "**Client-side commission.** Many agencies also charge the client a service fee — sometimes another 10 to 20% on top of your rate. This does not reduce what you receive. It is money the agency earns separately, on the client side of the transaction.",
      },
      {
        type: "paragraph",
        text: "**Mother agency commission.** If you have a mother agency — the first agency that signed and developed you — they typically earn 5 to 10% of your gross earnings from every booking, regardless of which local agency placed you. In Western markets, this usually comes out of the local agency's 20%, so your cut stays at 80%. In some Asian markets, the mother agency's 10 to 15% is charged in addition, reducing your take to as little as 65 to 70% of gross.",
      },
      {
        type: "paragraph",
        text: "**The New York cap.** The Fashion Workers Act, which took full effect in June 2025, caps agency commission at 20% for models working in New York. It also prohibits signing fees and non-refundable deposits. If you are working in the New York market, [understanding your commission rights](/blog/modeling-agency-payment-terms) is especially important.",
      },
      {
        type: "paragraph",
        text: "**When to raise an eyebrow.** Twenty percent is standard. Twenty-five percent is worth a question. Anything above that warrants careful scrutiny. Legitimate agencies earn their commission through network and negotiation — not by taking a larger cut.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "Payment Timelines by Country",
      },
      {
        type: "paragraph",
        text: "The 60-to-120-day window is a global norm, but local tax treatment, invoicing structures, and industry customs create real differences depending on where you are working.",
      },
      {
        type: "heading",
        level: "h3",
        text: "Australia",
      },
      {
        type: "paragraph",
        text: "Australian models working as sole traders operate under an ABN (Australian Business Number). Payment is often processed via RCTI — a Recipient-Created Tax Invoice — meaning the agency generates the invoice on your behalf. This simplifies the invoicing process but does not speed up payment timelines. Commercial bookings typically settle in 30 to 60 days; editorial can run longer.",
      },
      {
        type: "paragraph",
        text: "If you are earning above $75,000 per year, you are required to register for GST. [The Australian model tax guide](/blog/australian-model-tax-guide) covers this in full, including deductions, BAS, and what to do before June 30.",
      },
      {
        type: "heading",
        level: "h3",
        text: "United Kingdom",
      },
      {
        type: "paragraph",
        text: "UK models register as self-employed with HMRC and file annual Self Assessment returns. The UK tax year runs April 6 to April 5. Agencies typically process payments within 30 to 60 days of receiving client funds. VAT registration is required once your annual turnover exceeds approximately £90,000. VAT treatment for freelance models involves specific rules — a local accountant familiar with the creative industries is worth the cost.",
      },
      {
        type: "heading",
        level: "h3",
        text: "United States",
      },
      {
        type: "paragraph",
        text: "US models receive a 1099-NEC at year end from any agency or client that paid them $600 or more. No tax is withheld. This means you are responsible for setting aside your own tax throughout the year — the IRS recommends quarterly estimated payments if you expect to owe $1,000 or more for the year (due April 15, June 15, September 15, and January 15).",
      },
      {
        type: "paragraph",
        text: "Self-employment tax alone runs 15.3% on most of your net self-employment income. Combined with federal income tax, the practical guidance is to set aside 25 to 35% of every payment as soon as it arrives. The IRS provides resources for self-employed individuals at [irs.gov/businesses/small-businesses-self-employed](https://www.irs.gov/businesses/small-businesses-self-employed).",
      },
      {
        type: "paragraph",
        text: "Models working across multiple states may need to file returns in each state where they performed work. This is an area where professional tax advice pays for itself.",
      },
      {
        type: "heading",
        level: "h3",
        text: "Europe",
      },
      {
        type: "paragraph",
        text: "Payment terms and structures vary significantly across EU markets. France, Italy, Germany, and Spain each have their own tax treatment for freelance creative workers. Some markets operate hybrid employment structures through agencies. VAT obligations, social contributions, and filing deadlines differ by country — consult a local accountant familiar with freelance or creative industry work before filing anything for the first time.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "What a $10,000 Booking Actually Nets You",
      },
      {
        type: "paragraph",
        text: "This is a number most models do not calculate until it lands in their account and looks smaller than expected.",
      },
      {
        type: "paragraph",
        text: "Take a $10,000 booking in the US market.",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Agency commission (20%): −$2,000. You now have $8,000 gross.",
          "Federal income tax and self-employment tax: this varies by total annual income, filing status, and deductions, but roughly 30 to 40% of net self-employment income is a working estimate for many models. On $8,000 gross, that is somewhere in the range of $2,400 to $3,200 — though your actual liability depends on your full tax picture.",
          "Expenses: comp card reprints, travel to set, grooming. Easily $200 to $500 on a single job.",
        ],
      },
      {
        type: "paragraph",
        text: "In our experience, models who run these numbers for the first time are often surprised to find their take-home closer to $4,000 to $5,000 on a $10,000 booking — roughly half the headline rate after commission and tax. That is not a problem with the system. It is the reality of running a business. Knowing it means you plan around it instead of being blindsided by it.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "Late Payments: What's Normal, What Isn't, and What to Do",
      },
      {
        type: "paragraph",
        text: "[Late payments from modeling agencies](/blog/modeling-agency-late-payment) are one of the most common sources of stress for working models. The first thing to establish is the difference between late and overdue.",
      },
      {
        type: "paragraph",
        text: "**Under 60 days from shoot date:** In most cases, this is still within normal payment cycle territory. Depending on the client's payment terms, your agency may not have received anything yet.",
      },
      {
        type: "paragraph",
        text: "**60 to 90 days from shoot date:** This is the outer edge of normal for commercial work. If you have not received payment and have not heard anything, a polite check-in with your agency is reasonable.",
      },
      {
        type: "paragraph",
        text: "**90+ days from shoot date:** This warrants follow-up. Send a written request — email is fine — asking for an update on the payment status. Keep it professional. Reference the job, the date, and the agreed rate. In most cases, this is enough to prompt a response.",
      },
      {
        type: "paragraph",
        text: "**What documentation helps.** This is where [model vouchers](/blog/what-is-a-modeling-voucher) become critical. A signed voucher is your record that the work happened, at what rate, and under what terms. If a payment is ever disputed, the voucher is your evidence. Without it, you are relying on email threads and memory.",
      },
      {
        type: "paragraph",
        text: "BOOKDU sends automatic payment reminders at 35 days and again at 56 days after a job date, so you always know which payments are approaching or past due — without having to maintain a separate spreadsheet or rely on memory.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "Managing Payments Across Multiple Agencies",
      },
      {
        type: "paragraph",
        text: "Most working models are not signed exclusively to one agency. Commercial models often work with three, four, or five agencies across different markets, each booking different types of jobs on different payment schedules. The financial complexity compounds quickly.",
      },
      {
        type: "paragraph",
        text: "A model working with three agencies across two countries might have:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Six open payments at varying stages of the 60-to-120-day cycle",
          "Commission rates that differ by agency",
          "Tax obligations in multiple jurisdictions",
          "Contracts at different stages of their term",
        ],
      },
      {
        type: "paragraph",
        text: "[Managing multiple modeling agencies](/blog/how-to-track-payments-multiple-modeling-agencies) is genuinely complex. The models who handle it well are not the ones who are better at mental arithmetic — they are the ones who have a system. That system can be a well-maintained spreadsheet or a purpose-built tool. What it cannot be is your inbox and your memory.",
      },
      {
        type: "paragraph",
        text: "A [model payment tracker](/payment-tracker) gives you a single place to log every job, every agency, every expected payment date, and every amount. When something goes overdue, you know immediately. When tax time arrives, the data is already organised.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "Protecting Yourself: Vouchers, Contracts, and Records",
      },
      {
        type: "paragraph",
        text: "Beyond payment tracking, there are three documents every working model should have organised and accessible at all times.",
      },
      {
        type: "paragraph",
        text: "**Model vouchers.** Signed on set for every job. Store them. They are your primary evidence for every payment you are owed.",
      },
      {
        type: "paragraph",
        text: "**Agency contracts.** These set your commission rate, exclusivity terms, contract duration, notice periods, and auto-renewal conditions. [Modeling contract red flags](/blog/modeling-contract-red-flags) covers what to look for before you sign. What most models miss is the auto-renewal clause — many contracts renew automatically unless you give written notice 30 to 90 days before expiry. Missing that window means another term you did not actively choose.",
      },
      {
        type: "paragraph",
        text: "**Pay advice and remittance statements.** Every payment from an agency should come with a statement showing your gross fee, commission deducted, and net paid. Keep these. They are your tax records and your reconciliation tool.",
      },
      {
        type: "paragraph",
        text: "Digital storage of all three — accessible from your phone, backed up to the cloud — is the baseline. Losing paperwork is how unpaid jobs stay unpaid.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "The Models Who Stay on Top of Their Money",
      },
      {
        type: "paragraph",
        text: "Over the years of building and refining BOOKDU, one pattern has been consistent: the models who manage their finances well are not the ones who earn the most. They are the ones who know their numbers.",
      },
      {
        type: "paragraph",
        text: "They know which jobs have been paid and which are still pending. They know when a payment has crossed the 56-day mark and needs a follow-up. They know what their effective take-home looks like after commission and tax. They know when their contracts expire. None of this is glamorous. All of it is the difference between a career that builds and one that leaks.",
      },
      {
        type: "paragraph",
        text: "The industry will not hand you this clarity. Your agency is managing hundreds of models and dozens of clients — your individual payment is one line in a large spreadsheet. The responsibility for knowing your own financial position sits with you.",
      },
      {
        type: "paragraph",
        text: "**BOOKDU is the app that makes this manageable.** Track every payment by job and agency. Set reminders so nothing goes past 35 or 56 days without your attention. Store your contracts with expiry tracking. Log expenses as they happen and export a clean CSV at tax time. One app. Everything in one place.",
      },
      {
        type: "paragraph",
        text: "[Download BOOKDU from the App Store](https://apps.apple.com/app/bookdu) and stop carrying your career finances in your head.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "paragraph",
        text: "*Roman Feldman is the founder of BOOKDU. He built the app after watching his daughter — a working model across three countries — chase payments with no reliable system to track what she was owed.*",
      },
    ],
  },
  {
    slug: "modeling-agency-payment-terms",
    title:
      "Modeling Agency Payment Terms: What Actually Happens to Your Money After a Job",
    description:
      "Net 30, net 60, net 90 — what modeling agency payment terms actually mean for your money, and how to stop losing track of what you're owed.",
    date: "2026-05-11",
    author: "Roman Feldman",
    pillar: "Your Money",
    readTime: "6 min read",
    metaTitle:
      "Modeling Agency Payment Terms Explained | BOOKDU",
    metaDescription:
      "Net 30, net 60, net 90 — what modeling agency payment terms actually mean for your money, and how to stop losing track of what you're owed.",
    content: [
      {
        type: "paragraph",
        text: "You finished the job. Wardrobe, hair, three location changes, a lunch break that turned into fifteen minutes. You did the work. Then you went home and waited.",
      },
      {
        type: "paragraph",
        text: "Thirty days passed. Sixty. You sent a message to your booker. \"Should be coming through soon.\" Ninety days in, you honestly can't remember if you even got paid or if it slipped past you in a busy week.",
      },
      {
        type: "paragraph",
        text: "That is not a failure of memory. That is a system that was never designed to be transparent. Understanding how modeling agency payment terms actually work — and why the timeline feels so long — is the first step to staying on top of what you are owed.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Why Payments Take So Long",
      },
      {
        type: "paragraph",
        text: "The delay is not an accident and it is not (usually) your agency being difficult. It is the result of how money moves through the industry.",
      },
      {
        type: "paragraph",
        text: "Here is the actual sequence:",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "You do the job.",
          "Your agency invoices the client. This might happen the same week or it might take a few weeks depending on how the booking was administered.",
          "The client pays the agency. Their payment terms — net 30, net 60, sometimes net 90 — run from the date of invoice, not from the shoot date.",
          "The agency deducts their commission (typically 20%) and processes your payment. That cycle takes another week or two in most cases.",
        ],
      },
      {
        type: "paragraph",
        text: "By the time you see money in your account, you might be looking at 60 to 120 days from the day you stood in front of a camera. For larger commercial clients, editorial clients paying slowly, or jobs that ran over in administration, 90 to 120 days is not unusual. Some models report waiting six months for specific bookings.",
      },
      {
        type: "paragraph",
        text: "That is not an aberration. That is the system.",
      },
      {
        type: "paragraph",
        text: "What does matter — and what most models only learn the hard way — is that you need to know where every job sits in that cycle. Not approximately. Precisely.",
      },
      {
        type: "heading",
        level: "h2",
        text: "What \"Net 30,\" \"Net 60,\" and \"Net 90\" Actually Mean",
      },
      {
        type: "paragraph",
        text: "These terms show up in client contracts and agency agreements all the time. They refer to the number of days the client has to pay the invoice from the invoice date.",
      },
      {
        type: "paragraph",
        text: "**Net 30** means the client has 30 days from the invoice date to pay. In practice, many clients pay closer to the deadline than before it.",
      },
      {
        type: "paragraph",
        text: "**Net 60** gives the client 60 days. Fashion and editorial clients commonly operate on these terms because their own billing cycles are long.",
      },
      {
        type: "paragraph",
        text: "**Net 90** is increasingly common with larger brands and international clients. They have their own accounts payable processes, and a model booking is a small line item in a large budget.",
      },
      {
        type: "paragraph",
        text: "The invoice date and the shoot date are not the same thing. A shoot on March 1 might not be invoiced until March 10. If the client has net 60 terms, they have until May 10 to pay. Your agency then processes your payment. You might see it in late May or early June — 12 or 13 weeks after you did the work.",
      },
      {
        type: "paragraph",
        text: "This is why \"it's coming\" from your booker can feel maddeningly vague. It is not vague to them because they know exactly where the invoice sits. But if you have not tracked the original job date, the booking rate, and the expected payment window, you have no independent way to verify anything.",
      },
      {
        type: "heading",
        level: "h2",
        text: "The Double Commission Structure",
      },
      {
        type: "paragraph",
        text: "One thing that affects your net earnings — and your understanding of what you will actually receive — is how commission is calculated.",
      },
      {
        type: "paragraph",
        text: "Your agency typically charges you 20% of your gross booking fee. On a $3,000 day rate, they deduct $600 and you receive $2,400.",
      },
      {
        type: "paragraph",
        text: "What many models do not realize is that agencies also charge the client a separate service fee — often another 15 to 20% on top of your rate. On a $3,000 booking from your perspective, the client may have paid the agency $3,450 to $3,600 in total. The agency earns from both sides of the transaction.",
      },
      {
        type: "paragraph",
        text: "This structure is legal and industry-standard. What it means for you is that the number you need to track is your net rate — what the agency owes you after their commission — not the total client payment. Your agreement with the agency should specify the commission structure clearly. If it does not, ask.",
      },
      {
        type: "paragraph",
        text: "Understanding this helps avoid a common confusion: thinking a payment is short when it has actually been correctly calculated.",
      },
      {
        type: "heading",
        level: "h2",
        text: "When to Follow Up — and How",
      },
      {
        type: "paragraph",
        text: "Most models either follow up too early (before the payment cycle has had a chance to complete) or too late (after the payment has been so long outstanding that records are blurry on both sides). Neither is useful.",
      },
      {
        type: "paragraph",
        text: "A sensible framework:",
      },
      {
        type: "paragraph",
        text: "**At 35 days from the shoot date:** Make a note. If you have not seen payment and the job was on standard net 30 terms, it is early but worth checking that the invoice was sent. Not a chase — a quiet confirmation.",
      },
      {
        type: "paragraph",
        text: "**At 60 days:** If you are on net 60 terms, this is when payment should be arriving or imminent. If you have not seen it, a brief, professional message to your booker is appropriate. Not an accusation. Just: \"I wanted to check in on payment for the [client] job on [date] — can you confirm where it sits?\"",
      },
      {
        type: "paragraph",
        text: "**At 90 days:** If payment has not arrived and you have not received a clear explanation, this is when to escalate gently. Ask for an invoice reference number. Get a specific expected payment date in writing.",
      },
      {
        type: "paragraph",
        text: "**Beyond 90 days with no clear timeline:** At this point it is reasonable to ask your agency for documentation — the invoice date, the client's payment terms, confirmation that the client has paid the agency. You are not being difficult. You did the work. You deserve to know.",
      },
      {
        type: "paragraph",
        text: "The important thing in all of this is having the records to back up the conversation. If you can say \"I did this job on this date, the agreed rate was this, and I have not seen payment after 90 days,\" the conversation is clear. If you are working from memory, it gets murky quickly.",
      },
      {
        type: "paragraph",
        text: "This is exactly the problem BOOKDU was built to solve. When you log a job and its expected payment, you always know what is outstanding, what is overdue, and what has been paid — without having to scroll through months of emails or trust your memory across three agencies and two countries.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Multi-Currency and Multi-Agency: Where Things Get Complicated",
      },
      {
        type: "paragraph",
        text: "If you work internationally — which many models do, particularly those based in Australia, the UK, or mainland Europe — the payment picture gets more complex.",
      },
      {
        type: "paragraph",
        text: "You might have bookings from an agency in Sydney, another in London, and one-off jobs handled by a mother agency in Milan. Each operates on different payment terms. Each invoices in a different currency. Each has its own internal processing timeline.",
      },
      {
        type: "paragraph",
        text: "The AUD/GBP/EUR exchange rate moves. A booking that was $4,200 AUD when you did the job might arrive as slightly more or less depending on when the conversion happens. If you are not tracking each booking individually, it is genuinely difficult to know whether you have been paid correctly.",
      },
      {
        type: "paragraph",
        text: "The other issue is volume. A working model might complete 40 to 60 jobs in a year across multiple agencies. Even if only 5% of payments are ever late or incorrect, that is 2 to 3 jobs that could silently fall through the cracks. At $1,500 to $3,000 per job, that adds up faster than it should.",
      },
      {
        type: "paragraph",
        text: "The models who stay on top of their money are not the ones who chase hardest when something goes wrong. They are the ones who always know where every job sits. The chase becomes easy when you have records. It becomes stressful when you do not.",
      },
      {
        type: "heading",
        level: "h2",
        text: "You Did the Work. Know What You're Owed.",
      },
      {
        type: "paragraph",
        text: "Modeling agency payment terms were not designed with your visibility in mind. They were designed for client billing cycles and agency cash flow. That is the reality, and it is not going to change.",
      },
      {
        type: "paragraph",
        text: "What you can change is how clearly you see your own finances. Every job logged. Every expected payment tracked. Every overdue balance surfaced before it disappears.",
      },
      {
        type: "paragraph",
        text: "BOOKDU tracks your payments, contracts, expenses, and calendar in one place — with automatic reminders at 35 and 56 days so nothing slips past you. Download it from the App Store.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "paragraph",
        text: "*Roman Feldman is the father of a working model. He built BOOKDU because he watched his daughter chase payments across three countries.*",
      },
    ],
  },
  {
    slug: "model-new-to-industry-finance",
    title:
      "What Nobody Tells You About Money When You're New to the Industry",
    description:
      "Late payments, tax surprises, commission maths—here's the financial side of modelling nobody explains to you when you sign.",
    date: "2026-05-04",
    author: "Roman Feldman",
    pillar: "Your Money",
    readTime: "6 min read",
    metaTitle:
      "Model New to the Industry: What to Know About Money",
    metaDescription:
      "Late payments, tax surprises, commission maths—here's the financial side of modelling nobody explains to you when you sign.",
    content: [
      {
        type: "paragraph",
        text: "You signed with an agency. You did your first job. Someone told you the payment would take \"a few weeks.\" It's been two months and you're not sure if that's normal, if something went wrong, or if you're supposed to be chasing someone about it.",
      },
      {
        type: "paragraph",
        text: "Nobody told you what to expect. That's not unusual. The modelling industry is one of the few professions that puts people to work without explaining how any of the business side actually functions. Most of what you learn, you learn the hard way.",
      },
      {
        type: "paragraph",
        text: "This is an attempt to short-circuit some of that.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "The payment timeline is longer than you think",
      },
      {
        type: "paragraph",
        text: "Here is how the money moves when you book a job through an agency.",
      },
      {
        type: "paragraph",
        text: "You do the work. Your agency invoices the client. The client pays the agency — on net 30, net 60, or sometimes net 90 terms, counting from the invoice date, not the shoot date. Then the agency deducts their commission and pays you.",
      },
      {
        type: "paragraph",
        text: "By the time that chain completes, you are commonly looking at 60 to 120 days between the day you worked and the day the money arrives in your account. In fashion specifically, net 90 from invoice is not unusual. That invoice might not have been raised until a week or two after the job.",
      },
      {
        type: "paragraph",
        text: "So if you shot something in February and it is now May and you still have not been paid, that is not necessarily a crisis. It might be entirely normal. The problem is that without tracking it, you have no way to know whether it is normal or whether something has actually slipped.",
      },
      {
        type: "paragraph",
        text: "What I hear from models consistently is that the ones who handle finances well are not the ones who stress least about money. They are the ones who always know exactly where things stand. What was booked. What was invoiced. What has landed and what is still outstanding. When you do not know that, every week that passes without a payment feels like a problem, even when it is not.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "The commission maths you need to do before you feel rich",
      },
      {
        type: "paragraph",
        text: "Your agency takes 20%. That is the industry standard and has been for decades. In most markets, that comes out of your earnings — so on a $5,000 day rate, you receive $4,000.",
      },
      {
        type: "paragraph",
        text: "What often catches newer models off guard is that the headline rate on a booking is not your take-home. Before you budget around a number, run the maths. Commission off the top. Then tax — and we will get to that.",
      },
      {
        type: "paragraph",
        text: "If you work with a mother agency, there is an additional commission layer: typically 5 to 10% of your gross earnings. In most Western markets, this comes out of the local agency's 20% cut, so your take-home does not change. In some Asian markets, it is charged on top of the local agency commission, which means you might lose 30 to 35% before you even think about tax.",
      },
      {
        type: "paragraph",
        text: "The other thing worth understanding early is double commission. Your agency earns a fee from you (20% of your rate) and often charges the client a separate service fee — sometimes another 20% — on top of your rate. That is standard practice and does not affect your pay. But it tells you something about the economics of the agency business. They are running a real commercial operation. They are not sitting on your money for fun. Long payment timelines are usually the result of slow-paying clients, not slow-paying agencies.",
      },
      {
        type: "paragraph",
        text: "None of this is to make you suspicious of anyone. It is to give you the full picture so you are not surprised by it later.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "Tax will arrive before you are ready for it",
      },
      {
        type: "paragraph",
        text: "Most models operate as independent contractors. You are running a business. No employer is withholding tax from your payments. When the money hits your account, all of it arrives — including the portion that will eventually belong to the tax authority.",
      },
      {
        type: "paragraph",
        text: "In Australia, that means registering an ABN and lodging a return by October 31 after the June 30 financial year end. If you earn over $75,000, you will need to think about GST registration as well.",
      },
      {
        type: "paragraph",
        text: "In the UK, you register as self-employed with HMRC and submit a Self Assessment return for the tax year ending April 5. National Insurance contributions apply on top of income tax.",
      },
      {
        type: "paragraph",
        text: "In the US, you are an independent contractor receiving a 1099-NEC. No tax is withheld. You are also liable for self-employment tax — 15.3% on 92.35% of your net income — on top of income tax at your marginal rate. The practical rule most working models in the US eventually adopt: set aside 30 to 35% of every payment the moment it arrives, into a separate account you do not touch. Your quarterly estimated tax payments come out of that. Your end-of-year bill comes out of that. What is left is actually yours.",
      },
      {
        type: "paragraph",
        text: "The EU varies by country. France, Italy, Germany, and Spain all have different structures for freelancers. If you are based in or working extensively in one market, it is worth a consultation with a local accountant who understands the creative industries.",
      },
      {
        type: "paragraph",
        text: "What models can generally deduct varies by country but commonly includes: agency commissions, portfolio and comp card costs, professional photography, travel to castings and jobs, relevant training, and a work-use portion of your phone and internet. Grooming expenses that are specifically required for work — not general personal maintenance — can also qualify in many markets.",
      },
      {
        type: "paragraph",
        text: "The key habit is not knowing every rule. The key habit is keeping records. Every receipt. Every expense. Log it as you go, not three months later when you are trying to reconstruct it from memory before a deadline.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "What falls through the cracks",
      },
      {
        type: "paragraph",
        text: "The financial risk that actually hurts models is not the tax bill they expected. It is the payment they forgot to expect.",
      },
      {
        type: "paragraph",
        text: "When you are working across multiple agencies — which is common in commercial modelling — you have payments coming from different sources on different timelines. A casting in London led to a booking that went through your UK agency. A job in Milan was placed by your European agency. Something you shot for an Australian brand six months ago is still listed as outstanding.",
      },
      {
        type: "paragraph",
        text: "Each of those has its own payment cycle. Each of those has a point at which the delay crosses from normal into genuinely overdue. Without tracking, you have no visibility. Money slips through. Jobs you finished get mentally archived while the payment is still technically outstanding.",
      },
      {
        type: "paragraph",
        text: "This is exactly the problem BOOKDU was built to address. Track every payment against every job. Know its status. Get reminded when something has been sitting unpaid long enough to warrant a follow-up. If you are working across multiple agencies and multiple markets, having that in one place — rather than scattered across emails, spreadsheets, and memory — is the difference between a system and a hope.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "What a working model's financial system actually looks like",
      },
      {
        type: "paragraph",
        text: "You do not need anything complicated. You need something consistent.",
      },
      {
        type: "paragraph",
        text: "A few practical foundations that tend to hold up across markets and career stages:",
      },
      {
        type: "paragraph",
        text: "**Track every booking the moment it is confirmed.** Not when the invoice goes out. Not when the payment arrives. When the job is confirmed. That is when it enters your record with a date, a rate, an agency, and a status.",
      },
      {
        type: "paragraph",
        text: "**Know your notice periods.** Your agency contract will have one. If you do not know how many days' notice you need to give before the contract's expiry date, find out now. Auto-renewal is standard practice. Missing the notice window means staying in a contract you might have wanted to leave.",
      },
      {
        type: "paragraph",
        text: "**Separate your tax money immediately.** Every payment that arrives, move the tax portion into a separate account the same day. Do not give yourself the opportunity to spend it.",
      },
      {
        type: "paragraph",
        text: "**Keep receipts as you go.** The models who suffer most at tax time are the ones who did the work and spent the money but have no records. A photo of a receipt takes three seconds. Three seconds in March is worth an hour of stress in October.",
      },
      {
        type: "paragraph",
        text: "**Work with an accountant who knows freelancers.** Not just any accountant. Someone who understands variable income, contractor structures, and ideally the creative industries. They will find deductions you missed and save you more than their fee.",
      },
      {
        type: "paragraph",
        text: "The financial side of modelling is not complicated. But it is easy to ignore when you are starting out and there are other things demanding your attention. The cost of ignoring it shows up later — in tax surprises, in payments you never chased, in contracts you did not realise had renewed.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "paragraph",
        text: "BOOKDU tracks your payments, contracts, expenses, and schedule in one app — built specifically for how working models actually earn. Download it from the App Store.",
      },
    ],
  },
  {
    slug: "model-abn-sole-trader-australia",
    title:
      "Model ABN and Sole Trader: What Working Models in Australia Need to Know",
    description:
      "Working as a freelance model in Australia? Here's what an ABN means, when you need one, and how to manage the sole trader side of your career.",
    date: "2026-04-28",
    author: "Roman Feldman",
    pillar: "Career Admin",
    readTime: "5 min read",
    disclaimer: "tax-au",
    metaTitle:
      "Model ABN Sole Trader Australia: What You Need to Know",
    metaDescription:
      "Working as a freelance model in Australia? Here's what an ABN means, when you need one, and how to manage the sole trader side of your career.",
    content: [
      {
        type: "paragraph",
        text: "I built BOOKDU because I watched my daughter chase payments across three countries. Along the way, I learned a lot about how models actually get paid — the agency structures, the timelines, the paperwork — and how much of that knowledge most models pick up by accident, long after they needed it.",
      },
      {
        type: "paragraph",
        text: "The ABN conversation is one of those things. Most working models in Australia find out it needed to happen before the work started, not after.",
      },
      {
        type: "paragraph",
        text: "This post is for anyone who is freelancing as a model in Australia right now — or about to — and wants to understand what the sole trader structure means in practice. Not theory. Not scare tactics. Just what it is, how it works, and what it means for you.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "What an ABN Actually Is",
      },
      {
        type: "paragraph",
        text: "ABN stands for Australian Business Number. It is an 11-digit number that identifies your business to the government and to the businesses you work with. When you register for one, you are formally telling the ATO that you are operating as a business in your own right.",
      },
      {
        type: "paragraph",
        text: "For models working as independent contractors — which is most freelance models in Australia — this is the standard structure. You are not an employee of the agency. You are a sole trader providing services to them, and they pay you accordingly.",
      },
      {
        type: "paragraph",
        text: "The practical effect of this is that nothing is withheld from your payments. The agency does not take out income tax on your behalf. The full amount lands in your account, and the tax owing on it is your responsibility to track, set aside, and pay.",
      },
      {
        type: "paragraph",
        text: "That is not a bad thing. It gives you flexibility and control. But it does mean the financial admin is genuinely yours to manage.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "Do You Actually Need One?",
      },
      {
        type: "paragraph",
        text: "Almost certainly yes, if you are working as a freelance model in Australia and being paid directly or through an agency as a contractor.",
      },
      {
        type: "paragraph",
        text: "The clearest sign is your contract or the way you get paid. If you are invoicing an agency, if you receive payments without tax withheld, or if your agency has asked for your ABN, you are operating as a sole trader and you need one.",
      },
      {
        type: "paragraph",
        text: "Without an ABN, businesses paying you are legally required to withhold 47% of your payment under no-ABN withholding rules. That money goes to the ATO rather than to you. You can eventually claim it back through your tax return, but it is not a great system to rely on.",
      },
      {
        type: "paragraph",
        text: "Registering for an ABN is free and takes about 15 minutes through the ABN registration portal on the Australian Business Register website. You will need your tax file number and some basic details about your business activity. For most models, the business activity is simply modelling services.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "What the Sole Trader Structure Means Day to Day",
      },
      {
        type: "paragraph",
        text: "Being a sole trader does not mean running a company. It does not mean quarterly BAS lodgements (unless you register for GST). It does not mean complicated bookkeeping.",
      },
      {
        type: "paragraph",
        text: "What it does mean:",
      },
      {
        type: "paragraph",
        text: "**Your income is business income.** Every dollar you earn from modelling work goes on your tax return as business income. You report it, you pay income tax and Medicare levy on it at your marginal rate.",
      },
      {
        type: "paragraph",
        text: "**You pay your own superannuation.** There is no employer making super contributions for you. The ATO does not require sole traders to pay themselves super, but it is tax-deductible if you choose to, up to the concessional contributions cap. A lot of models do not think about super until much later than they should. Starting early makes a real difference.",
      },
      {
        type: "paragraph",
        text: "**GST is only a factor above $75,000 turnover.** If your annual model income goes over $75,000, you are required to register for GST, charge it on your services, and lodge quarterly BAS statements. Below that threshold, you do not need to worry about it. If you are approaching that number, it is worth getting across the requirements before you cross the line.",
      },
      {
        type: "paragraph",
        text: "**You keep your own records.** Invoices, receipts, contracts, payment dates. Not because anyone is watching, but because EOFY arrives every 30 June and you will need to know exactly what you earned, what you spent, and what you can claim.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "What You Can Deduct as a Model Sole Trader",
      },
      {
        type: "paragraph",
        text: "This is where the sole trader structure genuinely works in your favour. The expenses you incur in earning your modelling income are generally deductible. That means they reduce your taxable income, which reduces the tax you pay.",
      },
      {
        type: "paragraph",
        text: "Things that are commonly deductible for working models:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Agency commissions.** The percentage your agency takes is a cost of earning your income.",
          "**Comp cards and portfolio photos.** The cost of producing marketing materials for your business.",
          "**Travel for work.** Getting to castings, jobs, and fittings. The ATO has specific rules here — commuting from home to a regular workplace generally does not count, but travel to different locations for work often does.",
          "**Grooming costs.** The portion directly related to your work, not general personal grooming. This is a grey area and worth getting specific advice on.",
          "**Phone and internet.** The work-related percentage of your bills.",
          "**Professional development.** Workshops, courses, industry memberships that relate to your modelling career.",
        ],
      },
      {
        type: "paragraph",
        text: "The ATO does audit creative industry workers from time to time, particularly around grooming and clothing deductions. Keep records. If you claim it, be able to explain why it was a work expense.",
      },
      {
        type: "paragraph",
        text: "BOOKDU's expense tracking lets you log costs as they happen and categorise them by type — which makes it a lot easier at tax time when your accountant asks for the breakdown.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "The Part Nobody Mentions: The Tax You Need to Set Aside",
      },
      {
        type: "paragraph",
        text: "Because nothing is withheld from your payments, the tax owing accumulates quietly in the background until you lodge your return.",
      },
      {
        type: "paragraph",
        text: "A common pattern: a model earns well in their first active year, spends most of what comes in, lodges their tax return, and gets a bill they were not expecting.",
      },
      {
        type: "paragraph",
        text: "The way to avoid this is straightforward. Every time a payment lands, move a portion into a separate account and do not touch it. How much depends on your total income for the year, but setting aside 25-30% is a reasonable starting point for most sole traders. If you earn at the higher end of the range, that percentage needs to go up.",
      },
      {
        type: "paragraph",
        text: "If your expected tax liability is $1,000 or more, the ATO will put you on a pay-as-you-go (PAYG) instalments system after your first year, which means you pay quarterly rather than in one lump sum at the end. That is actually easier to manage — but it only kicks in after your first return. In that first year, the discipline of setting money aside is entirely on you.",
      },
      {
        type: "paragraph",
        text: "Knowing what has been paid and what is still outstanding is the foundation of all of this. If you do not have a clear picture of your income — which payments have cleared, which are still due — it is very hard to know what to set aside. That is the practical reason payment tracking matters, not just for chasing what you are owed, but for managing your tax position through the year.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "heading",
        level: "h2",
        text: "A Practical Starting Point",
      },
      {
        type: "paragraph",
        text: "If you are working as a freelance model in Australia and you have not sorted this yet, here is a simple sequence:",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "Register for an ABN at abr.gov.au. Free, takes 15 minutes.",
          "Set up a separate bank account for tax. Move 25-30% of every payment in as it arrives.",
          "Keep a record of every job, every payment, and every work expense. A spreadsheet works. An app works better if you are across multiple agencies.",
          "Talk to an accountant before your first EOFY. Even one session to understand your obligations is worth it.",
        ],
      },
      {
        type: "paragraph",
        text: "BOOKDU tracks your payments, expenses, and income across multiple agencies in one place, and lets you export a clean CSV when your accountant asks for the numbers. It is built for models working across different markets, which often means different currencies, different agencies, and different payment timelines — all of which get complicated fast without a system.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "paragraph",
        text: "Managing the business side of a modelling career is genuinely not that hard once you understand the structure. The ABN is the starting point. What comes after it — [the tax, the deductions, the super](/blog/australian-model-tax-guide) — is manageable when you have got the basics in order.",
      },
      {
        type: "paragraph",
        text: "**Download BOOKDU from the App Store to track your income and expenses across every agency, in one place.**",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "paragraph",
        text: "*This post is for general information only. Tax rules are specific to your circumstances, and they change. Talk to a registered tax professional or accountant before making decisions about your tax obligations.*",
      },
    ],
  },
  {
    slug: "how-much-commission-do-modeling-agencies-take",
    title:
      "How Much Commission Do Modeling Agencies Take — and What Happens to the Rest",
    description:
      "20% is the standard. But that's not the whole story. Here's what actually happens to your money between a booking and your bank account.",
    date: "2026-04-27",
    dateModified: "2026-05-02",
    author: "Roman Feldman",
    pillar: "Your Money",
    readTime: "6 min read",
    metaTitle:
      "How Much Commission Do Modeling Agencies Take?",
    metaDescription:
      "20% is the standard. But that's not the whole story. Here's what actually happens to your money between a booking and your bank account.",
    content: [
      {
        type: "heading",
        level: "h2",
        text: "How much commission do modeling agencies take?",
      },
      {
        type: "paragraph",
        text: "Most modeling agencies take **20% commission** on your gross fee. That is the industry standard across Australia, the UK, the US, and the EU, and it is now legally capped at 20% in New York under the Fashion Workers Act (effective June 2025). The actual range you will encounter:",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "**20% — the global standard** for most commercial, editorial, and fashion bookings. Legally capped at 20% in New York, with no signing fees or deposits permitted.",
          "**25–35% — international and multi-agency placements**, particularly in some Asian markets where the mother agency's cut sits on top of the local agency's commission rather than coming out of it.",
        ],
      },
      {
        type: "paragraph",
        text: "Anything above 25% outside an international placement is worth a question — not automatically wrong, but the higher rate should come with a clear explanation of what it is buying you. And the 20% is just the agency's cut. On top of that comes tax (25–35% set-aside is the rule across AU, UK, and US), business expenses, and — if you have a mother agency placing you internationally — a second commission split. A $5,000 booking realistically nets a freelance model $2,500 to $3,000 after commission and tax. The rest of this post walks through where the gap goes.",
      },
      {
        type: "paragraph",
        text: "You booked a $5,000 job. Your agency calls it a win. Everyone's happy.",
      },
      {
        type: "paragraph",
        text: "Then the payment arrives and it's $3,800. Or $3,200. Or something else entirely that nobody quite explained.",
      },
      {
        type: "paragraph",
        text: "This is one of the most common sources of confusion for working models — not because agencies are hiding anything, but because nobody ever sits you down and walks through the maths. You're expected to figure it out as you go.",
      },
      {
        type: "paragraph",
        text: "So here it is, laid out plainly.",
      },
      {
        type: "paragraph",
        text: "Before any of this maths begins, there is a single document that captures the gross fee everyone is calculating from: the [voucher you sign on set](/blog/what-is-a-modeling-voucher). Every commission split, every tax calculation, and every payment timeline traces back to that signed form. If the voucher is wrong — wrong rate, wrong hours, wrong usage — the rest of the chain is wrong with it. So the maths below assumes a voucher that matches what was actually agreed.",
      },
      {
        type: "heading",
        level: "h2",
        text: "The Standard Rate: 20%",
      },
      {
        type: "paragraph",
        text: "In most markets — Australia, the UK, the US, the EU — the standard agency commission is 20% of your gross earnings.",
      },
      {
        type: "paragraph",
        text: "On a $5,000 booking, that's $1,000 to the agency. You take home $4,000 before tax.",
      },
      {
        type: "paragraph",
        text: "That's the number you'll see cited most often, and for straightforward commercial work with a local agency in a single market, it's usually accurate. The 20% covers what the agency does: sourcing work, negotiating rates, managing client relationships, [chasing payments](/blog/how-long-to-get-paid-as-a-model), and handling the admin that would otherwise fall on you.",
      },
      {
        type: "paragraph",
        text: "New York's [Fashion Workers Act](https://www.nysenate.gov/legislation/bills/2023/S9832), which came into effect in June 2025, put a legal cap on this at 20% for models working in New York. No agency can charge more. No signing fees. No deposits. That's the law.",
      },
      {
        type: "paragraph",
        text: "Outside New York, the 20% figure is industry standard rather than legally mandated, which means there's room for variation — and there often is.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Where It Gets More Complicated",
      },
      {
        type: "paragraph",
        text: "The 20% commission is what the agency charges you. But agencies also typically charge the client a service fee on top of your rate. That can be another 15-20% added to the invoice the client receives.",
      },
      {
        type: "paragraph",
        text: "What does this mean in practice? On a $5,000 booking, the client might actually be billed $5,750 to $6,000. The agency collects both your fee and theirs. You receive your $5,000 minus 20%, and the agency pockets its service fee separately.",
      },
      {
        type: "paragraph",
        text: "This is legal, common, and how agencies stay in business. It's worth understanding because it explains why the total cost to a client for your work is often significantly higher than what ends up in your account.",
      },
      {
        type: "paragraph",
        text: "Then there's the mother agency.",
      },
      {
        type: "paragraph",
        text: "If you have a mother agency — the agency that first signed you and placed you with local agencies in other markets — they typically earn 5 to 10% of your gross earnings from every booking, regardless of where it happens. In most Western markets, this comes out of the local agency's 20%, split roughly 50/50. So you still lose 20% total, and the two agencies divide it between themselves. Your take doesn't change.",
      },
      {
        type: "paragraph",
        text: "In some Asian markets, the structure is different. The mother agency's commission of 10 to 15% can be charged on top of the local agency's cut rather than from it. That brings total deductions to 30 to 35% of your gross fee before you've paid a cent of tax. If you're working internationally or considering placements in Japan, South Korea, or China, this is something to understand before you sign anything.",
      },
      {
        type: "heading",
        level: "h2",
        text: "The Tax Layer (This Is Where It Gets Real)",
      },
      {
        type: "paragraph",
        text: "Commission is deducted before you ever see the money. Tax comes after, but it's owed on what you earned before commission in some countries and on what you received in others — the specifics depend on where you're based and how your income is classified.",
      },
      {
        type: "paragraph",
        text: "What's consistent across Australia, the UK, and the US is this: as an independent contractor, nothing is withheld on your behalf. Every dollar that arrives in your account has tax owing on it. The agency isn't your employer. They are not sending anything to the ATO, HMRC, or the IRS on your behalf. That's entirely your responsibility.",
      },
      {
        type: "paragraph",
        text: "In the US, the self-employment tax alone runs to around 15.3% on top of income tax. Australian models operating as sole traders need to account for income tax and potentially GST once they cross $75,000 in annual turnover. UK models registered as self-employed have income tax plus Class 2 and Class 4 National Insurance contributions.",
      },
      {
        type: "paragraph",
        text: "The practical rule that holds across all three markets: set aside 25 to 35% of every net payment into a separate account immediately. Don't touch it. The money feels like yours. Some of it is not.",
      },
      {
        type: "paragraph",
        text: "When you run the full calculation — 20% to the agency, 25 to 35% in tax, plus business expenses — a $5,000 booking can realistically net you $2,500 to $3,000. That's still meaningful income. But the headline number and the real number are very different, and working to the headline is how models end up in trouble.",
      },
      {
        type: "paragraph",
        text: "This is exactly where having a system matters. BOOKDU lets you log each job with the agency, track the expected net payment after commission, and flag when it's overdue — so the number you're watching is the number that actually hits your account, not the figure on the original booking confirmation.",
      },
      {
        type: "heading",
        level: "h2",
        text: "What You're Paying For (and What to Watch For)",
      },
      {
        type: "paragraph",
        text: "Agency commission isn't a tax or a penalty. It's a fee for a real service. A good agency negotiates your rates upward, fights for usage fees you wouldn't know to ask for, maintains client relationships that bring you repeat bookings, and handles the slow administrative work of chasing invoices across multiple clients.",
      },
      {
        type: "paragraph",
        text: "The 20% is often worth it.",
      },
      {
        type: "paragraph",
        text: "That said, there are structures that warrant a closer look.",
      },
      {
        type: "paragraph",
        text: "Commission above 25% is outside the standard range. Not automatically wrong — some specialist agencies or niche markets operate differently — but it's worth understanding exactly what justifies the higher rate before signing.",
      },
      {
        type: "paragraph",
        text: "In-house photography requirements are a red flag that's been documented by the FTC and the Model Alliance for decades. Legitimate agencies make money when you work. They don't need to charge you for a portfolio shoot before they'll represent you.",
      },
      {
        type: "paragraph",
        text: "If you're moving into a new market and a local agency is proposing fees or charges beyond their commission on bookings, that's worth questioning carefully. The standard model is simple: you work, you get paid, they take their percentage. Everything else needs a clear explanation.",
      },
      {
        type: "paragraph",
        text: "Multi-market arrangements — where you have a mother agency placing you with local agencies internationally — are legitimate and common. Just make sure you understand the full commission structure before you agree to placements. Ask directly: is your cut coming from the local agency's commission, or on top of it?",
      },
      {
        type: "heading",
        level: "h2",
        text: "Common questions about modeling agency commission",
      },
      {
        type: "heading",
        level: "h3",
        text: "Can a modeling agency charge more than 20%?",
      },
      {
        type: "paragraph",
        text: "Outside New York, yes — there is no legal cap, and some specialist or smaller agencies charge 25% or more. It is not automatically wrong, but anything above 25% should come with a clear explanation of what the higher rate is buying you. In New York, the Fashion Workers Act caps commission at 20%, with no signing fees or deposits permitted.",
      },
      {
        type: "heading",
        level: "h3",
        text: "Do mother agencies charge commission on top of the local agency?",
      },
      {
        type: "paragraph",
        text: "In most Western markets, no — the mother agency's 5–10% comes out of the local agency's 20%, so your total deduction stays at 20%. In some Asian markets (notably Japan, South Korea, and parts of China), the mother agency's commission can sit on top, bringing your total deduction to 30–35%. Ask directly before signing any international placement: \"is your cut coming from the local agency's 20%, or on top of it?\"",
      },
      {
        type: "heading",
        level: "h3",
        text: "Is the agency service fee separate from my commission?",
      },
      {
        type: "paragraph",
        text: "Yes. The 20% is what the agency deducts from your earnings. The service fee — typically 15–20% — is added to the client's invoice on top of your rate. You do not see it on your end, but it explains why a $5,000 booking costs the client closer to $5,750–$6,000. This is legal, common, and how agencies stay in business.",
      },
      {
        type: "heading",
        level: "h3",
        text: "Are signing fees, registration fees, or in-house photography charges normal?",
      },
      {
        type: "paragraph",
        text: "No. Legitimate agencies make money when you work, not before. The FTC and Model Alliance have documented in-house photography requirements as a long-standing red flag in the industry. If a local agency is asking for fees beyond commission on actual bookings, that is worth questioning carefully.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Knowing Your Numbers",
      },
      {
        type: "paragraph",
        text: "The models who manage their finances well aren't necessarily the ones earning the most. They're the ones who know their numbers.",
      },
      {
        type: "paragraph",
        text: "That means knowing the gross fee for every booking. Knowing what the agency will deduct. Knowing when payment is expected and what the typical client-to-agency-to-you timeline looks like in that market (60 to 120 days is normal — the money isn't late, the industry is slow). And setting aside enough for tax before you start spending what arrived.",
      },
      {
        type: "paragraph",
        text: "It's not complicated in principle. It's just easy to lose track of when you're working across two or three agencies, in multiple countries, with bookings at different stages of the payment cycle all at once.",
      },
      {
        type: "paragraph",
        text: "Keeping a clear record of every booking — agency, gross fee, expected net, payment status, due date — is the single most useful habit a working model can build. Whether you use BOOKDU or a spreadsheet that you actually check, the system matters less than having one. The models who end up chasing phantom payments or hitting a surprise tax bill in June are almost always the ones who were tracking it in their head.",
      },
      {
        type: "paragraph",
        text: "---",
      },
      {
        type: "paragraph",
        text: "**Roman Feldman** is the father of a working model. He built BOOKDU because he watched his daughter chase payments across three countries.",
      },
      {
        type: "paragraph",
        text: "BOOKDU tracks your payments, contracts, expenses, and schedule in one app — including net payment amounts per agency so you always know what you're actually owed, not just what was booked. [Download BOOKDU from the App Store.](https://apps.apple.com/app/bookdu)",
      },
    ],
  },
  {
    slug: "what-is-a-modeling-voucher",
    title:
      "What Is a Modeling Voucher and Why It Matters for Getting Paid",
    description:
      "A modeling voucher is the document that confirms your work, your rate, and what the client can do with your images. Here's what to check before you sign one.",
    date: "2026-04-26",
    dateModified: "2026-05-02",
    author: "Bec",
    pillar: "Your Money",
    readTime: "6 min read",
    metaTitle:
      "What Is a Modeling Voucher? Why It Matters for Payment",
    metaDescription:
      "A modeling voucher is the document that confirms your work, your rate, and what the client can do with your images. Here's what to check before you sign one.",
    content: [
      {
        type: "heading",
        level: "h2",
        text: "What is a modeling voucher and why does it matter?",
      },
      {
        type: "paragraph",
        text: "A modeling voucher is the document you sign at the end of a job that confirms three things: you did the work, the rate you agreed to, and how the client is allowed to use the resulting images. It might be called a booking sheet, a job sheet, or a confirmation form depending on the agency, but it serves the same role across every market. The voucher is the official record that the work happened and the terms everyone agreed to. It is the foundation of your payment.",
      },
      {
        type: "paragraph",
        text: "Most models sign without reading carefully — and most of the time, that is fine. But when something goes wrong months later, the voucher is what everyone goes back to: the agency, the client, sometimes a lawyer. A late payment, a usage dispute, an hours discrepancy — every one of these resolves by checking what was signed on the day. Sixty seconds of attention before you sign is one of the highest-leverage habits in this industry.",
      },
      {
        type: "heading",
        level: "h2",
        text: "What a Voucher Typically Includes",
      },
      {
        type: "paragraph",
        text: "Vouchers vary in format, but most cover the same core information:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Your name and agency**",
          "**The client's name** (the brand, publication, or company that booked the job)",
          "**The date and location** of the job",
          "**The hours worked** — start time and end time. This matters for overtime calculations and half-day versus full-day rates.",
          "**The rate** — your agreed fee for the job. This should match what your agency confirmed when the booking was made.",
          "**Usage terms** — how the client is permitted to use the images from the shoot. This is the clause that matters most long-term.",
          "**Your signature** — confirming you agree to everything above",
        ],
      },
      {
        type: "paragraph",
        text: "Some vouchers also include notes about wardrobe provided, travel reimbursement, or any special conditions discussed on set.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Why Usage Terms Are the Part to Read Carefully",
      },
      {
        type: "paragraph",
        text: "The rate gets your attention. The usage terms should get more of it.",
      },
      {
        type: "paragraph",
        text: "Usage terms define what the client can do with the images from the shoot — where they can appear, for how long, and in what formats. The difference between a local digital campaign for one year and a global buyout with perpetual rights is enormous, and it is spelled out (or not) on the voucher.",
      },
      {
        type: "paragraph",
        text: "Here is what to watch for:",
      },
      {
        type: "paragraph",
        text: "**Scope:** Is this for a specific region (Australia, North America, global) or \"worldwide\"? A worldwide licence is worth significantly more than a local one.",
      },
      {
        type: "paragraph",
        text: "**Duration:** Is the usage for one year, two years, or \"in perpetuity\"? Perpetuity means forever — the client can use your images indefinitely with no further payment.",
      },
      {
        type: "paragraph",
        text: "**Medium:** Print only? Digital only? All media including broadcast, outdoor, and packaging? Each medium carries different value, and a shoot for Instagram content should not automatically include billboard rights.",
      },
      {
        type: "paragraph",
        text: "**Exclusivity:** Does the client expect you to avoid working with competitors during the usage period? Exclusivity restricts your earning potential and should come with a premium.",
      },
      {
        type: "paragraph",
        text: "A **buyout** — where the client pays a flat fee for unlimited, perpetual use — commands a 70-100% premium over standard rates. If a voucher says \"buyout\" or \"all rights, all media, in perpetuity,\" that changes the economics of the entire job. Make sure the rate reflects it.",
      },
      {
        type: "paragraph",
        text: "In our experience, usage rights are where most new models leave the most money on the table. A single day's shoot can produce images a brand monetises for years. Understanding what you're signing away is as important as the day rate itself.",
      },
      {
        type: "paragraph",
        text: "If the usage terms on the voucher are different from what your agency originally discussed, do not sign until you have spoken to your agent. This is not being difficult — it is protecting your work and your income.",
      },
      {
        type: "paragraph",
        text: "**For US-based readers:** New York's [Fashion Workers Act](https://www.nysenate.gov/legislation/bills/2023/S9832) (effective June 2025) requires separate written consent for any AI or digital-replica use of your image. Pre-existing power-of-attorney clauses no longer cover it. If your voucher includes broad usage language and you work in New York, raise it with your agent before signing.",
      },
      {
        type: "heading",
        level: "h2",
        text: "What Happens If You Do Not Get a Voucher",
      },
      {
        type: "paragraph",
        text: "Not every job comes with a formal voucher, especially smaller or less structured bookings. But the absence of a voucher does not mean the work did not happen — it means you have no paper trail.",
      },
      {
        type: "paragraph",
        text: "This becomes a problem when:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "A payment is late and the agency needs proof of the booking details",
          "The client uses images beyond what was verbally agreed",
          "There is a dispute about the rate or the hours worked",
          "Tax time arrives and you need records of what you earned and from whom",
        ],
      },
      {
        type: "paragraph",
        text: "If a client does not offer a voucher, create your own record. Note the date, hours, rate, client, and any usage discussion. Send a summary email to your agency after the job: \"Confirming today's shoot — [client], [date], [rate], [usage as discussed].\" That email becomes your receipt.",
      },
      {
        type: "paragraph",
        text: "In our experience, the models who keep records — even informal ones — are the ones who never find themselves in a \"he said, she said\" situation months later. It takes 30 seconds after a job. It saves hours when something does not add up.",
      },
      {
        type: "heading",
        level: "h2",
        text: "The Voucher Is Where Payment Tracking Starts",
      },
      {
        type: "paragraph",
        text: "A voucher is the first link in the payment chain. Once signed, it confirms the work happened and triggers the invoicing process:",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "You sign the voucher on set",
          "The agency uses it to invoice the client",
          "The client processes the invoice (typically [net 30-90 days](/blog/how-long-to-get-paid-as-a-model))",
          "The agency deducts commission and pays you",
        ],
      },
      {
        type: "paragraph",
        text: "If you lose track of the voucher details — the rate, the date, the client — you lose track of the payment. And when you are doing multiple jobs a month across multiple agencies, that is when money starts slipping through the cracks.",
      },
      {
        type: "paragraph",
        text: "This is one of the reasons we built job logging into [BOOKDU](/features). Every job you log — agency, client, date, rate — becomes a payment to track. Take a quick photo of the voucher too — the signed document carries legal weight if there is ever a dispute. Log it once in BOOKDU, and the app tracks the payment until it lands. If it does not land, you will know.",
      },
      {
        type: "heading",
        level: "h2",
        text: "What to Do When Something Goes Wrong",
      },
      {
        type: "paragraph",
        text: "Most jobs run smoothly. The voucher gets signed, the agency invoices the client, the payment lands a few months later, everyone moves on. But occasionally something does not match — and when it does, the voucher is your strongest piece of evidence. Here is how to handle the common failure modes.",
      },
      {
        type: "heading",
        level: "h3",
        text: "The rate on the voucher does not match what was agreed",
      },
      {
        type: "paragraph",
        text: "Pause before signing. This happens more than people expect, especially on fast-paced shoots where the production assistant fills the form in late and pulls the rate from a different version of the booking. Call your agent from set if you can, or step aside and send a quick text confirming the rate. Do not sign a number you have not agreed to. If the client side insists on signing-then-correcting later, that is the wrong order — the signed document is the one that matters, and corrections after the fact are a negotiation with no leverage.",
      },
      {
        type: "heading",
        level: "h3",
        text: "The usage terms are broader than what your agency discussed",
      },
      {
        type: "paragraph",
        text: "Local versus global. One year versus perpetuity. Single-medium versus all-media. These are not small differences. If the voucher widens the usage from what you originally agreed, that is a re-negotiation, and the rate should reflect it. Same approach as above: do not sign first and discuss later. A 60-second pause to call your agent is far cheaper than a worldwide buyout you signed away by accident.",
      },
      {
        type: "heading",
        level: "h3",
        text: "The client did not provide a voucher at all",
      },
      {
        type: "paragraph",
        text: "Some bookings — small e-commerce shoots, social-media content jobs, last-minute replacements — never produce a formal voucher. The work still happened. Create your own record before you leave set: date, hours, rate, client, usage as discussed. Send a confirmation email to your agent on the way home: \"Confirming today's shoot at [client] — [date], [rate], [usage as discussed].\" That email is your voucher. If a payment dispute appears two months later, that timestamped email is what you point to.",
      },
      {
        type: "heading",
        level: "h3",
        text: "The client is using the images outside the agreed terms",
      },
      {
        type: "paragraph",
        text: "You see your face on a billboard you never approved. Or your editorial shot is now an Instagram ad. This is where the voucher you signed becomes critical evidence. The first step is to flag it to your agency in writing — they manage the relationship with the client and have the leverage to enforce the original terms. If your agency is unresponsive, the next step varies by market. In New York, the Fashion Workers Act provides specific recourse for unauthorised image use, including for AI and digital-replica reproductions. In the UK and Australia, a letter from a media-rights solicitor often resolves it without needing a formal claim. Whatever the route, the voucher with its agreed usage terms is the document that anchors the case.",
      },
      {
        type: "heading",
        level: "h3",
        text: "The voucher itself has gone missing on the agency side",
      },
      {
        type: "paragraph",
        text: "This sounds far-fetched, but it happens — paperwork moves through several hands between set, agency, and client accounts, and pieces occasionally go missing in the chain. If you are following up on a payment and the original voucher can not be located, your photo of the signed document on the day is what closes the gap. This is why we recommend snapping a photo of every voucher before you hand it back. It takes three seconds. It saves a week of back-and-forth months later.",
      },
      {
        type: "heading",
        level: "h2",
        text: "A Quick Note on Paperwork in AU, UK, and US",
      },
      {
        type: "paragraph",
        text: "Different markets handle the documentation slightly differently, but the voucher plays the same role in each:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Australia:** your signed voucher typically becomes the basis for an RCTI (Recipient-Created Tax Invoice) issued by your agency.",
          "**United Kingdom:** it feeds into self-billing, where the agency creates the invoice on your behalf.",
          "**United States:** it supports the income that ends up on your year-end 1099-NEC.",
        ],
      },
      {
        type: "paragraph",
        text: "Different paperwork, same role: the voucher is your proof of work.",
      },
      {
        type: "heading",
        level: "h2",
        text: "A Quick Checklist Before You Sign",
      },
      {
        type: "paragraph",
        text: "Next time someone hands you a voucher on set, take 60 seconds to check:",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "**Is your name and agency correct?** Sounds obvious. Errors happen.",
          "**Does the rate match what your agency confirmed?** If it is different, pause and check with your agent before signing.",
          "**Are the hours accurate?** If you worked 10 hours and the voucher says 8, that matters — especially if overtime applies.",
          "**What do the usage terms say?** Read them. If they are broader than what was originally discussed (global instead of local, perpetuity instead of one year), flag it.",
          "**Is there anything you did not agree to?** Additional usage, extended exclusivity, or conditions not discussed in the original booking.",
        ],
      },
      {
        type: "paragraph",
        text: "You are not being difficult by reading a voucher carefully. You are being professional. The experienced models we hear from build this habit early. Good agencies expect it.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Your Record, Your Protection",
      },
      {
        type: "paragraph",
        text: "A voucher exists to protect everyone involved — the client, the agency, and you. But it only protects you if you read it, understand it, and keep a record of it.",
      },
      {
        type: "paragraph",
        text: "The models who build long, financially stable careers treat every voucher like a receipt for work they have earned. Because that is exactly what it is.",
      },
      {
        type: "paragraph",
        text: "BOOKDU tracks your jobs, payments, contracts, and expenses in one place. Log the job when it happens. Let the app track the payment. Free on iOS.",
      },
    ],
  },
  {
    slug: "how-long-to-get-paid-as-a-model",
    title:
      "How Long Does It Take to Get Paid as a Model? The Real Timeline",
    description:
      "Models typically wait 60-120 days to get paid after a job. Here's why, what's normal, and how to stay on top of every payment across every agency.",
    date: "2026-04-13",
    dateModified: "2026-05-02",
    author: "Roman Feldman",
    pillar: "Your Money",
    readTime: "6 min read",
    metaTitle:
      "How Long to Get Paid as a Model? The Real Timeline",
    metaDescription:
      "Models typically wait 60-120 days to get paid after a job. Here's why, what's normal, and how to stay on top of every payment across every agency.",
    content: [
      {
        type: "heading",
        level: "h2",
        text: "How long does it take to get paid as a model?",
      },
      {
        type: "paragraph",
        text: "Most models wait **60 to 120 days** to get paid after a job. That is the standard timeline across Australia, the UK, the US, and the EU — not because anything is wrong, but because of how the payment chain works. The client pays the agency on net 30, 60, or 90 terms. The agency batches its model payments weekly or monthly. By the time the money reaches you, two to four months have passed since you finished the shoot. The models who handle this well are not the ones who chase hardest — they are the ones who use a [fashion model payment tracker](/payment-tracker) so they always know where things sit.",
      },
      {
        type: "paragraph",
        text: "The first time you see a 90-day delay on a job you finished, it feels wrong. It is actually how the industry has always worked — the slowness sits in the client's accounts payable team, not with your agency.",
      },
      {
        type: "paragraph",
        text: "A rough breakdown by job type: 30 to 60 days for commercial and e-commerce, 60 to 90 days for editorial and fashion campaigns, and 90 to 120 days when the client is a large corporation with slow accounts payable. Anything past 120 days with no explanation is worth a conversation with your agency. Anything inside that window is the industry working as it normally does.",
      },
      {
        type: "paragraph",
        text: "If you are new to modelling, this is the part nobody warns you about. Once you understand it, you can plan around it instead of being caught off guard.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Why It Takes So Long: The Payment Chain",
      },
      {
        type: "paragraph",
        text: "When you do a job, the money does not come straight to you. It moves through a chain, and every link in that chain adds time.",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "**You do the job.** A voucher is signed on set confirming the work, the rate, and the usage terms.",
          "**The agency invoices the client.** This might happen the same week, or it might take a few days depending on the agency's billing cycle.",
          "**The client processes the invoice.** Most clients operate on net 30 or net 60 payment terms — meaning they pay the agency 30 or 60 days after receiving the invoice. In fashion, net 90 is not unusual.",
          "**The agency receives the payment, [deducts commission](/blog/how-much-commission-do-modeling-agencies-take), and pays you.** Some agencies pay within days of receiving the client's payment. Others batch payments weekly or monthly.",
        ],
      },
      {
        type: "paragraph",
        text: "So if the client pays on net 60 terms and the agency batches payments monthly, you are looking at 60 to 90 days minimum from the date of the shoot. Add a slow-invoicing cycle or a client that pays late, and you are past 100 days easily.",
      },
      {
        type: "paragraph",
        text: "This is the part nobody explains when you sign with an agency. The money is real. It is coming. But the timeline between doing the work and holding the payment is measured in months, not days.",
      },
      {
        type: "heading",
        level: "h2",
        text: "What Is Normal and What Is Not",
      },
      {
        type: "paragraph",
        text: "From talking to models and watching my daughter navigate this across agencies in three countries, here is what we have seen:",
      },
      {
        type: "paragraph",
        text: "**Normal:**",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "30-60 days for commercial and e-commerce work",
          "60-90 days for editorial, fashion, and larger campaigns",
          "90-120 days when the client is a large corporation with slow accounts payable",
          "Monthly payment batches from the agency, meaning your payment might sit for an extra 1-3 weeks after the client has paid",
        ],
      },
      {
        type: "paragraph",
        text: "**Worth a follow-up:**",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Past 90 days with no communication from the agency about the status",
          "The agency cannot tell you whether the client has paid yet",
          "A pattern of payments consistently arriving later than the agency's stated timeline",
        ],
      },
      {
        type: "paragraph",
        text: "**A real concern:**",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Past 120 days with no clear explanation",
          "The agency avoids giving you any timeline or status update",
          "Other models at the same agency are reporting similar delays",
        ],
      },
      {
        type: "paragraph",
        text: "The important distinction: a payment taking 90 days through the normal chain is not the same as a payment that has been sitting with the agency after the client paid. The first is how the industry works. The second is worth a conversation.",
      },
      {
        type: "heading",
        level: "h2",
        text: "The Maths Models Do Not Do (But Should)",
      },
      {
        type: "paragraph",
        text: "Here is what makes the payment timeline difficult in practice. It is not one payment you are waiting on — it is many, all on different timelines, all from different agencies.",
      },
      {
        type: "paragraph",
        text: "Say you did five jobs in January and February across two agencies:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Job 1 (Agency A, Jan 8): $1,200 — might land in March or April",
          "Job 2 (Agency B, Jan 22): $800 — different agency, different payment cycle",
          "Job 3 (Agency A, Feb 3): $2,500 — same agency as Job 1 but a different client",
          "Job 4 (Agency B, Feb 14): $600 — might arrive with Job 2 in the same batch, might not",
          "Job 5 (Agency A, Feb 28): $1,800 — newest job, longest wait ahead",
        ],
      },
      {
        type: "paragraph",
        text: "That is $6,900 you have earned but have not received. Some of it will land in March. Some in April. Some not until May. If you are not tracking each one, you will not know what is outstanding, what is overdue, and what has quietly been paid.",
      },
      {
        type: "paragraph",
        text: "A $10,000 booking sounds incredible — until you realise $2,000 goes to the agency, $3,000-5,000 goes to tax, and expenses come on top. You might take home $4,000. That is still great. But you need to know the real number, not the headline number.",
      },
      {
        type: "heading",
        level: "h2",
        text: "What You Can Do About It",
      },
      {
        type: "paragraph",
        text: "You cannot speed up the payment chain. What you can do is never lose sight of what is owed.",
      },
      {
        type: "paragraph",
        text: "**1. Log every job the day it happens.** Agency, client, date, rate. If you do not write it down, you will forget it within a week — and three months later you will have a vague memory of money owed but no details.",
      },
      {
        type: "paragraph",
        text: "**2. Know the expected timeline for each agency.** Ask your agency upfront: \"What are your standard payment terms? How often do you batch payments?\" A good agency will answer clearly. This sets your expectations from day one.",
      },
      {
        type: "paragraph",
        text: "**3. Mark the 90-day point.** If a payment has not arrived and you have had no update, day 90 is a reasonable moment to send a polite email. Something like: \"Just checking in on the payment for [job] on [date] — wanted to make sure it is on track.\" No aggression. Just awareness.",
      },
      {
        type: "paragraph",
        text: "**4. Check your payments weekly.** Two minutes every Monday morning. What has landed? What is still outstanding? How long has each one been waiting? This is not chasing — it is staying informed.",
      },
      {
        type: "paragraph",
        text: "This is exactly what we built [BOOKDU](/features) to do. Every job you log becomes a payment to track. BOOKDU marks checkpoints at 35 days and 56 days so you can see where each payment sits in the cycle — not because anything is wrong, but so you always know the status. Every Monday morning, you get a summary of everything you are waiting on — across every agency.",
      },
      {
        type: "heading",
        level: "h2",
        text: "What to Do When a Payment Goes Past 120 Days",
      },
      {
        type: "paragraph",
        text: "A payment past 120 days with no clear explanation is the line where attention turns into action. The first 90 days, you wait. Day 90, you send a polite check-in. Past 120, the conversation needs to shift. Here is a calm, professional escalation path that protects the relationship and the payment.",
      },
      {
        type: "heading",
        level: "h3",
        text: "Day 120: a direct conversation with your agent",
      },
      {
        type: "paragraph",
        text: "Not an email. Not a text. A call or in person, depending on the agency. Walk through the specific job: the date, the client, the amount. Ask three questions. \"Has the client paid the agency yet?\" \"If yes, when does the next payment cycle include this job?\" \"If no, what is the agency doing to follow up?\" A good agent will have answers ready or commit to having them within a week. The information you are after is whether the delay sits with the client or the agency — that determines what comes next.",
      },
      {
        type: "heading",
        level: "h3",
        text: "Day 150: a written summary",
      },
      {
        type: "paragraph",
        text: "If 30 days after that direct conversation nothing has moved, write a single email summarising what was discussed, what was promised, and what has happened since. Keep it factual. No accusations, no emotional language. Something like: \"Following up on our [date] conversation about the [client] booking from [date] — you mentioned the client typically pays on net 90 and that you would chase. I have not seen any further update or payment. Could you let me know where things sit?\" Send it to your agent and CC the agency's accounts contact. The CC is the meaningful step — it widens the audience and creates a paper trail.",
      },
      {
        type: "heading",
        level: "h3",
        text: "Day 180+: the harder conversations",
      },
      {
        type: "paragraph",
        text: "Past six months, the dynamic changes. If the agency cannot tell you whether the client has paid, that is a different problem from a slow client. Across Australia, the UK, and the US, agencies are expected to pass on your earnings once they receive the client payment — the specific legal framework varies by market (trust account requirements in AU and parts of the US, Conduct Regulations in the UK, the Fashion Workers Act in New York), but the principle is consistent. A payment that has been sitting with the agency for weeks after client receipt is worth a conversation. At this point, models we have spoken to have taken one of three paths.",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**A formal demand letter through a media-rights solicitor.** Costs vary by market — typically a few hundred to a couple of thousand in your local currency depending on complexity. Often resolves within two weeks of receipt. Worth the cost when the unpaid amount is meaningful.",
          "**Escalation through industry advocacy bodies.** The [Model Alliance](https://www.modelalliance.org/) in the US is the most prominent and has driven landmark legislation including the Fashion Workers Act. UK and Australian markets have smaller equivalents but agency reputation pressure works similarly across markets.",
          "**Quiet exit at contract end.** Some models simply leave the agency when their representation contract expires and avoid the public confrontation. Not every fight is worth having, especially if the unpaid amount is small relative to your annual income.",
        ],
      },
      {
        type: "paragraph",
        text: "None of these are wrong. The right move depends on the size of the unpaid amount, your relationship with the agent (versus the agency owners), and how much energy you have for the process. What we tell people: do not let it go silent. Whatever path you choose, choose it deliberately and act on it.",
      },
      {
        type: "heading",
        level: "h3",
        text: "The discipline that prevents most of this",
      },
      {
        type: "paragraph",
        text: "Most payment problems compound because nobody noticed them early. A booking from January gets forgotten by May. The model assumes it landed quietly; the agency assumes it was followed up. Six months pass. The single best protection is the Monday morning habit — two minutes a week, every payment in one place, every status visible. The models who never end up here are the ones who never lost track in the first place.",
      },
      {
        type: "heading",
        level: "h2",
        text: "The Monday Morning Habit",
      },
      {
        type: "paragraph",
        text: "The models who stay on top of their finances are not the ones who chase the hardest. They are the ones who always know where they stand.",
      },
      {
        type: "paragraph",
        text: "Every Monday, glance at three things:",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "**What is outstanding** — which payments are still waiting to land, and how long each one has been.",
          "**What landed last week** — check your bank account and mark off anything that came through.",
          "**What is coming up** — any jobs this week that will become new payments to track.",
        ],
      },
      {
        type: "paragraph",
        text: "Two minutes. Every week. That is it. No spreadsheet required. No chasing. Just clarity.",
      },
      {
        type: "paragraph",
        text: "If you want that in one place — across every agency, every country, every payment — that is what BOOKDU does. Log a job in 30 seconds, see where every payment sits in the cycle, and know the moment something is actually overdue. Free on iOS.",
      },
    ],
  },
  {
    slug: "australian-model-tax-guide",
    title:
      "The Australian Model's Tax Guide: ABN, GST, BAS, Deductions and Super",
    description:
      "ABN, GST, BAS, super, deductions — the complete tax guide for freelance models working in Australia. What to claim, when to lodge, and how to stay ahead of EOFY.",
    date: "2026-04-12",
    dateModified: "2026-05-02",
    author: "Bec",
    pillar: "Career Admin",
    readTime: "7 min read",
    disclaimer: "tax-au",
    metaTitle:
      "Australian Model Tax Guide: ABN, GST, BAS & Deductions",
    metaDescription:
      "ABN, GST, BAS, super, deductions — the complete tax guide for freelance models working in Australia. What to claim, when to lodge, and how to stay ahead of EOFY.",
    content: [
      {
        type: "heading",
        level: "h2",
        text: "Tax Season Does Not Have to Be a Scramble",
      },
      {
        type: "paragraph",
        text: "You have been working all year. Shoots in Sydney, castings in Melbourne, maybe a campaign interstate. You have earned real money — but it arrived in chunks, at odd times, from [different agencies](/blog/track-payments-multiple-modeling-agencies). Now it is June and your accountant is asking for records you never kept. If you want a single place to keep track of [fashion model tax and claiming](/tax-and-expenses) across countries, that is what BOOKDU was built for.",
      },
      {
        type: "paragraph",
        text: "This is not a failure of discipline. It is an information gap. Nobody sits you down when you start modelling and explains [ABN](/blog/model-abn-sole-trader-australia), GST, BAS, super, or what you can claim. You figure it out the hard way, usually the week before your tax return is due.",
      },
      {
        type: "paragraph",
        text: "This guide covers the essentials. Not everything — your accountant handles the detail. But enough to walk into that meeting prepared, and enough to stop tax season from catching you off guard.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Two Structures: Know Which One You Are",
      },
      {
        type: "paragraph",
        text: "Not every model works under the same arrangement. How your tax works depends on whether you are operating as an independent contractor or as an employee of your agency.",
      },
      {
        type: "heading",
        level: "h3",
        text: "Freelance and Contractor Models (Most Common)",
      },
      {
        type: "paragraph",
        text: "Most models in Australia — whether freelance or signed to an agency — work as independent contractors. You have your own ABN, you invoice (or your agency issues a recipient-created tax invoice on your behalf), and you are responsible for your own tax, super, and record-keeping.",
      },
      {
        type: "paragraph",
        text: "This applies to you if:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "You have your own ABN and quote it to agencies",
          "You can accept or decline individual jobs",
          "You work with more than one agency or take direct bookings",
          "Your agency does not withhold tax from your pay",
        ],
      },
      {
        type: "paragraph",
        text: "Under this structure, you are running a sole trader business. The income is yours, the expenses are yours, and the ATO treats you as self-employed.",
      },
      {
        type: "heading",
        level: "h3",
        text: "Agency-Employed Models",
      },
      {
        type: "paragraph",
        text: "Some models — particularly those on exclusive contracts or working through larger agencies — may be classified as employees. This is less common, but it changes everything about how your tax works.",
      },
      {
        type: "paragraph",
        text: "If you are an employee:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Your agency withholds PAYG tax from your pay before it reaches you",
          "Your agency pays superannuation on top of your earnings (currently 11.5%)",
          "You may be entitled to workers' compensation coverage and paid leave",
          "You do not need to register for GST or lodge a BAS",
          "You claim work-related expenses as an employee on your tax return, not as business deductions",
        ],
      },
      {
        type: "paragraph",
        text: "The ATO determines your classification based on the terms of your contract — not what your agency calls you. Key factors include how much control the agency has over your work, whether you can delegate or subcontract, and who bears the financial risk. If you are unsure which structure applies to you, the ATO has a clear guide: [Employee or independent contractor](https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/employee-or-independent-contractor/difference-between-employees-and-independent-contractors).",
      },
      {
        type: "paragraph",
        text: "**The rest of this guide focuses primarily on contractor and freelance models, since that is the most common structure — and the one where you carry the most responsibility.**",
      },
      {
        type: "heading",
        level: "h2",
        text: "Do You Need an ABN?",
      },
      {
        type: "paragraph",
        text: "If you work as an independent contractor (which most models do), yes. An Australian Business Number is what makes you a sole trader. Most agencies will not pay you without one.",
      },
      {
        type: "paragraph",
        text: "Applying is free and takes about ten minutes through the [Australian Business Register](https://www.abr.gov.au/business-super-funds-charities/applying-abn). You will need your Tax File Number and a few personal details.",
      },
      {
        type: "paragraph",
        text: "Once you have an ABN:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Agencies pay you as a contractor, not an employee",
          "You are responsible for your own tax, super, and record-keeping",
          "You invoice agencies (or they generate a recipient-created tax invoice on your behalf)",
        ],
      },
      {
        type: "paragraph",
        text: "If you are under 18, a parent or guardian can register the ABN on your behalf.",
      },
      {
        type: "paragraph",
        text: "One thing to be clear about: having an ABN does not automatically mean you pay GST. That is a separate registration.",
      },
      {
        type: "paragraph",
        text: "For more on what starting as a sole trader means for tax, see the ATO's [business structures and key tax obligations](https://www.ato.gov.au/businesses-and-organisations/starting-registering-or-closing-a-business/starting-your-own-business/business-structures-key-tax-obligations).",
      },
      {
        type: "heading",
        level: "h2",
        text: "GST: Do You Need to Register?",
      },
      {
        type: "paragraph",
        text: "You need to register for GST if your annual turnover reaches $75,000. Below that threshold, registration is optional.",
      },
      {
        type: "paragraph",
        text: "For models starting out, most will not hit $75,000 in their first year. But it can creep up, especially if you are working across multiple agencies and a few bigger campaigns land in the same financial year.",
      },
      {
        type: "paragraph",
        text: "If you are registered for GST:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "You charge 10% GST on top of your rate (agencies handle this on the invoice)",
          "You can claim GST credits on business expenses",
          "You must lodge a Business Activity Statement (BAS) — usually quarterly",
        ],
      },
      {
        type: "paragraph",
        text: "If you are not registered:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "You do not charge GST",
          "You do not lodge BAS",
          "You still lodge an annual tax return as a sole trader",
        ],
      },
      {
        type: "paragraph",
        text: "Keep an eye on your total income across all agencies. If you are approaching $75,000, talk to your accountant before you cross it — not after.",
      },
      {
        type: "paragraph",
        text: "Full details on the threshold and how to register: [ATO GST registration](https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst).",
      },
      {
        type: "heading",
        level: "h2",
        text: "BAS: What It Is and When to Lodge",
      },
      {
        type: "paragraph",
        text: "A Business Activity Statement is how you report your GST to the ATO. If you are GST-registered, you lodge a BAS — typically every quarter.",
      },
      {
        type: "paragraph",
        text: "The quarterly deadlines are:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "July–September: due 28 October",
          "October–December: due 28 February",
          "January–March: due 28 April",
          "April–June: due 28 July",
        ],
      },
      {
        type: "paragraph",
        text: "Your BAS reports the GST you collected on your income and the GST you paid on business expenses. The difference is what you owe the ATO (or what they owe you).",
      },
      {
        type: "paragraph",
        text: "The key to painless BAS lodgement is keeping your expenses logged throughout the quarter, not scrambling in the last week. If every receipt is already captured and categorised, BAS takes minutes. If you have to dig through bank statements and email inboxes, it takes hours.",
      },
      {
        type: "paragraph",
        text: "This is one of the reasons we built [expense tracking into BOOKDU](/features). Snap a receipt, categorise it, and when BAS or tax time arrives, export everything as a CSV. No digging. No guessing.",
      },
      {
        type: "paragraph",
        text: "For more on how BAS works: [ATO Business Activity Statements](https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/business-activity-statements-bas).",
      },
      {
        type: "heading",
        level: "h2",
        text: "What You Can Claim as a Model",
      },
      {
        type: "paragraph",
        text: "This is where most models leave money on the table. If an expense is directly related to earning your modelling income, you can generally claim it as a tax deduction.",
      },
      {
        type: "paragraph",
        text: "The ATO has a specific guide for performing artists (which covers models): [Performing artists — income and work-related deductions](https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/guides-for-occupations-and-industries/l-q/performing-artists-income-and-work-related-deductions). Here are the common categories:",
      },
      {
        type: "paragraph",
        text: "**Travel**",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Flights and transport to jobs, castings, and go-sees (not your daily commute to a regular agency, but travel to specific job locations)",
          "Accommodation for interstate or international work",
          "Meals during overnight travel for work",
        ],
      },
      {
        type: "paragraph",
        text: "**Appearance and grooming**",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Haircuts and colour when required for a specific job",
          "Skincare products used specifically for work",
          "Gym memberships — only if your agency or contract requires you to maintain a specific fitness level, and you can demonstrate it",
        ],
      },
      {
        type: "paragraph",
        text: "**Professional expenses**",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Comp cards and professional portfolio photos",
          "Agency commissions (these are already deducted from your pay, but worth confirming they appear in your records)",
          "Modelling classes or workshops",
          "Union or association fees",
        ],
      },
      {
        type: "paragraph",
        text: "**Equipment and tools**",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Phone and internet — the work-related portion",
          "Laptop or tablet used for bookings, emails, and admin",
          "Apps used for managing your modelling career",
        ],
      },
      {
        type: "paragraph",
        text: "**Wardrobe**",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Clothing purchased specifically for a job (not everyday wear)",
          "Shoes and accessories required for shoots or events",
        ],
      },
      {
        type: "paragraph",
        text: "**Insurance**",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Public liability insurance",
          "Income protection insurance premiums",
        ],
      },
      {
        type: "paragraph",
        text: "The ATO's general rule: if the expense is directly connected to earning your modelling income and you can prove it, you can claim it. Keep the receipt. Keep the record. If you cannot prove it, you cannot claim it.",
      },
      {
        type: "paragraph",
        text: "For the full list of what you can and cannot claim: [ATO deductions you can claim](https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/deductions-you-can-claim).",
      },
      {
        type: "heading",
        level: "h2",
        text: "\"Can I Claim That?\" — The Ones That Catch Models Out",
      },
      {
        type: "paragraph",
        text: "This is where it gets interesting. Some deductions feel like they should be obvious for models — but the ATO does not agree.",
      },
      {
        type: "paragraph",
        text: "**Gym memberships.** You would think maintaining your physique is a work expense when your body is literally your job. The ATO says no. Gym provides a \"general health benefit,\" so it is personal. The only exception is if your contract explicitly requires a specific fitness regime and you can prove it. The ATO has rejected this claim so many times they specifically mention it in their performing artists guide. Talk to your accountant, but do not assume it will fly.",
      },
      {
        type: "paragraph",
        text: "**Cosmetic procedures.** Botox, teeth whitening, cosmetic surgery — the ATO's test is blunt: \"Would you have done this anyway?\" If the answer is yes, or even maybe, it is personal. The rare exception is a procedure contractually required for a specific job. But \"I need to look good for castings\" is not enough. Always check with your accountant before claiming anything in this category.",
      },
      {
        type: "paragraph",
        text: "**That designer dress for the event.** A $4,000 outfit for a red carpet appearance or an agency launch? Personal. The ATO only allows clothing deductions for compulsory uniforms, occupation-specific gear, or protective clothing. A branded agency polo you are required to wear? Yes. A designer outfit you chose for an industry event? No, even if you would never wear it in your own life.",
      },
      {
        type: "paragraph",
        text: "**Skincare and makeup.** This one actually goes your way — partially. The ATO allows models to claim makeup, skincare, and hair products used specifically for work. The catch: you must separate personal and work use. Claiming 100% of your skincare routine will get knocked back. Keeping a record of what you use for shoots versus what you use at home is what makes this deduction stick.",
      },
      {
        type: "paragraph",
        text: "The pattern here: the ATO does not care what your job is. They care whether the expense is exclusively for work and whether you can prove it. When in doubt, ask your accountant before you claim it.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Superannuation: The One Most Models Miss",
      },
      {
        type: "paragraph",
        text: "Here is the part that catches people out.",
      },
      {
        type: "paragraph",
        text: "**If you are a contractor or freelance model** (sole trader), nobody is paying super for you. No employer contributions. No safety net building in the background. You are responsible for your own super contributions. They are not compulsory for sole traders, but they are tax-deductible — and skipping them entirely means retirement savings are not growing while you work.",
      },
      {
        type: "paragraph",
        text: "**If you are employed by your agency**, they are legally required to pay super on top of your earnings at the current guarantee rate of 11.5% (2024-25 financial year). Check your pay slips — if super is not appearing, raise it with your agency.",
      },
      {
        type: "paragraph",
        text: "For sole traders, even contributing something is better than nothing. Many models make a lump-sum contribution before June 30 each year. It reduces your taxable income and builds long-term savings at the same time.",
      },
      {
        type: "paragraph",
        text: "More on super for sole traders: [ATO super for sole traders and partnerships](https://www.ato.gov.au/businesses-and-organisations/super-for-employers/work-out-if-you-have-to-pay-super/super-for-sole-traders-and-partnerships).",
      },
      {
        type: "paragraph",
        text: "To claim a deduction for personal super contributions: [ATO personal super contributions](https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/growing-and-keeping-track-of-your-super/how-to-save-more-in-your-super/personal-super-contributions).",
      },
      {
        type: "heading",
        level: "h2",
        text: "Five Things to Do Before June 30",
      },
      {
        type: "paragraph",
        text: "You do not need to become a tax expert. But doing these five things before EOFY will save you time, money, and stress:",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "**Check your total income across all agencies.** Add it up. Know the number. If you are near $75,000, check your GST status now.",
          "**Gather your receipts.** Every business expense from the last 12 months. Digital or paper — just get them in one place.",
          "**Separate business and personal.** If you have not already, open a separate bank account for modelling income and expenses. It makes everything cleaner.",
          "**Consider a super contribution.** Even a small one. It reduces your taxable income and builds your future.",
          "**Book your accountant now.** Do not wait until September. EOFY accountant availability disappears fast. Book the appointment today.",
        ],
      },
      {
        type: "paragraph",
        text: "If you are already using BOOKDU, steps one and two are done for you. Your income is tracked by agency, your expenses are categorised, and you can export a full summary for your accountant in one tap.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Not in Australia? This Still Applies to You",
      },
      {
        type: "paragraph",
        text: "BOOKDU is used by models around the world, and the fundamentals are the same everywhere: you need to track your income, log your expenses, understand your tax obligations, and know whether you are operating as a contractor or an employee.",
      },
      {
        type: "paragraph",
        text: "The specifics — tax rates, registration thresholds, deduction rules, retirement savings schemes — vary by country. Australia has ABN and GST. The UK has Self Assessment and VAT. The US has 1099s and quarterly estimated tax. The structure is different but the problem is identical: nobody teaches models how to handle the business side.",
      },
      {
        type: "paragraph",
        text: "We are building country-specific guides. If you want us to cover your market next, reach out at hello@bookdu.co and tell us where you are based. We will prioritise the next guide based on where our users are working.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Common questions Australian models ask about tax",
      },
      {
        type: "heading",
        level: "h3",
        text: "Do models pay tax in Australia?",
      },
      {
        type: "paragraph",
        text: "Yes. Modelling income is taxable in Australia regardless of how it is earned. As a freelance or contractor model, you report it as business income on your individual tax return. As an agency-employed model, tax is withheld by your employer through PAYG. The structure changes how you pay; it does not change whether you pay.",
      },
      {
        type: "heading",
        level: "h3",
        text: "Is modelling income business income or personal income?",
      },
      {
        type: "paragraph",
        text: "For freelance and contractor models — the most common structure — modelling income is business income. You report it under business and professional items on your individual tax return, not as wages. This is what makes deductions, ABN registration, and the GST threshold relevant. Agency-employed models report the income as salary and wages.",
      },
      {
        type: "heading",
        level: "h3",
        text: "Do I need to register for GST as a freelance model?",
      },
      {
        type: "paragraph",
        text: "Only once your modelling turnover crosses **$75,000** in any 12-month period. Below that threshold, GST registration is optional. Once you cross it, you have 21 days to register, charge GST on your invoices going forward, and start lodging BAS. See the [ATO GST registration page](https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst) for the full rules.",
      },
      {
        type: "heading",
        level: "h3",
        text: "What if I work overseas — do I still pay Australian tax?",
      },
      {
        type: "paragraph",
        text: "If you are an Australian tax resident, yes — Australia taxes you on your worldwide income, including any modelling work done overseas. You may be eligible for a foreign income tax offset for tax already paid in the country where the work happened, which prevents you from being taxed twice. International model tax is one of the most common areas where an accountant pays for itself.",
      },
      {
        type: "heading",
        level: "h3",
        text: "When should I get an accountant?",
      },
      {
        type: "paragraph",
        text: "As soon as you are earning consistent freelance income — typically once you cross a few thousand dollars in any year — an accountant becomes worth the cost. The cost of a registered tax agent is itself deductible. The risk of getting it wrong (missed deductions, late lodgement, GST registration overdue) compounds over time. If your situation involves multiple agencies, international work, or expenses you are unsure about, an accountant pays for itself in the first year.",
      },
      {
        type: "heading",
        level: "h2",
        text: "Your Accountant Will Thank You",
      },
      {
        type: "paragraph",
        text: "The difference between a model who walks into their tax appointment with \"I think I earned about this much\" and one who hands over a clean export of every job, every payment, and every categorised expense is the difference between a stressful hour and a quick conversation.",
      },
      {
        type: "paragraph",
        text: "You do not need to understand every rule. You need to keep records throughout the year so the person who does understand the rules can do their job properly.",
      },
      {
        type: "paragraph",
        text: "BOOKDU tracks your jobs, payments, expenses, and contracts in one place. Export your full financial year to CSV and hand it to your accountant. Free on iOS.",
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
    dateModified: "2026-05-02",
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
        text: "You finished a job in February through one agency. A three-day shoot in March through another. A casting callback turned confirmed booking in April through a third. Each agency has its own payment timeline, its own process, and its own definition of \u201Cit\u2019s coming.\u201D Without a [fashion model payment tracker](/payment-tracker) \u2014 even a basic one \u2014 keeping track of who owes what becomes its own job.",
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
          "The agency takes [their commission](/blog/how-much-commission-do-modeling-agencies-take) and pays you.",
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
          "Tax time arrives and you have no clear record of what you earned, from whom, and when. (If this sounds familiar, read our [Australian model tax guide](/blog/australian-model-tax-guide).)",
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
        text: "If you want to skip the manual list and have it all tracked automatically, that is what BOOKDU does. Log a job in 30 seconds, get reminded when payment is overdue, and see everything you are owed in one place \u2014 across every agency. See [all BOOKDU features](/features) or download free on iOS.",
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
      "Why We Built BOOKDU | Model Finance App",
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
        text: "BOOKDU doesn\u2019t speed up the payment cycle. It gives you visibility into it. You know what\u2019s outstanding, how long it\u2019s been, and when to follow up. For a deeper look at how this works, read [how to track payments across multiple agencies](/blog/track-payments-multiple-modeling-agencies).",
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
    noIndex: true,
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
