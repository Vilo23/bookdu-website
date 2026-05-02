import { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/sections/CTA";
import { AppStoreBadge } from "@/components/AppStoreBadge";

export const metadata: Metadata = {
  title: "Expense Tracker for Fashion Models — Tax-Ready Categories | BOOKDU",
  description: "Track model-specific expenses — agency fees, test shoots, travel, gym, hair, skincare. Tax-ready CSV export. Built for working models.",
  keywords: [
    "model expense tracker",
    "fashion model expenses tracking",
    "modeling expense tracker app",
    "model tax-deductible expenses",
    "modeling agency fees tracker",
    "model receipts app",
  ],
  alternates: { canonical: "/expense-tracker" },
  openGraph: {
    title: "Expense Tracker for Fashion Models | BOOKDU",
    description: "Track model-specific expenses with tax-ready categories. CSV export at end of year. Free on iOS.",
    url: "https://bookdu.co/expense-tracker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expense Tracker for Fashion Models | BOOKDU",
    description: "Track model-specific expenses with tax-ready categories. CSV export at end of year. Free on iOS.",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://bookdu.co/#app",
  name: "BOOKDU — Model Expense Tracker",
  applicationCategory: "FinanceApplication",
  operatingSystem: "iOS",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  audience: {
    "@type": "Audience",
    audienceType: "Freelance fashion models tracking work expenses for tax",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bookdu.co" },
    { "@type": "ListItem", position: 2, name: "Expense Tracker", item: "https://bookdu.co/expense-tracker" },
  ],
};

export default function ExpenseTrackerPage() {
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
          <li aria-current="page" className="text-title font-medium">Expense Tracker</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-12 md:py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-title mb-4">
            The Expense Tracker Built for Fashion Models
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Categories that fit how working models actually spend. Tax-ready CSV at end of year. Free on iOS.
          </p>
          <AppStoreBadge size="large" track="expense-tracker-hero" />
        </div>
      </section>

      {/* Why generic apps fail */}
      <section className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">A model&apos;s expense list doesn&apos;t fit a generic accounting app.</h2>
          <p className="text-text-muted mb-4">
            Test shoots aren&apos;t &ldquo;marketing.&rdquo; Agency commission isn&apos;t &ldquo;professional services.&rdquo; Gym, hair and skincare are deductible for working models in some jurisdictions but the tools don&apos;t know that. Travel between agencies is deductible — between go-sees in the same city often isn&apos;t.
          </p>
          <p className="text-text-muted">
            Generic apps were built for office workers. Working models are not office workers.
          </p>
        </div>
      </section>

      {/* Categories built for models */}
      <section className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-8">Categories built for working models</h2>
          <ul className="space-y-5 text-text-muted">
            <li>
              <strong className="text-title">Agency expenses.</strong> Agency commission, mother-agency commission, marketing fees, comp card costs.
            </li>
            <li>
              <strong className="text-title">Portfolio &amp; test shoots.</strong> Photographer fees, MUA, location, prints. First portfolio is typically $500–$5,000.
            </li>
            <li>
              <strong className="text-title">Body &amp; beauty.</strong> Hair, skincare, gym, dermatology. Country-specific notes on what counts as deductible.
            </li>
            <li>
              <strong className="text-title">Travel.</strong> Flights, accommodation, ground transport, per diem. Auto-tagged by job destination.
            </li>
            <li>
              <strong className="text-title">Wardrobe &amp; gear.</strong> Fittings, shoes, model-specific clothing, garment bags.
            </li>
            <li>
              <strong className="text-title">Admin &amp; professional.</strong> Accountant, lawyer, ABN/EIN/UTR registration, app subscriptions.
            </li>
          </ul>
        </div>
      </section>

      {/* Tax-ready export */}
      <section className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">Tax-ready, end of year</h2>
          <ul className="space-y-3 text-text-muted">
            <li>CSV with columns mapped to ATO, IRS, and HMRC categories.</li>
            <li>Multi-currency receipts converted at recorded transaction-date rate, not today&apos;s rate.</li>
            <li>Receipt photos stored alongside line items.</li>
            <li>One-click handoff to your accountant.</li>
            <li>End-of-financial-year takes minutes, not a weekend.</li>
          </ul>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">Pair with the rest</h2>
          <ul className="space-y-3 text-text-muted">
            <li>
              Track <Link href="/payment-tracker" className="text-accent hover:underline">payments</Link> across multiple agencies in the same app.
            </li>
            <li>
              See: <Link href="/tax-and-expenses" className="text-accent hover:underline">What can fashion models claim on tax?</Link>
            </li>
            <li>
              Read: <Link href="/blog/australian-model-tax-guide" className="text-accent hover:underline">The Australian Model&apos;s Tax Guide</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Hard CTA */}
      <section className="py-16 border-b border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-4">Free on iOS. Categories built for working models.</h2>
          <p className="text-text-muted mb-8">
            No subscription. No bank login. Your data stays on your device.
          </p>
          <AppStoreBadge size="large" track="expense-tracker-cta" />
        </div>
      </section>

      <CTA />
    </>
  );
}
