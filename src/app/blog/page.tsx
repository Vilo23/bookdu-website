import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import CTA from "@/components/sections/CTA";
import BlogListContent from "./BlogListContent";

export const metadata: Metadata = {
  title: "Blog - Model Finance, Career Admin & Industry Insights",
  description:
    "Practical advice on model payments, agency contracts, tax, expenses, and the business side of modeling. Written for models, not finance people.",
  keywords: [
    "model payment tracking blog",
    "modeling career advice",
    "model finance tips",
    "modeling agency payments",
    "model contract tips",
    "freelance model tax guide",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "BOOKDU Blog - The Business Side of Modeling",
    description:
      "Payments, contracts, tax, and career admin. Practical advice for models and talent.",
    url: "https://bookdu.co/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOOKDU Blog - The Business Side of Modeling",
    description:
      "Payments, contracts, tax, and career admin. Practical advice for models and talent.",
  },
};

// JSON-LD breadcrumb — static, developer-controlled content (safe)
const breadcrumbJson = JSON.stringify({
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
  ],
}).replace(/</g, "\\u003c");

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJson }}
      />

      {/* Breadcrumb Navigation */}
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
          <li aria-current="page" className="text-title font-medium">
            Blog
          </li>
        </ol>
      </nav>

      <BlogListContent posts={posts} />
      <CTA />
    </>
  );
}
