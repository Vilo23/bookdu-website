import { Metadata } from "next";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";

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

      {/* Privacy Section */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-title mb-4">
                Privacy First
              </h2>
              <p className="text-text-muted mb-6">
                Your financial data is sensitive. That&apos;s why BOOKDU is built with privacy at its core.
                All data stays on your device - no accounts, no cloud sync, no tracking.
              </p>
              <ul className="space-y-3">
                {[
                  "No account required",
                  "100% offline operation",
                  "No data collection or analytics",
                  "Your data never leaves your device",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-text">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-bg rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-title">Complete Privacy</h3>
                  <p className="text-sm text-text-muted">Your data is yours alone</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Data stored on device</span>
                  <span className="font-medium text-accent">100%</span>
                </div>
                <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: "100%" }} />
                </div>
                <p className="text-xs text-text-muted text-center">
                  Zero data sent to external servers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax & Expenses */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-title mb-4">
              Stay on Top of Tax & Expenses
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              As a freelancer, it&apos;s easy to forget about tax until it&apos;s too late. BOOKDU keeps you aware.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Tax Awareness",
                description: "See your potential income tax at a glance (without deductions). Know how much to set aside before tax time.",
              },
              {
                title: "Receipt Capture",
                description: "Upload receipts, take photos, or add them from your camera roll. Keep everything in one place with notes.",
              },
              {
                title: "Easy CSV Export",
                description: "Download a clean CSV of your expenses at the end of the tax year. Give your accountant exactly what they need.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-surface rounded-2xl border border-border p-6 text-center">
                <h3 className="font-semibold text-title mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
