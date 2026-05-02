// ── Glossary data layer ──
// Add new terms by adding entries to the `terms` array below.
// v1 (May 2026) covers the highest AI-citation potential terms.
// Each term is a one-page entry under /glossary/[slug].

export interface GlossaryRelatedLink {
  label: string;
  href: string;
}

export interface GlossaryTerm {
  slug: string;
  term: string; // Display name, e.g. "Voucher"
  shortDefinition: string; // ≤60 words. AI/snippet-citable.
  inPractice: string; // 3-5 sentences expanding on the definition.
  financialImpact: string; // 2-4 sentences on $ impact (the BOOKDU angle).
  relatedSlugs?: string[]; // sibling glossary slugs
  seeAlso?: GlossaryRelatedLink[]; // pillars / blog posts
  lastUpdated: string; // YYYY-MM-DD
}

export const GLOSSARY_AUTHOR = {
  name: "Bec",
  url: "https://bookdu.co/about/bec",
};

const terms: GlossaryTerm[] = [
  {
    slug: "voucher",
    term: "Voucher",
    shortDefinition:
      "A signed form a model submits after each job, recording the agreed rate, hours and any expenses. The voucher is what the agency uses to invoice the client and eventually pay the model. No voucher, no payment.",
    inPractice:
      "On most professional sets, someone hands you a voucher to sign at the end of the day. It captures the call time, wrap time, lunch break, and the agreed rate — usually a day rate or hourly rate. If usage rights, buyout fees or extra hours apply, those go on the voucher too. Some agencies use paper vouchers, some use digital apps. Either way, the model and the agency or client representative both sign.",
    financialImpact:
      "Vouchers are the foundation of every payment. If a job ever ends up disputed — overtime that wasn't recorded, usage that was different from what was discussed, an agency claiming the rate was lower than agreed — the voucher is the document that resolves it. Models who keep copies of every voucher rarely have payment problems. Models who sign and forget often do.",
    relatedSlugs: ["day-rate", "agency-commission"],
    seeAlso: [
      { label: "What is a modeling voucher? (full guide)", href: "/blog/what-is-a-modeling-voucher" },
      { label: "How long do modeling agencies take to pay?", href: "/blog/how-long-to-get-paid-as-a-model" },
      { label: "Track payments with BOOKDU", href: "/payment-tracker" },
    ],
    lastUpdated: "2026-05-02",
  },
  {
    slug: "day-rate",
    term: "Day Rate",
    shortDefinition:
      "The standard fee for one day of modeling work, typically 8–10 hours including breaks. Day rates vary widely by job type — runway, editorial, e-commerce, fitting and commercial each have separate norms.",
    inPractice:
      "The day rate is the headline number on most bookings. A standard model day is usually around 8 hours of working time with breaks, but ranges from 6 to 12 depending on the job. Half-days are typically 4–5 hours and pay 60–75% of the day rate, not 50%. Overtime kicks in beyond the agreed window — usually charged in 30-minute or hourly increments. Editorial day rates can sit at $150–500. Commercial averages run $250/hour or $1,000–10,000+ per day. E-commerce sits at $150–300 per hour or $1,000–3,000 per day.",
    financialImpact:
      "Day rate is rarely the full picture. A $5,000 commercial day rate might net the model $2,000–3,000 after 20% agency commission and 30–50% tax. Usage rights and buyouts can double or triple the value of a job above the day rate, and most new models never negotiate them. Always ask what's on top of the day rate before saying yes.",
    relatedSlugs: ["voucher", "agency-commission"],
    seeAlso: [
      { label: "How much commission do modeling agencies take?", href: "/blog/how-much-commission-do-modeling-agencies-take" },
      { label: "Track every job's day rate with BOOKDU", href: "/payment-tracker" },
    ],
    lastUpdated: "2026-05-02",
  },
  {
    slug: "mother-agency",
    term: "Mother Agency",
    shortDefinition:
      "The agency that originally signed and developed a model. The mother agency typically takes a smaller percentage of every job for the model's whole career, even when other agencies book the work in different markets.",
    inPractice:
      "Mother agencies place models with main agencies in other cities — New York, Milan, Paris, Tokyo. They earn 5–10% commission from all placements. They manage overall career direction and tend to hold the longest relationship with the model. In Western markets the mother-agency cut usually comes out of the local agency's 20%, so the model's take doesn't change. In Asian markets the mother-agency 10–15% may be charged on top — meaning the model loses 30–35% total commission.",
    financialImpact:
      "Knowing where commission is taken — once or twice — is the difference between getting paid 80% of gross and 65–70%. Read the contract. Ask the agency to walk through commission flow on a sample job. Mother agencies aren't a problem; opaque commission structures are.",
    relatedSlugs: ["agency-commission"],
    seeAlso: [
      { label: "How much commission do modeling agencies take?", href: "/blog/how-much-commission-do-modeling-agencies-take" },
    ],
    lastUpdated: "2026-05-02",
  },
  {
    slug: "exclusivity",
    term: "Exclusivity Clause",
    shortDefinition:
      "A contract term restricting a model from working with competing brands, products or agencies for a defined period. Exclusivity should be paid extra above the base day rate.",
    inPractice:
      "Exclusivity comes in two flavors. Job-level exclusivity prevents you from doing a competing brand for a defined period — say, no other coffee brand for 12 months after a Starbucks campaign. Agency-level exclusivity binds you to one agency in a market or worldwide for 1–3 years. Job-level exclusivity should always be paid as a multiplier on the day rate. Agency-level exclusivity is more complex: it can be great or terrible depending on the agency and the model's career stage.",
    financialImpact:
      "Exclusivity is one of the most expensive things you can give away for free. A campaign with 12-month US exclusivity has a market value 50–200% above the base day rate. If the contract doesn't price exclusivity separately, you are giving away the larger half of the job's value. Always ask: what exclusivity am I agreeing to, and what does it cost me?",
    relatedSlugs: ["usage-rights", "buyout"],
    seeAlso: [
      { label: "What to ask before signing with a modeling agency (Phase 1 spoke — coming soon)", href: "/blog/what-to-ask-before-signing-with-a-modeling-agency" },
    ],
    lastUpdated: "2026-05-02",
  },
  {
    slug: "agency-commission",
    term: "Agency Commission",
    shortDefinition:
      "The percentage an agency keeps from each job before paying the model. Typically 20% in most markets, but can range from 10% to 25%, and the model often pays a separate service charge or markup on top.",
    inPractice:
      "20% has been the industry standard for decades. The agency takes 20% of the model's gross fee for the job. Many agencies also charge the client a service fee — often another 20% on top of the model's rate — which the client pays separately. On a $5,000 booking, a model might net $4,000 after agency commission, and the agency might earn $1,000 from the model plus another $1,000 from the client. The NY Fashion Workers Act (effective June 2025) capped commission at 20% in New York and banned signing fees or deposits.",
    financialImpact:
      "Commission above 25% warrants questions, not panic. Some specialty markets and emerging-market agencies legitimately charge more. But every percentage point above 20% is real money over a career. Always ask exactly what the agency's commission is, what other fees may be deducted (markup, service charges, marketing fees), and whether mother-agency commission stacks on top.",
    relatedSlugs: ["voucher", "mother-agency", "day-rate"],
    seeAlso: [
      { label: "How much commission do modeling agencies take?", href: "/blog/how-much-commission-do-modeling-agencies-take" },
      { label: "Track agency commission per job with BOOKDU", href: "/payment-tracker" },
    ],
    lastUpdated: "2026-05-02",
  },
];

export function getAllTerms(): GlossaryTerm[] {
  return [...terms].sort((a, b) => a.term.localeCompare(b.term));
}

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return terms.find((t) => t.slug === slug);
}

export function getRelatedTerms(slugs: string[] = []): GlossaryTerm[] {
  return slugs
    .map((s) => terms.find((t) => t.slug === s))
    .filter((t): t is GlossaryTerm => Boolean(t));
}
