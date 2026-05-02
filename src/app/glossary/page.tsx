import { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/sections/CTA";
import { getAllTerms } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Modeling & Model Finance Glossary | BOOKDU",
  description:
    "Plain-English definitions of every term working models need to know — vouchers, day rates, exclusivity, buyouts, agency commission, and more.",
  keywords: [
    "modeling glossary",
    "model finance glossary",
    "model voucher definition",
    "agency commission definition",
    "modeling exclusivity definition",
    "day rate model definition",
  ],
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: "Modeling & Model Finance Glossary | BOOKDU",
    description:
      "Plain-English definitions of every term working models need to know.",
    url: "https://bookdu.co/glossary",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modeling & Model Finance Glossary | BOOKDU",
    description:
      "Plain-English definitions of every term working models need to know.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bookdu.co" },
    { "@type": "ListItem", position: 2, name: "Glossary", item: "https://bookdu.co/glossary" },
  ],
};

export default function GlossaryPage() {
  const allTerms = getAllTerms();

  const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": "https://bookdu.co/glossary#termset",
    name: "BOOKDU Modeling Glossary",
    description:
      "Plain-English glossary of modeling and model-finance terms — built for working models.",
    hasDefinedTerm: allTerms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `https://bookdu.co/glossary/${t.slug}#term`,
      name: t.term,
      description: t.shortDefinition,
      url: `https://bookdu.co/glossary/${t.slug}`,
      inDefinedTermSet: "https://bookdu.co/glossary#termset",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(definedTermSetSchema).replace(/</g, "\\u003c"),
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
          <li aria-current="page" className="text-title font-medium">Glossary</li>
        </ol>
      </nav>

      <section className="py-12 md:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-title mb-4">
            Modeling &amp; Model Finance Glossary
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Plain-English definitions of every term working models need to know — vouchers, day rates, exclusivity, buyouts, agency commission, and more. Built for working models.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="divide-y divide-border">
            {allTerms.map((t) => (
              <li key={t.slug} className="py-6">
                <Link href={`/glossary/${t.slug}`} className="group">
                  <h2 className="text-xl md:text-2xl font-bold text-title group-hover:text-accent transition-colors mb-2">
                    {t.term}
                  </h2>
                  <p className="text-text-muted">{t.shortDefinition}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm text-text-muted mt-12">
            Glossary v1 launched May 2026 — more terms shipping fortnightly. Researched by Bec.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
