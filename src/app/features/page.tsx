import { Metadata } from "next";
import CTA from "@/components/sections/CTA";
import FeaturesContent from "./FeaturesContent";

export const metadata: Metadata = {
  title: "Features - BOOKDU",
  description: "Payments tracked. Contracts guarded. Calendar organised. Tax sorted. All on your phone.",
};

export default function FeaturesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-title mb-4">
            One app. Everything protected.
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Payments tracked. Contracts guarded. Calendar organised. Tax sorted. All on your phone.
          </p>
        </div>
      </section>

      {/* All feature sections */}
      <FeaturesContent />

      <CTA />
    </>
  );
}
