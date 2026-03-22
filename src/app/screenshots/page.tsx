"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const screenshots = [
  {
    src: "/screenshots/Home Screen.png",
    alt: "BOOKDU app home screen showing payment tracking dashboard for models",
    title: "Dashboard",
    description: "Money owed, upcoming jobs, and alerts — one screen",
    category: "Dashboard & Overview",
  },
  {
    src: "/screenshots/Home Screen Dash Calendar.png",
    alt: "BOOKDU dashboard with calendar view showing modeling jobs and payments",
    title: "Dashboard & Calendar",
    description: "Your dashboard with calendar view — jobs and payments at a glance",
    category: "Dashboard & Overview",
  },
  {
    src: "/screenshots/Calendar Month View.png",
    alt: "BOOKDU calendar month view showing confirmed and unconfirmed modeling jobs",
    title: "Calendar",
    description: "Your jobs on a calendar — confirmed vs unconfirmed at a glance",
    category: "Dashboard & Overview",
  },
  {
    src: "/screenshots/Contracts list.png",
    alt: "BOOKDU contract management screen showing stored modeling agency contracts with expiry dates",
    title: "Contracts",
    description: "All your agency contracts with expiry countdowns",
    category: "Dashboard & Overview",
  },
  {
    src: "/screenshots/Home Screen Alert.png",
    alt: "BOOKDU payment alert notification when agency payments are overdue",
    title: "Money waiting",
    description: "Get alerted when payments have been waiting too long",
    category: "Payment Tracking",
  },
  {
    src: "/screenshots/Jobs Confirmed list.png",
    alt: "BOOKDU confirmed jobs list showing upcoming modeling work",
    title: "Confirmed jobs",
    description: "All your confirmed work in one place",
    category: "Job Management",
  },
  {
    src: "/screenshots/Waiting on payment.png",
    alt: "BOOKDU overdue payment tracking screen showing jobs waiting for agency payment",
    title: "Waiting on payment",
    description: "Track which jobs are overdue",
    category: "Payment Tracking",
  },
  {
    src: "/screenshots/Job entry 1.png",
    alt: "BOOKDU job logging form with agency, client, and job details for models",
    title: "Log a job",
    description: "Agency, client, job details — the way you actually work",
    category: "Job Management",
  },
  {
    src: "/screenshots/Job entry 2.png",
    alt: "BOOKDU rate entry screen for day rate or project fee for modeling jobs",
    title: "Add the rate",
    description: "Day rate, project fee, whatever fits",
    category: "Job Management",
  },
  {
    src: "/screenshots/Job Confirmation.png",
    alt: "BOOKDU job confirmation screen showing job details before saving",
    title: "Job saved",
    description: "Confirm the details before saving",
    category: "Job Management",
  },
  {
    src: "/screenshots/Job mark paid.png",
    alt: "BOOKDU mark as paid screen for recording received agency payments",
    title: "Mark as paid",
    description: "When the money lands, mark it done",
    category: "Payment Tracking",
  },
  {
    src: "/screenshots/Payment received.png",
    alt: "BOOKDU payment received celebration screen for models",
    title: "Payment received",
    description: "A little celebration when you get paid",
    category: "Payment Tracking",
  },
  {
    src: "/screenshots/Job Paid list.png",
    alt: "BOOKDU paid jobs list showing completed payments from modeling agencies",
    title: "Paid jobs",
    description: "Everything that's been paid out",
    category: "Payment Tracking",
  },
  {
    src: "/screenshots/Expenses List.png",
    alt: "BOOKDU expense tracking list for modeling work deductions",
    title: "Expenses",
    description: "Track what you spend",
    category: "Expenses & Tax",
  },
  {
    src: "/screenshots/Expense Receipt.png",
    alt: "BOOKDU expense receipt capture with photo and notes for tax records",
    title: "Snap receipts",
    description: "Add photos and notes to expenses",
    category: "Expenses & Tax",
  },
  {
    src: "/screenshots/Job and Expense Export.png",
    alt: "BOOKDU CSV export screen for jobs and expenses with custom date ranges",
    title: "Export to CSV",
    description: "Jobs or expenses, custom date ranges",
    category: "Expenses & Tax",
  },
  {
    src: "/screenshots/Settings.png",
    alt: "BOOKDU app settings screen for customising tracking preferences",
    title: "Settings",
    description: "Customise what you track",
    category: "Settings",
  },
  {
    src: "/screenshots/Country Setting Tax.png",
    alt: "BOOKDU multi-country tax settings supporting US, UK, Australia, NZ, France, and Italy",
    title: "Multi-country tax",
    description: "US, UK, AU, NZ, France, Italy",
    category: "Expenses & Tax",
  },
];

export default function ScreenshotsPage() {
  const [selectedImage, setSelectedImage] = useState<typeof screenshots[0] | null>(null);

  const closeModal = useCallback(() => setSelectedImage(null), []);

  // Escape key handler for lightbox
  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, closeModal]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-text uppercase tracking-tight leading-none">
            SEE BOOKDU IN ACTION
          </h1>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.15em] text-text-muted mt-6 max-w-xl mx-auto">
            App screenshots of payment tracking, contract management, scheduling, and tax tools for models. Click any image to enlarge.
          </p>
        </div>
      </section>

      {/* Screenshot Grid — grouped by category */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(
            screenshots.reduce<Record<string, typeof screenshots>>((groups, screenshot) => {
              const cat = screenshot.category;
              if (!groups[cat]) groups[cat] = [];
              groups[cat].push(screenshot);
              return groups;
            }, {})
          ).map(([category, items]) => (
            <div key={category} className="mb-16 last:mb-0">
              <span className="data-label">{category}</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((screenshot, index) => (
                  <motion.div
                    key={screenshot.src}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(screenshot)}
                  >
                    <div className="bg-bg-deep border border-border p-3 transition-colors duration-300 group-hover:border-accent-dark">
                      <div className="relative aspect-[9/19] overflow-hidden bg-surface">
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                      <div className="mt-3">
                        <h3 className="text-text font-medium text-sm leading-snug">
                          {screenshot.title}
                        </h3>
                        <p className="text-text-muted text-sm mt-0.5 leading-snug">
                          {screenshot.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-deep/90 backdrop-blur-md"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-sm w-full bg-surface p-3"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                aria-label="Close image"
                className="absolute -top-10 right-0 text-text-muted hover:text-text transition-colors z-10"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative aspect-[9/19] overflow-hidden bg-bg-deep">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                  sizes="400px"
                  priority
                />
              </div>

              {/* Text */}
              <div className="mt-3">
                <h3 className="text-text font-medium text-sm">
                  {selectedImage.title}
                </h3>
                <p className="text-text-muted text-sm mt-0.5">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
