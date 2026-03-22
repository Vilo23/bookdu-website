"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-4 uppercase transition-transform duration-150 active:scale-[0.97]";

  const variants = {
    primary:
      "bg-text text-bg-deep font-[family-name:var(--font-archivo)] px-[clamp(1.5rem,2vw,2.5rem)] py-[clamp(0.75rem,1vw,1.25rem)] hover:scale-[0.98]",
    secondary:
      "border border-text text-text font-[family-name:var(--font-inter)] px-[clamp(1.5rem,2vw,2.5rem)] py-[clamp(0.75rem,1vw,1.25rem)] hover:bg-text/10",
  };

  const combinedStyles = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
