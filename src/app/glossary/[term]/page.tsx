import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/sections/CTA";
import { getAllTerms, getTermBySlug, getRelatedTerms, GLOSSARY_AUTHOR } from "@/lib/glossary";

type Props = { params: Promise<{ term: string }> };

export async function generateStaticParams() {
  return getAllTerms().map((t) => ({ term: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term: slug } = await params;
  const t = getTermBySlug(slug);
  if (!t) return {};
  const url = `https://bookdu.co/glossary/${t.slug}`;
  const title = `${t.term} — Modeling Glossary | BOOKDU`;
  const description = t.shortDefinition.slice(0, 155);
  return {
    title,
    description,
    alternates: { canonical: `/glossary/${t.slug}` },
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function GlossaryTermPage({ params }: Props) {
  const { term: slug } = await params;
  const t = getTermBySlug(slug);
  if (!t) notFound();

  const related = getRelatedTerms(t.relatedSlugs);

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `https://bookdu.co/glossary/${t.slug}#term`,
    name: t.term,
    description: t.shortDefinition,
    url: `https://bookdu.co/glossary/${t.slug}`,
    inDefinedTermSet: "https://bookdu.co/glossary#termset",
    dateModified: t.lastUpdated,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bookdu.co" },
      { "@type": "ListItem", position: 2, name: "Glossary", item: "https://bookdu.co/glossary" },
      { "@type": "ListItem", position: 3, name: t.term, item: `https://bookdu.co/glossary/${t.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(definedTermSchema).replace(/</g, "\\u003c"),
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
          <li><Link href="/glossary" className="hover:text-accent transition-colors">Glossary</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-title font-medium">{t.term}</li>
        </ol>
      </nav>

      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-title mb-6">{t.term}</h1>

          <p className="text-lg text-text-muted mb-12 italic border-l-4 border-accent pl-4">
            {t.shortDefinition}
          </p>

          <h2 className="text-2xl font-bold text-title mb-4">What it means in practice</h2>
          <p className="text-text-muted mb-8">{t.inPractice}</p>

          <h2 className="text-2xl font-bold text-title mb-4">How it affects what you get paid</h2>
          <p className="text-text-muted mb-12">{t.financialImpact}</p>

          {related.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-title mb-4">Related terms</h2>
              <ul className="space-y-2 mb-12">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/glossary/${r.slug}`} className="text-accent hover:underline">
                      {r.term}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          {t.seeAlso && t.seeAlso.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-title mb-4">See also</h2>
              <ul className="space-y-2 mb-12">
                {t.seeAlso.map((s, i) => (
                  <li key={i}>
                    <Link href={s.href} className="text-accent hover:underline">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          <p className="text-sm text-text-muted border-t border-border pt-6">
            Researched by{" "}
            <Link href={GLOSSARY_AUTHOR.url} className="text-accent hover:underline">
              {GLOSSARY_AUTHOR.name}
            </Link>
            . Last updated {t.lastUpdated}.
          </p>
        </div>
      </article>

      <CTA />
    </>
  );
}
