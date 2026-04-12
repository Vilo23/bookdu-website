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
    slug: "australian-model-tax-guide",
    title:
      "The Australian Model's Tax Guide: ABN, GST, BAS, Deductions and Super",
    description:
      "ABN, GST, BAS, super, deductions — the complete tax guide for freelance models working in Australia. What to claim, when to lodge, and how to stay ahead of EOFY.",
    date: "2026-04-12",
    author: "Bec",
    pillar: "Career Admin",
    readTime: "7 min read",
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
        text: "You have been working all year. Shoots in Sydney, castings in Melbourne, maybe a campaign interstate. You have earned real money — but it arrived in chunks, at odd times, from different agencies. Now it is June and your accountant is asking for records you never kept.",
      },
      {
        type: "paragraph",
        text: "This is not a failure of discipline. It is an information gap. Nobody sits you down when you start modelling and explains ABN, GST, BAS, super, or what you can claim. You figure it out the hard way, usually the week before your tax return is due.",
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
        text: "This is one of the reasons we built expense tracking into BOOKDU. Snap a receipt, categorise it, and when BAS or tax time arrives, export everything as a CSV. No digging. No guessing.",
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
