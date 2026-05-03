import { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/sections/CTA";
import { AppStoreBadge } from "@/components/AppStoreBadge";

export const metadata: Metadata = {
  title: "Just Got Signed? A Money Primer for New Models | BOOKDU",
  description:
    "New to modeling and confused about how the money side works? A short primer on vouchers, commission, payment timelines, and tracking from day one. Free on iOS.",
  keywords: [
    "model new to industry finance",
    "new model finance",
    "first modeling paycheck",
    "modeling income for beginners",
    "how to manage money as a new model",
    "new model agency commission",
    "new model voucher explained",
  ],
  alternates: { canonical: "/for/new-models" },
  openGraph: {
    title: "A Money Primer for New Fashion Models | BOOKDU",
    description:
      "Vouchers, commission, payment timelines, and what to track from your first job. Built for new models.",
    url: "https://bookdu.co/for/new-models",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Money Primer for New Fashion Models | BOOKDU",
    description:
      "Vouchers, commission, payment timelines, and what to track from your first job. Built for new models.",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://bookdu.co/#app",
  name: "BOOKDU — Finance Tracking for Models",
  applicationCategory: "FinanceApplication",
  operatingSystem: "iOS",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  audience: {
    "@type": "Audience",
    audienceType: "New fashion models who have just signed with their first agency",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bookdu.co" },
    { "@type": "ListItem", position: 2, name: "For New Models", item: "https://bookdu.co/for/new-models" },
  ],
};

const softwareJson = JSON.stringify(softwareSchema).replace(/</g, "\\u003c");
const breadcrumbJson = JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c");

export default function ForNewModelsPage() {
  return (
    <>
      <script type="application/ld+json">{softwareJson}</script>
      <script type="application/ld+json">{breadcrumbJson}</script>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-6">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-title font-medium">For New Models</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-12 md:py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-title mb-4">
            Just Got Signed? A Money Primer for New Fashion Models
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Your first booking is exciting. The money side is confusing. Here&apos;s what to know on day one &mdash; and the tracker that holds it together. Free on iOS.
          </p>
          <AppStoreBadge size="large" track="for-new-models-hero" />
        </div>
      </section>

      {/* You're new and that's fine */}
      <section className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">
            You&apos;re new. That&apos;s fine. Nobody is born knowing this.
          </h2>
          <p className="text-text-muted mb-4">
            You signed with an agency this month. You shot your first test, got booked for an editorial, and now there&apos;s a number on the voucher you don&apos;t really understand. Someone mentions commission, then &quot;net 60&quot;, then usage rights, and you nod.
          </p>
          <p className="text-text-muted mb-4">
            No new model knows this on day one. You weren&apos;t taught it in casting. The agency&apos;s job is to book you. The bookkeeper&apos;s job is to keep things moving. Nobody is sitting you down to explain how the money actually flows.
          </p>
          <p className="text-text-muted">
            What we hear from models who handle this well isn&apos;t that they got smart fast. It&apos;s that they kept simple records from their first job, asked questions when a number didn&apos;t make sense, and didn&apos;t let two months go by without checking where things sit.
          </p>
        </div>
      </section>

      {/* The three things to know */}
      <section className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-8">
            Three things to know about the money
          </h2>

          <h3 className="text-xl font-semibold text-title mb-3">
            1. The voucher is the start, not the end.
          </h3>
          <p className="text-text-muted mb-4">
            When you finish a job, you fill out a voucher (sometimes called a job sheet or booking voucher). The voucher confirms what was booked and at what rate. The agency invoices the client from your voucher. The client pays the agency. The agency pays you, minus commission.
          </p>
          <p className="text-text-muted mb-8">
            The number on the voucher is gross, not net. Don&apos;t plan a budget around it.
          </p>

          <h3 className="text-xl font-semibold text-title mb-3">
            2. The wait is normal.
          </h3>
          <p className="text-text-muted mb-4">
            The lag between shoot day and money in your account is commonly 60 to 120 days. Sometimes longer. That&apos;s not because someone is cheating &mdash; it&apos;s the standard net 60/90 client terms plus agency processing stacking up. The system is slow, not broken.
          </p>
          <p className="text-text-muted mb-8">
            New models often think a first paycheck is &quot;missing&quot; when it&apos;s actually on schedule. Knowing the realistic timeline upfront protects your nerves and your rent.
          </p>

          <h3 className="text-xl font-semibold text-title mb-3">
            3. Commission and tax are separate.
          </h3>
          <p className="text-text-muted">
            Agency commission (commonly 15&ndash;25% on your end, with a similar markup on the client end) is taken before you&apos;re paid. Tax comes after. Your taxable income is what landed in your bank account, not what was printed on the voucher. New models occasionally hand a tax agent the gross figure and overpay &mdash; keep both numbers visible from job one.
          </p>
        </div>
      </section>

      {/* How to track from day one */}
      <section className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">
            How to track from day one
          </h2>
          <p className="text-text-muted mb-6">
            The earlier you start, the easier end-of-year is. You don&apos;t need a finance degree. You need three things in one place:
          </p>
          <ul className="space-y-3 text-text-muted mb-6">
            <li>
              <strong className="text-title">Every job logged</strong> &mdash; agency, client, voucher number, gross rate, expected pay date.
            </li>
            <li>
              <strong className="text-title">Every payment matched</strong> to the job it came from, after commission.
            </li>
            <li>
              <strong className="text-title">Every receipt captured</strong> &mdash; cabs to castings, your portfolio fees, gym, hair, skincare, travel.
            </li>
          </ul>
          <p className="text-text-muted">
            BOOKDU is the <Link href="/payment-tracker" className="text-accent hover:underline">Model Payment Tracker</Link> we built for exactly this. Per-agency ledgers, voucher &rarr; invoice &rarr; paid lifecycle, overdue alerts at 35 and 56 days, and a <Link href="/tax-and-expenses" className="text-accent hover:underline">Tax &amp; Expenses</Link> CSV export when EOFY arrives. Everything stays on your phone.
          </p>
        </div>
      </section>

      {/* Read more */}
      <section className="py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">Read next</h2>
          <ul className="space-y-3 text-text-muted">
            <li>
              <Link href="/blog/how-long-to-get-paid-as-a-model" className="text-accent hover:underline">
                How long modeling agencies take to pay
              </Link>{" "}
              &mdash; the realistic timeline, by country.
            </li>
            <li>
              <Link href="/blog/how-much-commission-do-modeling-agencies-take" className="text-accent hover:underline">
                How agency commission works
              </Link>{" "}
              &mdash; what&apos;s deducted before you see a number.
            </li>
            <li>
              <Link href="/blog/what-is-a-modeling-voucher" className="text-accent hover:underline">
                What is a modeling voucher?
              </Link>{" "}
              &mdash; the document everything else flows from.
            </li>
            <li>
              <Link href="/glossary" className="text-accent hover:underline">
                Glossary
              </Link>{" "}
              &mdash; short definitions for voucher, day rate, mother agency, exclusivity, and more.
            </li>
          </ul>
        </div>
      </section>

      {/* Hard CTA */}
      <section className="py-16 border-b border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-4">
            Free on iOS. Built for working fashion models.
          </h2>
          <p className="text-text-muted mb-8">
            No subscription. No bank login. Your data stays on your device.
          </p>
          <AppStoreBadge size="large" track="for-new-models-cta" />
        </div>
      </section>

      <CTA />
    </>
  );
}
