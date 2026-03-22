"use client";

import { EXTERNAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8">
          {/* Brand */}
          <div>
            <span className="font-[family-name:var(--font-archivo)] text-text text-[clamp(2rem,4vw,4rem)] leading-none block">
              BOOKDU
            </span>
            <span className="font-[family-name:var(--font-jetbrains)] text-text-muted text-xs uppercase tracking-wider mt-3 block">
              &copy; {new Date().getFullYear()} BOOKDU
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href={EXTERNAL_LINKS.privacyPolicy}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-wider text-text-muted hover:text-text transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href={EXTERNAL_LINKS.support}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-wider text-text-muted hover:text-text transition-colors duration-200"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
