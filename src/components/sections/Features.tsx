"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Your Money",
    subtitle: "Track payments. Get reminded. Get paid.",
    body: "Log every job. See what\u2019s outstanding. When payments hit 35 days, 56 days \u2014 we ping you. No more money slipping through the cracks.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Your Contracts",
    subtitle: "Store them. Track expiry. Never get locked in.",
    body: "Upload agency contracts. Set the end date. We\u2019ll remind you 90 days before expiry \u2014 enough time to renegotiate or walk away on your terms.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Your Schedule",
    subtitle: "See your week. Know what\u2019s confirmed.",
    body: "Every job appears on your calendar. Confirmed vs unconfirmed, colour-coded. If something\u2019s unconfirmed 3 days out, we\u2019ll nudge you to check.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const extras = [
  {
    title: "Expenses & Tax",
    body: "Track spending. Snap receipts. Export to CSV. See your estimated tax. Tax time sorted.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "100% Private",
    body: "No accounts. No cloud. Everything on your phone. We don\u2019t want your data.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-title mb-4"
          >
            Three things protected.
          </motion.h2>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface rounded-2xl border border-border p-6 md:p-8 group hover:border-accent/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 text-accent-dark transition-colors duration-300 group-hover:bg-accent/20">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-title mb-1">
                {pillar.title}
              </h3>
              <p className="text-sm font-medium text-accent-dark mb-3">
                {pillar.subtitle}
              </p>
              <p className="text-text-muted">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Extras Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {extras.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-surface rounded-2xl border border-border p-6 group hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent-dark transition-colors duration-300 group-hover:bg-accent/20">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-title mb-1">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm">
                    {item.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
