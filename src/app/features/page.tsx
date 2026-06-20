import { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/sections/CTA";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import FeaturesContent from "./FeaturesContent";

export const metadata: Metadata = {
  title: "Fashion Model Payment, Expense & Tax Tracker",
  description: "Track payments across multiple agencies, log tax-ready expenses, store contracts, and estimate tax. Built for working fashion models. Free on iOS.",
  keywords: [
    "fashion model payment tracker",
    "model payment tracker",
    "fashion model expenses",
    "fashion model tax tracker",
    "modeling agency payment app",
    "modeling contract storage app",
    "casting schedule organiser",
    "freelance model tax calculator",
  ],
  alternates: { canonical: "/features" },
  openGraph: {
    title: "BOOKDU — Fashion Model Payment, Expense & Tax Tracker",
    description: "Track payments across multiple agencies, log tax-ready expenses, store contracts, and estimate tax. Built for working fashion models. Free on iOS.",
    url: "https://bookdu.co/features",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOOKDU — Fashion Model Payment, Expense & Tax Tracker",
    description: "Track payments across multiple agencies, log tax-ready expenses, store contracts, and estimate tax. Built for working fashion models. Free on iOS.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bookdu.co" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://bookdu.co/features" },
  ],
};

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-title font-medium">Features</li>
        </ol>
      </nav>

      {/* Page Header */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-title mb-4">
            Everything a Fashion Model Needs to Track Payments, Expenses and Tax
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
            One app. Everything protected. Payment tracking, contract management, and scheduling for fashion models — all on your phone.
          </p>
          <AppStoreBadge size="large" track="features-hero" />
        </div>
      </section>

      {/* All feature sections */}
      <FeaturesContent />

      {/* FAQ Section */}
      <section className="py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-8 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-title mb-2">How do models track payments from agencies?</h3>
              <p className="text-text-muted">Log each job with the agency, client, and rate. When the job is done, track whether payment has arrived and get reminded when it&apos;s overdue. No invoicing needed — just mark it paid when the money lands.</p>
            </div>
            <div>
              <h3 className="font-semibold text-title mb-2">Is BOOKDU free to download?</h3>
              <p className="text-text-muted">Yes, BOOKDU is completely free on the iOS App Store. There are no hidden fees, subscriptions, or in-app purchases.</p>
            </div>
            <div>
              <h3 className="font-semibold text-title mb-2">Does BOOKDU store my data privately?</h3>
              <p className="text-text-muted">BOOKDU is 100% offline and private. Your data stays on your device — no accounts, no cloud storage, no tracking. Nothing leaves your phone.</p>
            </div>
            <div>
              <h3 className="font-semibold text-title mb-2">Can BOOKDU help with taxes for freelance models?</h3>
              <p className="text-text-muted">Yes. BOOKDU includes multi-country tax estimation for the US, UK, Australia, New Zealand, France, and Italy. Track expenses, snap receipts, and export everything to CSV for your accountant.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
