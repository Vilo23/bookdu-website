"use client";

import { useEffect, useState } from "react";
import { AppStoreBadge } from "@/components/AppStoreBadge";

const DISMISS_KEY = "bookdu-sticky-bar-dismissed";

export default function StickyAppStoreBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(DISMISS_KEY)) return;

    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = total > 0 ? scrolled / total : 0;
      setVisible(scrolled > 200 && ratio < 0.8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  };

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-0 inset-x-0 z-40 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-bg-deep border-t border-border px-4 py-3 flex items-center gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.25)]">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-text-muted flex-1 leading-tight">
          Get BOOKDU
          <br />
          <span className="text-text-muted/70 normal-case tracking-normal">
            Free on iOS
          </span>
        </span>
        <AppStoreBadge size="small" track="blog-sticky" />
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="ml-1 text-text-muted hover:text-text transition-colors p-1"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
