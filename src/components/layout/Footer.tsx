"use client";

import Link from "next/link";
import { EXTERNAL_LINKS, FOR_MODELS_LINKS } from "@/lib/constants";

const linkStyle =
  "font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-wider text-text-muted hover:text-text transition-colors duration-200";

const columnHeadingStyle =
  "font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-wider text-text mb-4 block";

const iconLinkStyle =
  "text-text-muted hover:text-text transition-colors duration-200";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top: brand + link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <span className="font-[family-name:var(--font-archivo)] text-text text-[clamp(2rem,4vw,4rem)] leading-none block">
              BOOKDU
            </span>
            <span className="font-[family-name:var(--font-jetbrains)] text-text-muted text-xs uppercase tracking-wider mt-3 block">
              Finance tracking for freelance models
            </span>
          </div>

          {/* For Models */}
          <div>
            <span className={columnHeadingStyle}>For Models</span>
            <ul className="flex flex-col gap-3">
              {FOR_MODELS_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkStyle}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <span className={columnHeadingStyle}>Resources</span>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/blog" className={linkStyle}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/glossary" className={linkStyle}>
                  Glossary
                </Link>
              </li>
              <li>
                <Link href="/features" className={linkStyle}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/screenshots" className={linkStyle}>
                  Screenshots
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <span className={columnHeadingStyle}>Company</span>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/about" className={linkStyle}>
                  About
                </Link>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.privacyPolicy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyle}
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.support}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyle}
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: copyright + social */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-12 pt-8 border-t border-border">
          <span className="font-[family-name:var(--font-jetbrains)] text-text-muted text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} BOOKDU
          </span>
          <div className="flex items-center gap-5">
            <a
              href={EXTERNAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BOOKDU on Instagram"
              className={iconLinkStyle}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href={EXTERNAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BOOKDU on TikTok"
              className={iconLinkStyle}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
