import { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/sections/CTA";
import { AppStoreBadge } from "@/components/AppStoreBadge";

export const metadata: Metadata = {
  title: "Fashion Model Tax & Expense Tracker — Deductions | BOOKDU",
  description: "What fashion models can claim on tax — and how to track expenses and income across agencies in one app. Country-aware. Built for working models.",
  keywords: [
    "fashion model tax and claiming",
    "what can fashion models claim on tax",
    "fashion model tax deductions",
    "model tax tracker",
    "model tax australia",
    "model tax US",
    "model tax UK",
  ],
  alternates: { canonical: "/tax-and-expenses" },
  openGraph: {
    title: "Fashion Model Tax & Expense Tracker | BOOKDU",
    description: "What fashion models can claim on tax across AU, US and UK. Track expenses and income across agencies in one app. Free on iOS.",
    url: "https://bookdu.co/tax-and-expenses",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion Model Tax & Expense Tracker | BOOKDU",
    description: "What fashion models can claim on tax across AU, US and UK. Track expenses and income across agencies in one app. Free on iOS.",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://bookdu.co/#app",
  name: "BOOKDU — Fashion Model Tax & Expense Tracker",
  applicationCategory: "FinanceApplication",
  operatingSystem: "iOS",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  audience: {
    "@type": "Audience",
    audienceType: "Freelance fashion models filing tax in AU, US, UK and other markets",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bookdu.co" },
    { "@type": "ListItem", position: 2, name: "Tax & Expenses", item: "https://bookdu.co/tax-and-expenses" },
  ],
};

export default function TaxAndExpensesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-6">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-title font-medium">Tax &amp; Expenses</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-12 md:py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-title mb-4">
            Tax and Expense Tracking for Fashion Models
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
            What you can claim. What you need to track. How the rules differ across Australia, the US and the UK. Free on iOS.
          </p>
          <AppStoreBadge size="large" track="tax-and-expenses-hero" />
        </div>
      </section>

      {/* The problem */}
      <section className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">Tax season for working models is brutal — by default.</h2>
          <p className="text-text-muted mb-4">
            Models work across agencies, currencies and countries. Tax season hits and the math is brutal: which expenses count, which currency rate applies, what your local tax authority calls each line item. Most models do this in a spreadsheet three weeks before the deadline.
          </p>
          <p className="text-text-muted">
            BOOKDU was built so end-of-year takes minutes, not a weekend.
          </p>
        </div>
      </section>

      {/* AU section */}
      <section id="au" className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">Australia</h2>
          <p className="text-text-muted mb-4">
            Most working models in Australia operate as sole traders with an ABN. The ATO&apos;s performing artists guide covers models. Quarterly BAS applies if turnover is over the GST threshold ($75,000).
          </p>
          <p className="text-title font-semibold mt-6 mb-2">Commonly deductible</p>
          <ul className="space-y-2 text-text-muted mb-4">
            <li>Agency commission</li>
            <li>Test shoots, portfolio updates, comp cards</li>
            <li>Travel between work locations</li>
            <li>Phone &amp; internet (work portion)</li>
            <li>Gym, hair, skincare for working models — see ATO TR 95/15 for the rules</li>
          </ul>
          <p className="text-title font-semibold mt-6 mb-2">Not deductible</p>
          <ul className="space-y-2 text-text-muted mb-6">
            <li>Regular gym (non-working)</li>
            <li>Commute to a regular workplace</li>
            <li>Casual clothing</li>
          </ul>
          <p className="text-text-muted">
            Read more: <Link href="/blog/australian-model-tax-guide" className="text-accent hover:underline">The Australian Model&apos;s Tax Guide</Link> · <Link href="/blog/model-abn-sole-trader-australia" className="text-accent hover:underline">Setting up an ABN as a model</Link>.
          </p>
        </div>
      </section>

      {/* US section */}
      <section id="us" className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">United States</h2>
          <p className="text-text-muted mb-4">
            Models in the US are typically independent contractors and receive 1099-NEC forms. No taxes are withheld at source. Self-employment tax (15.3% on 92.35% of net earnings) is on top of regular income tax. Quarterly estimated tax payments are required if you&apos;ll owe $1,000+ for the year.
          </p>
          <p className="text-title font-semibold mt-6 mb-2">Commonly deductible (Schedule C)</p>
          <ul className="space-y-2 text-text-muted mb-4">
            <li>Agency commission</li>
            <li>Portfolio expenses, comp cards</li>
            <li>Travel for work</li>
            <li>Beauty maintenance for working appearances — limited, see IRS Pub 535</li>
            <li>Mileage at the current standard rate</li>
            <li>Health insurance premiums (100% for self-employed)</li>
          </ul>
          <p className="text-text-muted">
            Practical rule from working models: set aside 25–35% of every payment into a separate tax account immediately. Total tax burden between SE tax and income tax can run 30–50% of gross.
          </p>
        </div>
      </section>

      {/* UK section */}
      <section id="uk" className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">United Kingdom</h2>
          <p className="text-text-muted mb-4">
            UK models register as self-employed with HMRC, get a UTR, and file Self Assessment annually. National Insurance (Class 2 and Class 4) applies on top of income tax. VAT registration kicks in around the £90,000 turnover threshold.
          </p>
          <p className="text-title font-semibold mt-6 mb-2">Commonly deductible</p>
          <ul className="space-y-2 text-text-muted mb-6">
            <li>Agency fees and commission</li>
            <li>Portfolio costs, professional photography</li>
            <li>Business mileage</li>
            <li>Professional subscriptions and training</li>
          </ul>
          <p className="text-text-muted">
            Not deductible: ordinary clothing, regular grooming. The UK rules are stricter than AU on personal-grooming deductions.
          </p>
        </div>
      </section>

      {/* How BOOKDU helps */}
      <section className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">How BOOKDU helps at tax time</h2>
          <ul className="space-y-3 text-text-muted">
            <li>Track every expense in your home currency — multi-currency conversion at recorded transaction-date rate.</li>
            <li>Categories pre-mapped to your country&apos;s tax form.</li>
            <li>One-click CSV export at end of year.</li>
            <li>Receipt photos attached to line items.</li>
            <li>Reminders before quarterly deadlines (AU BAS, US estimated taxes, UK Self Assessment payments on account).</li>
          </ul>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">Read more</h2>
          <ul className="space-y-3 text-text-muted">
            <li>
              Track <Link href="/payment-tracker" className="text-accent hover:underline">payments</Link> across multiple agencies in the same app.
            </li>
            <li>
              Track <Link href="/expense-tracker" className="text-accent hover:underline">expenses</Link> in tax-ready categories.
            </li>
            <li>
              <Link href="/blog/australian-model-tax-guide" className="text-accent hover:underline">The Australian Model&apos;s Tax Guide</Link>
            </li>
            <li>
              <Link href="/blog/model-abn-sole-trader-australia" className="text-accent hover:underline">Setting up an ABN as a model</Link>
            </li>
          </ul>
          <p className="text-text-muted mt-6 text-sm">
            This page is general information for working models, not tax advice. Tax rules vary by country and circumstance — always confirm with a registered tax agent for your jurisdiction.
          </p>
        </div>
      </section>

      {/* Hard CTA */}
      <section className="py-16 border-b border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-4">Free on iOS. Country-aware. Built for working models.</h2>
          <p className="text-text-muted mb-8">
            No subscription. No bank login. Your data stays on your device.
          </p>
          <AppStoreBadge size="large" track="tax-and-expenses-cta" />
        </div>
      </section>

      <CTA />
    </>
  );
}
