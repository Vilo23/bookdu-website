"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AUTHORS, BlogPost, ContentBlock, formatDate } from "@/lib/blog";
import Disclaimer from "@/components/blog/Disclaimer";

// Render inline markdown: **bold**, [text](url)
function renderInline(text: string) {
  // Split on **bold** and [link](url) patterns, preserving delimiters
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const boldMatch = part.match(/^\*\*(.+)\*\*$/);
    if (boldMatch) {
      return <strong key={i} className="font-semibold text-text">{boldMatch[1]}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent transition-colors">{linkMatch[1]}</a>;
    }
    return part;
  });
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.5 },
};

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "heading":
      if (block.level === "h2") {
        return (
          <motion.h2
            key={index}
            {...fadeUp}
            className="font-display text-2xl md:text-3xl uppercase tracking-tight text-text mb-8 mt-16 first:mt-0"
          >
            {block.text}
          </motion.h2>
        );
      }
      return (
        <motion.h3
          key={index}
          {...fadeUp}
          className="font-display text-xl md:text-2xl uppercase tracking-tight text-text mb-6 mt-12"
        >
          {block.text}
        </motion.h3>
      );

    case "paragraph":
      return (
        <motion.p
          key={index}
          {...fadeUp}
          className="text-text-muted leading-relaxed mb-5"
        >
          {renderInline(block.text)}
        </motion.p>
      );

    case "list":
      if (block.style === "numbered") {
        return (
          <motion.ol
            key={index}
            {...fadeUp}
            className="space-y-3 mb-6 pl-6 list-decimal"
          >
            {block.items.map((item, i) => (
              <li key={i} className="text-text-muted leading-relaxed">
                {renderInline(item)}
              </li>
            ))}
          </motion.ol>
        );
      }
      return (
        <motion.ul key={index} {...fadeUp} className="space-y-3 mb-6">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="text-text-muted leading-relaxed pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-accent"
            >
              {renderInline(item)}
            </li>
          ))}
        </motion.ul>
      );

    case "quote":
      return (
        <motion.blockquote
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-l-2 border-accent pl-8 py-4 my-12"
        >
          <p className="font-display text-xl md:text-2xl uppercase tracking-tight text-text leading-snug">
            {block.text}
          </p>
        </motion.blockquote>
      );

    case "callout":
      return (
        <motion.div
          key={index}
          {...fadeUp}
          className="bg-bg-deep border border-border rounded-sm p-6 my-8"
        >
          <span className="data-label mb-2">BOOKDU</span>
          <p className="text-text-muted leading-relaxed text-sm">
            {block.text}
          </p>
        </motion.div>
      );

    default:
      return null;
  }
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <>
      {/* ── Article Header ── */}
      <section className="pt-8 md:pt-32 pb-16 md:pb-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              {post.pillar}
            </span>
            <span className="font-mono text-xs text-text-muted">
              {formatDate(post.date)}
            </span>
            <span className="font-mono text-xs text-text-muted">
              {post.readTime}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-text"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-text-muted leading-relaxed text-lg"
          >
            {post.description}
          </motion.p>

          {(() => {
            const authorEntry = (
              AUTHORS as Record<string, { name: string; url?: string }>
            )[post.author];
            const authorUrl = authorEntry?.url;
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="mt-6 font-mono text-xs text-text-muted"
              >
                By{" "}
                {authorUrl ? (
                  <Link
                    href={authorUrl}
                    className="underline underline-offset-2 hover:text-accent transition-colors"
                  >
                    {post.author}
                  </Link>
                ) : (
                  post.author
                )}
              </motion.div>
            );
          })()}
        </div>
      </section>

      {/* ── Article Body ── */}
      <article className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.disclaimer && <Disclaimer kind={post.disclaimer} />}
          {post.content.map((block, i) => renderBlock(block, i))}
          {post.disclaimer && <Disclaimer kind={post.disclaimer} />}
        </div>
      </article>

      {/* ── Back to Blog ── */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-text-muted hover:text-accent transition-colors duration-200"
          >
            &#8592; Back to Blog
          </Link>
        </div>
      </section>
    </>
  );
}
