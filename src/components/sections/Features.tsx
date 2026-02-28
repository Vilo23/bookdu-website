"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "No more chasing payments in your head",
    subtitle: "Your Money \u2014 tracked until it lands.",
    body: "Agency says you\u2019ve got a booking? Log it. It stays in BOOKDU until you tag it paid \u2014 it won\u2019t disappear. If the money\u2019s late, 35 days, 56 days, we\u2019ll remind you. Twice. Weekly summaries every Monday.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Never get stuck in a contract you forgot about",
    subtitle: "Your Contracts \u2014 stored and watched.",
    body: "Upload agency contracts. Set the end date. We\u2019ll remind you 90 days before expiry, on your notice deadline, and the day before it ends. No more auto-renewing into terms you didn\u2019t check.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Know what\u2019s coming before the week starts",
    subtitle: "Your Schedule \u2014 clear and confirmed.",
    body: "Your next 3 days right on the dashboard. Every job on your calendar, colour-coded \u2014 confirmed vs unconfirmed at a glance. If something\u2019s still unconfirmed 3 days out, we\u2019ll nudge you to follow up.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const extras = [
  {
    title: "Tax time? Hand your accountant a CSV.",
    body: "Models focus on shows, bookings, runways \u2014 not spreadsheets. BOOKDU estimates what you might owe so you can set money aside. When tax time comes, export your jobs and expenses as a CSV and you\u2019re done. Works in the US, UK, Australia, New Zealand, France, and Italy.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Locked. Backed up. Yours.",
    body: "BOOKDU locks \u2014 nobody sees your data unless you open the app. Everything stays on your phone by default. If you want a backup so you never lose anything \u2014 even if you break or lose your phone \u2014 we\u2019ve got you. Your data, your rules.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-dash mx-auto mb-6" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-title mb-4"
          >
            Three things you&apos;ll stop worrying about.
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
              <h3 className="text-lg font-bold text-title mb-1 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-sm font-medium text-accent-dark mb-3">
                {pillar.subtitle}
              </p>
              <p className="text-text-muted">{pillar.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Notification mock-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="my-12 max-w-md mx-auto"
        >
          <div className="bg-surface rounded-2xl border border-border p-5 shadow-sm notification-glow">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-title">BOOKDU</p>
                <p className="text-sm text-text-muted mt-0.5">
                  Waiting on $1,200 from Viviens. 35 days.
                </p>
              </div>
              <span className="text-xs text-text-muted mt-0.5 flex-shrink-0">now</span>
            </div>
          </div>
          <p className="text-center text-sm text-text-muted mt-4">
            We noticed. So you don&apos;t have to.
          </p>
        </motion.div>

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
                  <p className="text-text-muted text-sm">{item.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
