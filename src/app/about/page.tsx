import { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/sections/CTA";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About BOOKDU - Why We Built a Finance App for Models",
  description: "Learn the story behind BOOKDU: why freelance models need a dedicated finance tool for tracking agency payments, guarding contracts, and managing modeling income.",
  keywords: [
    "about bookdu app",
    "finance app for freelance models",
    "why models need payment tracking",
    "privacy first app for models",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About BOOKDU - The Finance App Built for Models",
    description: "Learn why we built a dedicated finance tool for freelance models and talent.",
    url: "https://bookdu.co/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About BOOKDU - The Finance App Built for Models",
    description: "Learn why we built a dedicated finance tool for freelance models and talent.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bookdu.co" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://bookdu.co/about" },
  ],
};

export default function AboutPage() {
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
          <li aria-current="page" className="text-title font-medium">About</li>
        </ol>
      </nav>

      <AboutContent />
      <CTA />
    </>
  );
}
