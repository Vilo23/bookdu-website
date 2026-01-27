import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-surface text-text-muted border border-border",
    accent: "bg-accent/10 text-accent-dark border border-accent/20",
  };

  return (
    <span
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
