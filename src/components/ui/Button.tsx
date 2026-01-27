"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

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
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 group";

  const variants = {
    primary: "bg-accent text-surface hover:bg-accent-dark shadow-sm hover:shadow-md active:scale-[0.97]",
    secondary: "bg-surface text-title border border-border hover:border-accent hover:text-accent active:scale-[0.97]",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  const inner = (
    <motion.span
      className="inline-flex items-center gap-0"
      whileHover={{ x: 0 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {inner}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedStyles}>
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {inner}
    </button>
  );
}
