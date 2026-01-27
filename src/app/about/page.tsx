import { Metadata } from "next";
import CTA from "@/components/sections/CTA";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About - BOOKDU",
  description: "Learn the story behind BOOKDU and why we built a privacy-first payment tracking app for freelancers, creatives, and models.",
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <CTA />
    </>
  );
}
