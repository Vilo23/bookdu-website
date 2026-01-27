import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent";
  shimmer?: boolean;
  className?: string;
}

export default function Badge({ children, variant = "default", shimmer = false, className = "" }: BadgeProps) {
  const variants = {
    default: "bg-surface text-text-muted border border-border",
    accent: "bg-accent/10 text-accent-dark border border-accent/20",
  };

  return (
    <span
      className={`relative inline-flex items-center px-4 py-2 rounded-full text-sm font-medium overflow-hidden ${variants[variant]} ${className}`}
    >
      {shimmer && (
        <span className="absolute inset-0 -translate-x-full animate-[shimmer_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}
      {children}
    </span>
  );
}
