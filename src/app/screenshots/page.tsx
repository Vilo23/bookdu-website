"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const screenshots = [
  {
    src: "/screenshots/Home Screen.png",
    alt: "BOOKDU Home Screen",
    title: "Dashboard",
    description: "See what you've earned, what's owed, and what's waiting",
  },
  {
    src: "/screenshots/Home Screen Alert.png",
    alt: "Home Screen with Alert",
    title: "Money waiting",
    description: "Get alerted when payments have been sitting too long",
  },
  {
    src: "/screenshots/Jobs Confirmed list.png",
    alt: "Confirmed Jobs List",
    title: "Confirmed jobs",
    description: "All your confirmed work in one place",
  },
  {
    src: "/screenshots/Waiting on payment.png",
    alt: "Waiting on Payment",
    title: "Waiting on payment",
    description: "Track which jobs are overdue",
  },
  {
    src: "/screenshots/Job entry 1.png",
    alt: "Adding a Job - Step 1",
    title: "Log a job",
    description: "Agency, client, job details — the way you actually work",
  },
  {
    src: "/screenshots/Job entry 2.png",
    alt: "Adding a Job - Step 2",
    title: "Add the rate",
    description: "Day rate, project fee, whatever fits",
  },
  {
    src: "/screenshots/Job Confirmation.png",
    alt: "Job Confirmation",
    title: "Job saved",
    description: "Confirm the details before saving",
  },
  {
    src: "/screenshots/Job mark paid.png",
    alt: "Mark Job as Paid",
    title: "Mark as paid",
    description: "When the money lands, mark it done",
  },
  {
    src: "/screenshots/Payment received.png",
    alt: "Payment Received Celebration",
    title: "Payment received",
    description: "A little celebration when you get paid",
  },
  {
    src: "/screenshots/Job Paid list.png",
    alt: "Paid Jobs List",
    title: "Paid jobs",
    description: "Everything that's been paid out",
  },
  {
    src: "/screenshots/Expenses List.png",
    alt: "Expenses List",
    title: "Expenses",
    description: "Track what you spend",
  },
  {
    src: "/screenshots/Expense Receipt.png",
    alt: "Expense with Receipt",
    title: "Snap receipts",
    description: "Add photos and notes to expenses",
  },
  {
    src: "/screenshots/Job and Expense Export.png",
    alt: "Export Options",
    title: "Export to CSV",
    description: "Jobs or expenses, custom date ranges",
  },
  {
    src: "/screenshots/Settings.png",
    alt: "Settings Screen",
    title: "Settings",
    description: "Customise what you track",
  },
  {
    src: "/screenshots/Country Setting Tax.png",
    alt: "Country and Tax Settings",
    title: "Multi-country tax",
    description: "US, UK, AU, NZ, France, Italy",
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
            See how it works.
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Log jobs, track payments, follow up when things are late. Click any image to enlarge.
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
