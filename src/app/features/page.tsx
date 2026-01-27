import { Metadata } from "next";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import FeaturesContent from "./FeaturesContent";

export const metadata: Metadata = {
  title: "Features - BOOKDU",
  description: "Discover all the features that make BOOKDU the perfect payment tracking app for freelancers, creatives, and models.",
};

export default function FeaturesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-title mb-4">
            Features
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Everything you need to track payments, manage expenses, and stay on top of your freelance finances.
          </p>
        </div>
      </section>

      {/* All Features */}
      <Features
        showAll={true}
        title="Built for Freelancers & Creatives"
        subtitle="Simple, powerful tools that respect your privacy"
      />

      {/* Privacy + Tax sections with animations */}
      <FeaturesContent />

      <CTA />
    </>
  );
}
