"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Log it",
    description:
      "Finished a job? Add it. Agency, client, what you did, what you're getting paid. Takes 30 seconds.",
    example: "Vivians → Louis Vuitton → Campaign shoot → $1,000/day",
  },
  {
    number: "2",
    title: "See what's owed",
    description:
      "All your unpaid jobs in one place. How much. How long it's been. No guessing.",
    example: "$5,000 across 2 jobs. Oldest: 62 days.",
  },
  {
    number: "3",
    title: "Get nudged",
    description:
      "We'll remind you when something's been sitting too long. You follow up. You get paid.",
    example: null,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-title mb-4">
            Dead simple.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent-dark font-semibold mb-4">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-title mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted mb-4">{step.description}</p>

              {/* Example */}
              {step.example && (
                <p className="text-sm text-accent-dark font-medium italic">
                  {step.example}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-lg text-text-muted mt-16"
        >
          You focus on work. We&apos;ll watch the money.
        </motion.p>
      </div>
    </section>
  );
}
