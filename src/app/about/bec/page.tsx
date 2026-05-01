import { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/sections/CTA";

// Note: dangerouslySetInnerHTML below is used ONLY for JSON-LD structured data
// with static, developer-controlled content. No user input is ever rendered this way.
// All `<` characters are also escaped via .replace(/</g, "\\u003c") as defense in depth.
// Same pattern as src/app/about/roman-feldman/page.tsx and src/app/blog/[slug]/page.tsx.

export const metadata: Metadata = {
  title: "Bec - Researcher, BOOKDU",
  description:
    "Bec writes for BOOKDU on the practical side of model career admin — agency payments, contracts, vouchers, and the things nobody tells you when you sign your first contract.",
  alternates: { canonical: "/about/bec" },
  openGraph: {
    title: "Bec - Researcher, BOOKDU",
    description:
      "Researcher and mother of a working model. Writes the practical side of model career admin for BOOKDU.",
    url: "https://bookdu.co/about/bec",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bec - Researcher, BOOKDU",
    description:
      "Researcher and mother of a working model. Writes the practical side of model career admin for BOOKDU.",
  },
};

// ProfilePage wraps Person per Google's author/profile guidance.
const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    "@id": "https://bookdu.co/about/bec#person",
    name: "Bec",
    url: "https://bookdu.co/about/bec",
    jobTitle: "Researcher, BOOKDU",
    worksFor: { "@id": "https://bookdu.co/#organization" },
    description:
      "Researcher and mother of a working model. Writes for BOOKDU on the practical side of model career admin — payments, contracts, vouchers, tax basics.",
  },
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
      name: "Bec",
      item: "https://bookdu.co/about/bec",
    },
  ],
};

export default function BecPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c"),
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
            Bec
          </li>
        </ol>
      </nav>

      {/* Page Header */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block mb-6">
            Researcher // Bec
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-text">
            Bec
          </h1>
          <p className="mt-6 font-mono text-sm uppercase tracking-[0.15em] text-text-muted max-w-2xl">
            Researcher and mother of a working model. Writes the practical side
            of model career admin for BOOKDU.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div>
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-text mb-8">
                Why I Write For BOOKDU.
              </h2>
              <div className="space-y-5">
                <p className="text-text-muted leading-relaxed">
                  I&apos;m a researcher and the mother of a working model.
                  Watching my daughter navigate her first agency contracts and
                  payment cycles taught me how much of the model business runs
                  on word-of-mouth and assumed knowledge.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Most working models pick up the practical stuff — vouchers,
                  payment timelines, tax obligations, what to look for in a
                  contract — by accident, often after they&apos;ve already lost
                  money or signed something they didn&apos;t fully understand.
                </p>
                <p className="text-text-muted leading-relaxed">
                  My job here is to do the research the agency won&apos;t hand
                  you, and write it down clearly enough that the next model in
                  her group chat doesn&apos;t have to learn the same lesson the
                  hard way.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-text mb-8">
                What I Write About.
              </h2>
              <p className="text-text-muted leading-relaxed mb-8">
                Vouchers, agency payments, contracts, tax basics across
                countries — the operational side of working as a model. Posts
                that touch tax or finance specifics are general information
                only, not professional advice. For anything binding, talk to a
                registered tax agent or lawyer.
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
