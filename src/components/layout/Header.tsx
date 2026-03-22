"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:hidden">
      <div className="flex items-center justify-between px-5 py-4">
        {/* Logo — mobile only */}
        <Link
          href="/"
          className="font-[family-name:var(--font-archivo)] text-text text-2xl tracking-tight"
          onClick={closeMenu}
        >
          BOOKDU
        </Link>

        {/* Hamburger — mobile only */}
        <button
          className="p-2 -mr-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6 text-text"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu — Full-screen overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-14 z-40 bg-bg/95 backdrop-blur-lg">
          <nav className="flex flex-col items-start justify-center h-full px-8 gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-[family-name:var(--font-archivo)] text-[clamp(2rem,6vw,3.5rem)] leading-tight transition-opacity duration-200 ${
                    isActive
                      ? "text-text opacity-100"
                      : "text-text-muted opacity-70 hover:text-text hover:opacity-100"
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
