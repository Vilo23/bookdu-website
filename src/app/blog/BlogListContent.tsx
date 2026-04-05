"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost, formatDate } from "@/lib/blog";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.5 },
};

export default function BlogListContent({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block mb-6"
          >
            Blog // The Business Side
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-text"
          >
            The Admin Side
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 font-mono text-sm uppercase tracking-[0.15em] text-text-muted max-w-2xl"
          >
            Payments. Contracts. Tax. Career admin. The stuff nobody teaches you
            about modeling.
          </motion.p>
        </div>
      </section>

      {/* ── Post List ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-mono text-sm uppercase tracking-[0.15em] text-text-muted">
                First articles dropping soon. Stay tuned.
              </p>
            </div>
          ) : (
            <div className="space-y-0">
              {posts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="data-card py-8 group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="data-label mb-0">{post.pillar}</span>
                    <span className="font-mono text-xs text-text-muted">
                      {formatDate(post.date)}
                    </span>
                    <span className="font-mono text-xs text-text-muted">
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-text group-hover:text-accent transition-colors duration-200 mb-3">
                      {post.title}
                    </h2>
                    <p className="text-text-muted leading-relaxed text-sm md:text-base">
                      {post.description}
                    </p>
                    <span className="inline-block mt-4 font-mono text-xs uppercase tracking-[0.15em] text-accent group-hover:text-text transition-colors duration-200">
                      Read Article &#8599;
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
