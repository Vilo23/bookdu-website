"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Hero() {
  const pathname = usePathname();

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
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-[family-name:var(--font-archivo)] text-[clamp(3rem,10vw,12rem)] uppercase leading-[0.9] text-center text-text mix-blend-difference"
        >
          You Did
          <br />
          The Work
          <span className="sr-only"> — Finance Tracking App for Models</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 font-[family-name:var(--font-jetbrains)] text-[clamp(0.65rem,0.9vw,0.9rem)] uppercase tracking-[0.2em] text-text-muted text-center"
        >
          Finance tracking for the fashion industry
        </motion.p>
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

        {/* Right: download button */}
        <a
          href="https://apps.apple.com/us/app/bookdu/id6757381396"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-text text-bg-deep font-[family-name:var(--font-archivo)] uppercase px-[clamp(1.5rem,2vw,2.5rem)] py-[clamp(0.75rem,1vw,1.25rem)] hover:scale-[0.98] transition-transform duration-150 active:scale-[0.97]"
        >
          Download BOOKDU
          <span aria-hidden="true">&#8599;</span>
        </a>
      </motion.div>
    </section>
  );
}
