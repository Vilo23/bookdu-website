"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { AppStoreBadge } from "@/components/AppStoreBadge";

export default function Hero() {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_1fr] grid-rows-[auto_1fr_auto] overflow-hidden px-[5vw] py-[2vw]">
      {/* Structural background chars */}
      <div
        className="structural-char"
        style={{ top: "-2vw", left: "-2vw" }}
        aria-hidden="true"
      >
        B
      </div>
      <div
        className="structural-char"
        style={{ bottom: "5vh", right: "-2vw" }}
        aria-hidden="true"
      >
        D
      </div>

      {/* Nav cluster — top-right, desktop only */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden lg:flex flex-col items-end gap-[0.5vh] col-start-2 row-start-1 mt-[2vh] relative z-10"
      >
        <span className="font-[family-name:var(--font-jetbrains)] text-[0.8vw] uppercase tracking-[0.1em] text-text mb-[2vh]">
          Menu // System
        </span>
        {NAV_LINKS.map((link) => {
          if ("children" in link) {
            const isOpen = openGroup === link.label;
            const hasActiveChild = link.children.some(
              (child) => pathname === child.href
            );
            return (
              <div
                key={link.label}
                className="flex flex-col items-end"
              >
                <button
                  type="button"
                  onClick={() => setOpenGroup(isOpen ? null : link.label)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  className={`font-[family-name:var(--font-inter)] text-[clamp(1.2rem,2.2vw,2.5rem)] font-medium tracking-[-0.02em] capitalize transition-colors duration-300 flex items-center gap-2 ${
                    hasActiveChild
                      ? "text-text"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    aria-hidden="true"
                    className={`text-[0.7em] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div className="flex flex-col items-end gap-[0.4vh] mt-1 mb-2 pr-1">
                    {link.children.map((sub) => {
                      const isActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`font-[family-name:var(--font-inter)] text-[clamp(0.85rem,1.1vw,1.1rem)] font-normal tracking-[-0.01em] transition-colors duration-300 ${
                            isActive
                              ? "text-text"
                              : "text-text-muted hover:text-text"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-inter)] text-[clamp(1.2rem,2.2vw,2.5rem)] font-medium tracking-[-0.02em] capitalize transition-colors duration-300 ${
                isActive ? "text-text" : "text-text-muted hover:text-text"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </motion.nav>

      {/* Center content — spans full width */}
      <div className="relative z-10 flex flex-col items-center justify-center col-span-1 lg:col-span-2 row-start-2">
        <h1 className="font-[family-name:var(--font-archivo)] text-[clamp(3rem,10vw,12rem)] uppercase leading-[0.9] text-center text-text mix-blend-difference">
          You Did
          <br />
          The Work
          <span className="sr-only"> — Finance Tracking App for Models</span>
        </h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 font-[family-name:var(--font-jetbrains)] text-[clamp(0.65rem,0.9vw,0.9rem)] uppercase tracking-[0.2em] text-text-muted text-center"
        >
          Finance tracking for freelance models &amp; talent
        </motion.h2>
      </div>

      {/* CTA cluster at bottom — spans full width */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 flex flex-col sm:flex-row justify-between items-end col-span-1 lg:col-span-2 row-start-3 pb-[3vh] gap-8"
      >
        {/* Left: micro data block */}
        <div className="micro-data flex flex-col gap-1">
          <div>
            PAYMENTS //{" "}
            <span>TRACKED</span>
          </div>
          <div>
            CONTRACTS //{" "}
            <span>GUARDED</span>
          </div>
          <div>
            SCHEDULE //{" "}
            <span>CONFIRMED</span>
          </div>
        </div>

        {/* Right: official App Store badge */}
        <AppStoreBadge size="large" track="home-hero" />
      </motion.div>
    </section>
  );
}
