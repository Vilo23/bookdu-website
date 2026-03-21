import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "App Screenshots - See BOOKDU Payment Tracking in Action",
  description: "Browse 18 screenshots of the BOOKDU iOS app: dashboard, payment tracking, contract management, calendar scheduling, expense logging, and tax estimation features for models.",
  keywords: [
    "bookdu app screenshots",
    "model payment tracking app interface",
    "finance app for models screenshots",
  ],
  alternates: { canonical: "/screenshots" },
  openGraph: {
    title: "BOOKDU Screenshots - Finance Tracking App for Models",
    description: "Browse the BOOKDU app: payment tracking, contracts, scheduling, and tax tools for models.",
    url: "https://bookdu.co/screenshots",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOOKDU Screenshots - Finance Tracking App for Models",
    description: "Browse the BOOKDU app: payment tracking, contracts, scheduling, and tax tools for models.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bookdu.co" },
    { "@type": "ListItem", position: 2, name: "Screenshots", item: "https://bookdu.co/screenshots" },
  ],
};

export default function ScreenshotsLayout({ children }: { children: ReactNode }) {
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
          <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-title font-medium">Screenshots</li>
        </ol>
      </nav>

      {children}
    </>
  );
}
