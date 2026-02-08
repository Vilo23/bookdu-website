"use client";

import Link from "next/link";
import Image from "next/image";
import { EXTERNAL_LINKS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="BOOKDU logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <h3 className="text-xl font-bold text-title">BOOKDU</h3>
            </div>
            <p className="text-text-muted text-sm">
              Stop carrying it all in your head. Payments, contracts, and schedule — protected.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-title mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-title transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-title mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={EXTERNAL_LINKS.privacyPolicy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-title transition-colors text-sm inline-flex items-center gap-1"
                >
                  Privacy Policy
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.support}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-title transition-colors text-sm inline-flex items-center gap-1"
                >
                  Support
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright + Back to top */}
        <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} BOOKDU. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="text-text-muted hover:text-title transition-colors p-2 rounded-lg hover:bg-bg group"
            aria-label="Back to top"
          >
            <svg
              className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
