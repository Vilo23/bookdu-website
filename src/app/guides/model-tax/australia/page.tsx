import { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/sections/CTA";
import { AppStoreBadge } from "@/components/AppStoreBadge";

export const metadata: Metadata = {
  title: "Model Tax Australia: ABN, GST, BAS, Super & Deductions",
  description:
    "The complete model tax guide for Australia — ABN setup, sole trader basics, GST and BAS thresholds, super for self-employed models, and what working models can claim on tax.",
  keywords: [
    "model tax australia",
    "do models need an ABN",
    "model tax deductions australia",
    "australian model tax guide",
    "model GST BAS australia",
    "model super australia",
  ],
  alternates: { canonical: "/guides/model-tax/australia" },
  openGraph: {
    title: "Model Tax Australia: The Complete Guide for Working Models | BOOKDU",
    description:
      "ABN, GST, BAS, super, deductions — the complete tax guide for freelance models working in Australia.",
    url: "https://bookdu.co/guides/model-tax/australia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Model Tax Australia: The Complete Guide for Working Models | BOOKDU",
    description:
      "ABN, GST, BAS, super, deductions — the complete tax guide for freelance models working in Australia.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://bookdu.co/guides/model-tax/australia#article",
  headline: "Model Tax Australia: ABN, GST, BAS, Super & Deductions",
  description:
    "Country guide for working models in Australia. ABN setup, sole-trader basics, GST and BAS thresholds, super for self-employed, deductions, EOFY checklist.",
  datePublished: "2026-05-02",
  dateModified: "2026-05-02",
  author: [
    { "@type": "Person", "@id": "https://bookdu.co/about/bec#person" },
    { "@type": "Person", "@id": "https://bookdu.co/about/roman-feldman#person" },
  ],
  publisher: { "@id": "https://bookdu.co/#organization" },
  inLanguage: "en-AU",
  about: {
    "@type": "Thing",
    name: "Tax for working fashion models in Australia",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bookdu.co" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://bookdu.co/guides" },
    { "@type": "ListItem", position: 3, name: "Model Tax", item: "https://bookdu.co/guides/model-tax" },
    { "@type": "ListItem", position: 4, name: "Australia", item: "https://bookdu.co/guides/model-tax/australia" },
  ],
};

export default function ModelTaxAustraliaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-6">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-text-muted">Guides</li>
          <li aria-hidden="true">/</li>
          <li className="text-text-muted">Model Tax</li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-title font-medium">Australia</li>
        </ol>
      </nav>

      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-title mb-6">
            Model Tax Australia: The Complete Guide for Working Models
          </h1>

          <p className="text-lg text-text-muted mb-12">
            ABN, GST, BAS, super, deductions — what every working model in Australia needs to know about tax. Built for freelance models, in plain English, with citations to the ATO. This is general information, not personal tax advice.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-title mb-4">Do models in Australia need an ABN?</h2>
          <p className="text-text-muted mb-4">
            For almost every working freelance model in Australia, the answer is yes. The Australian Tax Office expects you to have an Australian Business Number (ABN) once you&apos;re earning income from clients or agencies outside an employer relationship. Without one, agencies that pay you on the basis of an invoice or RCTI may withhold tax at the top marginal rate (47%) under the &ldquo;no ABN&rdquo; rule.
          </p>
          <p className="text-text-muted mb-8">
            Read more: <Link href="/blog/model-abn-sole-trader-australia" className="text-accent hover:underline">Model ABN Sole Trader Australia: Setting Up</Link>.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-title mb-4">Sole trader is the default structure</h2>
          <p className="text-text-muted mb-4">
            Most working models start as sole traders. It&apos;s the simplest structure: your business income is your personal income, you file an individual tax return with a business schedule, and the rules are well-documented for performing-arts work. You can later move to a company or trust if your career justifies it — but most models don&apos;t need to.
          </p>
          <p className="text-text-muted mb-8">
            The ATO&apos;s performing artists guidance (TR 95/15) is the reference document for what counts as deductible work-related expenses for models, dancers, actors and musicians. Bookmark it.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-title mb-4">GST and BAS: when they apply</h2>
          <p className="text-text-muted mb-4">
            GST registration kicks in when your annual turnover crosses <strong>$75,000</strong>. Below that threshold it&apos;s optional. Once registered, you charge 10% GST on Australian invoices and lodge Business Activity Statements (BAS) — usually quarterly.
          </p>
          <p className="text-text-muted mb-4">
            The practical reality for working models: you sit below the threshold for the first year or two, then cross it on a strong year and need to register fast. Track turnover monthly, not annually, so you don&apos;t get caught by the 21-day registration window after crossing.
          </p>
          <p className="text-text-muted mb-8">
            International work doesn&apos;t always attract GST (services exported are typically GST-free), but it counts toward your turnover threshold. Confirm with your accountant.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-title mb-4">What working models can claim on tax</h2>
          <p className="text-text-muted mb-4">
            The ATO recognises that working models incur expenses most office workers don&apos;t. The general rule: an expense is deductible if it&apos;s incurred to earn assessable income and isn&apos;t private or capital in nature. Specifics for models:
          </p>
          <p className="text-title font-semibold mt-6 mb-2">Commonly deductible</p>
          <ul className="space-y-2 text-text-muted mb-6">
            <li>Agency commission and management fees</li>
            <li>Test shoots, portfolio updates, comp cards</li>
            <li>Travel between work locations (not normal commute)</li>
            <li>Phone and internet (work portion only)</li>
            <li>Self-education that maintains or improves your model skills</li>
            <li>Body and beauty maintenance directly required by your work — see TR 95/15. The bar is high. Routine grooming is generally not deductible; specific work-required maintenance can be.</li>
            <li>Sun protection if you work outdoors</li>
            <li>Professional services: accountant, lawyer, tax agent fees</li>
          </ul>
          <p className="text-title font-semibold mt-6 mb-2">Generally not deductible</p>
          <ul className="space-y-2 text-text-muted mb-6">
            <li>Regular gym memberships unless specifically required for the role</li>
            <li>Commuting to a regular workplace</li>
            <li>Casual or street clothing that could be worn outside work</li>
            <li>General make-up, hair and skincare beyond what&apos;s specifically required</li>
            <li>Cosmetic procedures</li>
          </ul>
          <p className="text-text-muted mb-8">
            Records matter more than category boundaries. Keep receipts, log the work reason, and let your accountant decide what passes the test. The ATO can ask for evidence years later.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-title mb-4">Super for self-employed models</h2>
          <p className="text-text-muted mb-4">
            Sole traders aren&apos;t required to pay themselves super, but contributions are tax-deductible up to the concessional cap ($30,000 in 2026). For working models with irregular income, super contributions are one of the most useful tax-planning levers — they reduce taxable income in a high-earning year and build the long-term safety net that an irregular career needs.
          </p>
          <p className="text-text-muted mb-8">
            Talk to your accountant about timing contributions to high-income years and stay under the cap to avoid excess contributions tax.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-title mb-4">EOFY checklist for working models</h2>
          <ul className="space-y-2 text-text-muted mb-8">
            <li>Reconcile income from every agency for the financial year (1 July → 30 June)</li>
            <li>Confirm RCTI / pay advice records match your bank deposits</li>
            <li>Categorise every expense against ATO categories</li>
            <li>Total deductible expenses by category</li>
            <li>Confirm international income and currency conversion</li>
            <li>Check super contributions against the concessional cap</li>
            <li>Lodge with your registered tax agent (usually by 31 October if self-lodging, later with a registered agent)</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-title mb-4">How BOOKDU fits</h2>
          <p className="text-text-muted mb-4">
            BOOKDU was built to handle exactly this. Track every job through the voucher → invoice → paid lifecycle, log expenses against tax-ready categories pre-mapped to the ATO, store contracts in one place, and export a tax-ready CSV at end of year.
          </p>
          <div className="my-8">
            <AppStoreBadge size="large" track="guides-model-tax-au-mid" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-title mb-4">Read next</h2>
          <ul className="space-y-2 text-text-muted mb-8">
            <li>
              <Link href="/blog/australian-model-tax-guide" className="text-accent hover:underline">
                The Australian Model&apos;s Tax Guide: ABN, GST, BAS, Deductions and Super (long-form)
              </Link>
            </li>
            <li>
              <Link href="/blog/model-abn-sole-trader-australia" className="text-accent hover:underline">
                Model ABN Sole Trader Australia: Setting Up
              </Link>
            </li>
            <li>
              <Link href="/tax-and-expenses" className="text-accent hover:underline">
                Tax and Expense Tracking for Fashion Models (multi-country)
              </Link>
            </li>
            <li>
              <Link href="/expense-tracker" className="text-accent hover:underline">
                The Expense Tracker Built for Fashion Models
              </Link>
            </li>
          </ul>

          <p className="text-sm text-text-muted border-t border-border pt-6">
            <strong>Last updated:</strong> 2 May 2026 · <strong>Disclaimer:</strong> This page is general information for working models in Australia, not personal tax advice. Tax rules change and circumstances vary — always confirm with a registered tax agent (TPB) for your situation.
          </p>
        </div>
      </article>

      <CTA />
    </>
  );
}
