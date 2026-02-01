"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedProgressBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-4">
      <div className="flex justify-between text-sm">
        <span className="text-text-muted">Data stored on device</span>
        <motion.span
          className="font-medium text-accent tabular-nums"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          100%
        </motion.span>
      </div>
      <div className="w-full h-2 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: "0%" }}
          animate={isInView ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        />
      </div>
      <p className="text-xs text-text-muted text-center">
        Zero data sent to external servers
      </p>
    </div>
  );
}

export default function FeaturesContent() {
  return (
    <>
      {/* Privacy Section */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-title mb-4">
                Your data stays yours.
              </h2>
              <p className="text-text-muted mb-6">
                No accounts. No cloud. No tracking. Everything lives on your phone
                and nowhere else. We don&apos;t want your data. We don&apos;t collect it.
              </p>
              <ul className="space-y-3">
                {[
                  "No sign-up or account needed",
                  "Works completely offline",
                  "Zero data collection",
                  "Nothing leaves your device",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3 text-text"
                  >
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-bg rounded-2xl p-8 border border-border"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-title">100% Private</h3>
                  <p className="text-sm text-text-muted">No one sees your money but you</p>
                </div>
              </div>
              <AnimatedProgressBar />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tax & Expenses */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-title mb-4"
            >
              Tax and expenses, handled.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-muted max-w-2xl mx-auto"
            >
              Know roughly what you&apos;ll owe. Track what you spend. Export it all when you need it.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Tax estimates",
                description: "See a rough estimate of what you might owe — so you know what to set aside. Works in the US, UK, Australia, New Zealand, France, and Italy.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Expense tracking",
                description: "Log expenses. Snap receipts. Add notes to tag them to specific jobs. Categorise however you want.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "CSV export",
                description: "Export jobs or expenses as a CSV. Pick custom date ranges. Hand it to your accountant and you're done.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-2xl border border-border p-6 text-center group hover:border-accent/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-accent-dark transition-colors duration-300 group-hover:bg-accent/20">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-title mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
