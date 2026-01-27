"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const screenshots = [
  {
    src: "/screenshots/homescreen.png",
    alt: "BOOKDU Home Screen",
    title: "Dashboard",
    description: "See your financial overview at a glance",
  },
  {
    src: "/screenshots/jobs-list.png",
    alt: "Jobs List View",
    title: "Jobs List",
    description: "All your jobs in one organised view",
  },
  {
    src: "/screenshots/job-detail.png",
    alt: "Job Detail View",
    title: "Job Details",
    description: "Track every detail of each job",
  },
  {
    src: "/screenshots/payslip-scan.png",
    alt: "Payslip Scanning",
    title: "Smart OCR",
    description: "Scan payslips with your camera",
  },
  {
    src: "/screenshots/expenses.png",
    alt: "Expense Tracking",
    title: "Expenses",
    description: "Track business expenses easily",
  },
  {
    src: "/screenshots/reports.png",
    alt: "Reports View",
    title: "Reports",
    description: "Export-ready financial reports",
  },
];

export default function ScreenshotsPage() {
  const [selectedImage, setSelectedImage] = useState<typeof screenshots[0] | null>(null);

  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-title mb-4">
            Screenshots
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Take a look at BOOKDU in action. Clean design, powerful features.
          </p>
        </div>
      </section>

      {/* Screenshot Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(screenshot)}
              >
                <div className="bg-surface rounded-2xl border border-border p-4 transition-all duration-300 group-hover:shadow-lg group-hover:border-accent/30">
                  <div className="relative aspect-[9/19] rounded-xl overflow-hidden bg-bg mb-4">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="font-semibold text-title mb-1">{screenshot.title}</h3>
                  <p className="text-sm text-text-muted">{screenshot.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Placeholder message */}
          <div className="mt-12 text-center">
            <p className="text-text-muted text-sm">
              Screenshots shown are from the development version. Final design may vary.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-sm w-full bg-surface rounded-2xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-surface hover:text-accent transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative aspect-[9/19] rounded-xl overflow-hidden bg-bg">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-title">{selectedImage.title}</h3>
                <p className="text-sm text-text-muted">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
