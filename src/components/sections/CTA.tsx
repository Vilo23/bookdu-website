"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-surface rounded-3xl border border-border p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Animated background blobs */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{
                x: [0, 40, -20, 0],
                y: [0, -30, 20, 0],
                scale: [1, 1.1, 0.95, 1],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -30, 20, 0],
                y: [0, 20, -30, 0],
                scale: [1, 0.95, 1.1, 1],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
            />
          </div>

          <Badge variant="accent" className="mb-6" shimmer>
            Coming Soon
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold text-title mb-4">
            Ready to simplify your freelance finances?
          </h2>

          <p className="text-lg text-text-muted mb-8 max-w-xl mx-auto">
            BOOKDU is launching soon on the App Store. Built with privacy in mind,
            designed for freelancers, creatives, and models.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/features">
              Learn More
              <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href="/about" variant="secondary">
              Our Story
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
