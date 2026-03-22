import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "border border-border text-text-muted",
    accent: "border border-accent text-accent",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.15em] ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
