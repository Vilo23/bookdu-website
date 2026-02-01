import { Metadata } from "next";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import FeaturesContent from "./FeaturesContent";

export const metadata: Metadata = {
  title: "Features - BOOKDU",
  description: "Track jobs, know who owes you, get reminded when payments are late. Built for models and talent who work through agencies.",
};

export default function FeaturesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-title mb-4">
            Built for how you actually get paid.
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Track jobs. Track expenses. Know what you&apos;re owed. Get reminded. Export everything.
          </p>
        </div>
      </section>

      {/* All Features */}
      <Features
        showAll={true}
        title="The basics."
        subtitle="Everything works offline. Your data stays on your phone."
      />

      {/* Privacy + Tax sections with animations */}
      <FeaturesContent />

      <CTA />
    </>
  );
}
