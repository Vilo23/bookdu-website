import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Screenshots - BOOKDU",
  description: "See BOOKDU in action. Screenshots of the payment tracking app for freelancers, creatives, and models.",
};

export default function ScreenshotsLayout({ children }: { children: ReactNode }) {
  return children;
}
