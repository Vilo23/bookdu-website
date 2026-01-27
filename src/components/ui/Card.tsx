"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" } : undefined}
      className={`bg-surface rounded-2xl border border-border p-6 transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
}
