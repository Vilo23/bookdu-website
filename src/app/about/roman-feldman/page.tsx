import { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/sections/CTA";

// Note: dangerouslySetInnerHTML below is used ONLY for JSON-LD structured data
// with static, developer-controlled content. No user input is ever rendered this way.
// All `<` characters are also escaped via .replace(/</g, "\\u003c") as defense in depth.
// Same pattern as src/app/about/page.tsx and src/app/blog/[slug]/page.tsx.

export const metadata: Metadata = {
  title: "Roman Feldman - Founder, BOOKDU",
  description:
    "Roman Feldman is the founder of BOOKDU. He built the app after watching his daughter chase modeling payments across three countries.",
  alternates: { canonical: "/about/roman-feldman" },
  openGraph: {
    title: "Roman Feldman - Founder, BOOKDU",
    description:
      "Father of a working model. Built BOOKDU after watching his daughter chase payments across agencies.",
    url: "https://bookdu.co/about/roman-feldman",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roman Feldman - Founder, BOOKDU",
    description:
      "Father of a working model. Built BOOKDU after watching his daughter chase payments across agencies.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roman Feldman",
  url: "https://bookdu.co/about/roman-feldman",
  jobTitle: "Founder, BOOKDU",
  worksFor: {
    "@type": "Organization",
    name: "BOOKDU",
    url: "https://bookdu.co",
  },
  description:
    "Father of a working model. Built BOOKDU after watching his daughter chase payments across three countries.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bookdu.co" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://bookdu.co/about" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Roman Feldman",
      item: "https://bookdu.co/about/roman-feldman",
    },
  ],
};

export default function RomanFeldmanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6"
      >
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-title font-medium">
            Roman Feldman
          </li>
        </ol>
      </nav>

      {/* Page Header */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block mb-6">
            Founder // Roman Feldman
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-text">
            Roman Feldman
          </h1>
          <p className="mt-6 font-mono text-sm uppercase tracking-[0.15em] text-text-muted max-w-2xl">
            Father of a working model. Built BOOKDU after watching his daughter
            chase payments across three countries.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div>
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-text mb-8">
                Why I Built This.
              </h2>
              <div className="space-y-5">
                <p className="text-text-muted leading-relaxed">
                  I&apos;m not a model. My daughter is. I watched her come home
                  from shoots exhausted, then try to figure out which agencies
                  owed her what across three countries. Payments arrived weeks
                  late. Sometimes months late. Sometimes not at all unless she
                  chased them.
                </p>
                <p className="text-text-muted leading-relaxed">
                  She kept it all in her head. Spreadsheets, emails, screenshots
                  of agency portals. The system the industry runs on assumes
                  models will absorb the admin themselves. Most do. Most lose
                  money in the process.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Finance is what I know. So I built BOOKDU for her — and
                  everyone in her group chat who has the same problem.
                </p>
              </div>
            </div>

            <blockquote className="border-l-2 border-accent pl-8 py-4">
              <p className="font-display text-xl md:text-2xl uppercase tracking-tight text-text leading-snug">
                Models do the work. The system makes them chase the money.
                BOOKDU is the system that catches it.
              </p>
            </blockquote>

            <div>
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-text mb-8">
                What I Write About.
              </h2>
              <p className="text-text-muted leading-relaxed mb-8">
                I write the boring-but-essential side of working as a model:
                payment timelines, contract clauses worth checking, tax basics
                across countries, the difference between confirmed and
                unconfirmed jobs. The stuff nobody teaches you when you sign
                with an agency.
              </p>
              <p className="text-text-muted leading-relaxed">
                Read the latest on the{" "}
                <Link
                  href="/blog"
                  className="underline underline-offset-4 hover:text-text transition-colors"
                >
                  BOOKDU blog
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
