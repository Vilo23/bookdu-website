"use client";

import Image from "next/image";
import { EXTERNAL_LINKS } from "@/lib/constants";

const SIZES = {
  small: { w: 120, h: 40 },
  medium: { w: 156, h: 52 },
  large: { w: 200, h: 67 },
} as const;

type Size = keyof typeof SIZES;

interface Props {
  size?: Size;
  track?: string;
  className?: string;
}

export function AppStoreBadge({ size = "medium", track, className = "" }: Props) {
  const { w, h } = SIZES[size];
  const href = track
    ? `${EXTERNAL_LINKS.appStore}?cta=${encodeURIComponent(track)}`
    : EXTERNAL_LINKS.appStore;

  const onClick = () => {
    if (!track) return;
    window.posthog?.capture?.("app_store_click", {
      cta: track,
      href,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label="Download BOOKDU on the App Store"
      data-cta={track}
      className={`inline-block transition-opacity duration-150 hover:opacity-85 active:opacity-70 ${className}`}
    >
      <Image
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        width={w}
        height={h}
        priority={false}
        unoptimized
      />
    </a>
  );
}
