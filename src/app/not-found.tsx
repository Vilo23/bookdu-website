import Link from "next/link";
import { EXTERNAL_LINKS } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-[family-name:var(--font-archivo)] text-6xl md:text-8xl text-title mb-4">
          404
        </h1>
        <p className="text-lg text-text-muted mb-8">
          This page doesn&apos;t exist. Maybe it moved, maybe it never did.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-accent text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Back to Home
          </Link>
          <Link
            href="/features"
            className="px-6 py-3 border border-border text-title rounded-lg hover:bg-accent/5 transition-colors font-medium"
          >
            See Features
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border border-border text-title rounded-lg hover:bg-accent/5 transition-colors font-medium"
          >
            Read the Blog
          </Link>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <a
            href={EXTERNAL_LINKS.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-wider text-text-muted hover:text-text transition-colors"
          >
            Download BOOKDU Free on iOS &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
