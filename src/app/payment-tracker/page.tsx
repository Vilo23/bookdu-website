import { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/sections/CTA";
import { AppStoreBadge } from "@/components/AppStoreBadge";

export const metadata: Metadata = {
  title: "Model Payment Tracker — Track Multiple Agencies | BOOKDU",
  description: "The payment tracker built for fashion models working across multiple agencies. Track what's owed, what's overdue, and what hit your account. Free on iOS.",
  keywords: [
    "fashion model payment tracker",
    "model payment tracker",
    "modeling agency payment tracker",
    "track payments multiple modeling agencies",
    "fashion model income tracker",
    "payment tracker for working models",
  ],
  alternates: { canonical: "/payment-tracker" },
  openGraph: {
    title: "Model Payment Tracker for Fashion Models | BOOKDU",
    description: "Track payments across multiple agencies. Know what's owed, what's overdue, and what's been paid. Free on iOS.",
    url: "https://bookdu.co/payment-tracker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Model Payment Tracker for Fashion Models | BOOKDU",
    description: "Track payments across multiple agencies. Know what's owed, what's overdue, and what's been paid. Free on iOS.",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://bookdu.co/#app",
  name: "BOOKDU — Model Payment Tracker",
  applicationCategory: "FinanceApplication",
  operatingSystem: "iOS",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  audience: {
    "@type": "Audience",
    audienceType: "Freelance fashion models working with multiple agencies internationally",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bookdu.co" },
    { "@type": "ListItem", position: 2, name: "Payment Tracker", item: "https://bookdu.co/payment-tracker" },
  ],
};

export default function PaymentTrackerPage() {
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
          <li aria-current="page" className="text-title font-medium">Payment Tracker</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-12 md:py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-title mb-4">
            The Payment Tracker for Fashion Models Working With Multiple Agencies
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Track what&apos;s owed, what&apos;s overdue, and what hit your account. Across every agency, in every currency. Free on iOS.
          </p>
          <AppStoreBadge size="large" track="payment-tracker-hero" />
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">You shouldn&apos;t need a finance degree to know what you&apos;re owed.</h2>
          <p className="text-text-muted mb-4">
            You finish a three-day shoot in February. It&apos;s May. You&apos;ve worked for three agencies since. Which one owes you what? You scroll three apps and two spreadsheets to find out — then remember the voucher you submitted in March still hasn&apos;t been confirmed.
          </p>
          <p className="text-text-muted mb-4">
            This is what every working model deals with. Vouchers, agency commission, net 30/60/90, multi-currency, multiple agencies. The payment delay between shoot and money in your account is commonly 60 to 120 days — sometimes longer. That&apos;s how the industry has always worked. The system is slow, not broken.
          </p>
          <p className="text-text-muted">
            What models who handle it well do differently isn&apos;t chase harder. They always know where things sit.
          </p>
        </div>
      </section>

      {/* What the tracker does */}
      <section className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-8">What you can track</h2>
          <ul className="space-y-5 text-text-muted">
            <li>
              <strong className="text-title">Per-agency ledgers.</strong> Every agency has its own running balance. See net-of-commission income at a glance.
            </li>
            <li>
              <strong className="text-title">Voucher → invoice → paid lifecycle.</strong> Track each job through every stage. Mark when each step happens. See where it&apos;s stuck.
            </li>
            <li>
              <strong className="text-title">35-day and 56-day overdue alerts.</strong> Automatic reminders before you&apos;d otherwise notice. Two prompts — enough to follow up, not enough to nag.
            </li>
            <li>
              <strong className="text-title">Multi-currency.</strong> Work in EUR, USD, GBP, AUD without spreadsheet math. Live conversion to your home currency.
            </li>
            <li>
              <strong className="text-title">Mother-agency and main-agency commission split.</strong> Handle double-commission jobs without manual subtraction.
            </li>
            <li>
              <strong className="text-title">CSV export for tax.</strong> Every payment, every agency, every currency. End of financial year takes minutes.
            </li>
            <li>
              <strong className="text-title">Works offline.</strong> Your phone signal isn&apos;t always great in the studio. Your data stays on your device — nothing leaves your phone.
            </li>
          </ul>
        </div>
      </section>

      {/* Why fashion models specifically */}
      <section className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">Why generic accounting tools don&apos;t fit</h2>
          <p className="text-text-muted mb-4">
            Tools like QuickBooks and FreshBooks are built for office workers who invoice their own clients on net 30. Fashion models don&apos;t work that way.
          </p>
          <ul className="space-y-3 text-text-muted mb-6">
            <li>
              <strong className="text-title">Vouchers, not invoices.</strong> Generic tools don&apos;t know what a voucher is. The voucher is the basis for everything that follows.
            </li>
            <li>
              <strong className="text-title">Agency commission isn&apos;t an expense.</strong> It&apos;s a deduction taken before the model is paid. Most accounting tools mishandle this.
            </li>
            <li>
              <strong className="text-title">Net 60 or 90 is the default.</strong> Generic tools assume net 30. Models lose visibility waiting on the real timeline.
            </li>
            <li>
              <strong className="text-title">Usage rights and buyout fees are line items.</strong> A standard invoicing tool doesn&apos;t separate a day rate from a usage fee. The difference can be the larger half of a job&apos;s value.
            </li>
          </ul>
          <p className="text-text-muted">
            BOOKDU was built by Roman Feldman for his daughter, who works across three countries. If your career looks like hers, this is for you.
          </p>
        </div>
      </section>

      {/* How it fits */}
      <section className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">How it fits the rest of your admin</h2>
          <ul className="space-y-3 text-text-muted">
            <li>
              Track <Link href="/expense-tracker" className="text-accent hover:underline">expenses</Link> the same way — agency fees, test shoots, gym, skincare, travel.
            </li>
            <li>
              Get a <Link href="/tax-and-expenses" className="text-accent hover:underline">tax-ready CSV export</Link> at end of year — categories pre-mapped to ATO/IRS/HMRC.
            </li>
            <li>
              Read more: <Link href="/blog/how-long-to-get-paid-as-a-model" className="text-accent hover:underline">How long do modeling agencies take to pay?</Link>
            </li>
            <li>
              Read more: <Link href="/blog/track-payments-multiple-modeling-agencies" className="text-accent hover:underline">How to track payments across multiple agencies</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Hard CTA */}
      <section className="py-16 border-b border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-4">Free on iOS. Built for working fashion models.</h2>
          <p className="text-text-muted mb-8">
            No subscription. No bank login. Your data stays on your device.
          </p>
          <AppStoreBadge size="large" track="payment-tracker-cta" />
        </div>
      </section>

      <CTA />
    </>
  );
}
