import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getAuthorSchema, getPostBySlug } from "@/lib/blog";
import CTA from "@/components/sections/CTA";
import BlogPostContent from "./BlogPostContent";

// Per-post OG image route. Crawlable (no robots.txt block at this path).
function postOgImage(slug: string) {
  return `https://bookdu.co/blog/${slug}/opengraph-image`;
}

// Note: dangerouslySetInnerHTML below is used ONLY for JSON-LD structured data
// with static, developer-controlled content from the blog data layer.
// No user input is ever rendered this way.

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    ...(post.noIndex && { robots: { index: false, follow: true } }),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://bookdu.co/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image ?? postOgImage(post.slug)],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // JSON-LD — static, developer-controlled content only (safe)
  const imageUrl = post.image ?? postOgImage(post.slug);
  const articleSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://bookdu.co/blog/${post.slug}#article`,
    isPartOf: { "@id": "https://bookdu.co/blog#blog" },
    headline: post.title,
    description: post.description,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    author: getAuthorSchema(post.author),
    publisher: { "@id": "https://bookdu.co/#organization" },
    mainEntityOfPage: `https://bookdu.co/blog/${post.slug}`,
  }).replace(/</g, "\\u003c");

  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bookdu.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://bookdu.co/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://bookdu.co/blog/${post.slug}`,
      },
    ],
  }).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />

      {/* Breadcrumb — pt-20 on mobile keeps it below the fixed Header (lg:hidden, ~56px tall) */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-6"
      >
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog" className="hover:text-accent transition-colors">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
            aria-current="page"
            className="text-title font-medium truncate max-w-[200px]"
          >
            {post.title}
          </li>
        </ol>
      </nav>

      <BlogPostContent post={post} />
      <CTA />
    </>
  );
}
