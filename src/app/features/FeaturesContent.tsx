"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedProgressBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-4">
      <div className="flex justify-between text-sm">
        <span className="text-text-muted">Data stored on your device</span>
        <motion.span
          className="font-medium text-accent tabular-nums"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          by default
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
        Nothing leaves your phone unless you choose to back it up
      </p>
    </div>
  );
}

const pillarDetails = [
  {
    title: "Get Paid",
    body: [
      "Got a booking? Log it \u2014 agency, client, rate, date. It stays in BOOKDU until you tag it paid. No disappearing, no forgetting.",
      "When payments are late, we remind you:",
    ],
    bullets: [
      "35 days: \u2018Waiting on $1,200 from Viviens. 35 days.\u2019",
      "56 days: \u2018$1,200 from Viviens. 56 days.\u2019",
    ],
    footer: "Two reminders. Enough to prompt a follow-up, not enough to nag.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Guard Contracts",
    body: [
      "Agency contracts get buried in emails and forgotten. Until it\u2019s too late and you\u2019re auto-renewed into terms you didn\u2019t check.",
      "Store contracts in BOOKDU. Upload the PDF. Set start and end dates. We remind you:",
    ],
    bullets: [
      "90 days before expiry",
      "On your notice deadline",
      "Day before it ends",
    ],
    footer: "Enough time to renegotiate or walk away on your terms.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "See Your Schedule",
    body: [
      "Your next 3 days on the dashboard. Every job on your calendar. Week view or month view.",
    ],
    bullets: [
      "Confirmed jobs: one colour",
      "Unconfirmed jobs: different colour",
      "Multi-day shoots: shown clearly",
    ],
    footer: "If a job is unconfirmed 3 days before: \u2018$1,200 with Viviens on Tuesday \u2014 still unconfirmed. Worth a check?\u2019",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const reminders = [
  {
    trigger: "Payment overdue (35 days)",
    example: "\u2018Waiting on $1,200 from Viviens. 35 days.\u2019",
  },
  {
    trigger: "Payment still overdue (56 days)",
    example: "\u2018$1,200 from Viviens. 56 days.\u2019",
  },
  {
    trigger: "Contract expiring (90 days)",
    example: "\u2018Viviens contract ends in 90 days. Worth a review?\u2019",
  },
  {
    trigger: "Notice deadline",
    example: "\u2018Last day to give notice to Viviens \u2014 if you\u2019re thinking of leaving.\u2019",
  },
  {
    trigger: "Job unconfirmed (3 days before)",
    example: "\u2018$1,200 with Viviens on Tuesday \u2014 still unconfirmed. Worth a check?\u2019",
  },
  {
    trigger: "Payment cleared",
    example: "\u2018Nice \u2014 $1,200 from Viviens cleared.\u2019",
  },
  {
    trigger: "Weekly summary (Mondays)",
    example: "\u2018You\u2019re owed $4,200 across 3 jobs. Oldest: 52 days.\u2019",
  },
];

export default function FeaturesContent() {
  return (
    <>
      {/* Three Pillars Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-title mb-4"
            >
              The three pillars.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-muted max-w-2xl mx-auto"
            >
              Everything a model needs to stay on top of work — without the mental load.
            </motion.p>
          </div>

          <div className="space-y-6">
            {pillarDetails.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface rounded-2xl border border-border p-8 group hover:border-accent/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent-dark transition-colors duration-300 group-hover:bg-accent/20">
                    {pillar.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-title mb-3">
                      {pillar.title}
                    </h3>
                    {pillar.body.map((paragraph, i) => (
                      <p key={i} className="text-text-muted mb-3">
                        {paragraph}
                      </p>
                    ))}
                    <ul className="space-y-2 mb-3 ml-1">
                      {pillar.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-text-muted text-sm">
                          <span className="text-accent mt-1.5 flex-shrink-0">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="3" />
                            </svg>
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <p className="text-text-muted text-sm italic">
                      {pillar.footer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section — updated for lock + backup */}
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
                Locked. Backed up. Yours.
              </h2>
              <p className="text-text-muted mb-6">
                BOOKDU locks so nobody can open it and look at your data. Everything stays on your
                phone by default. If you want a secure backup — so you can restore everything if
                you lose or break your phone — just sign in. Nothing leaves your device unless
                you choose it.
              </p>
              <ul className="space-y-3">
                {[
                  "App locks \u2014 your finances are private",
                  "Data stored on your phone by default",
                  "Optional cloud backup for peace of mind",
                  "Restore your data on a new device",
                  "We don\u2019t sell or share your data. Ever.",
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-title">Private by default</h3>
                  <p className="text-sm text-text-muted">Backed up when you choose</p>
                </div>
              </div>
              <AnimatedProgressBar />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smart Reminders */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-title mb-4"
            >
              Reminders that actually help.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-muted max-w-2xl mx-auto"
            >
              We ping you at the right moment. No spam. No nagging.
            </motion.p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {reminders.map((reminder, i) => (
              <motion.div
                key={reminder.trigger}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-surface rounded-xl border border-border p-5 hover:border-accent/30 transition-colors duration-300"
              >
                <p className="text-sm font-medium text-title mb-1">
                  {reminder.trigger}
                </p>
                <p className="text-text-muted text-sm">
                  {reminder.example}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax & Expenses */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-title mb-4"
            >
              Tax and expenses. Done before you think about it.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-muted max-w-2xl mx-auto"
            >
              You&apos;re focused on shows and bookings — not spreadsheets.
              If you log as you go, tax time is just an export.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Tax estimates",
                description: "See roughly what you might owe so you can set money aside during the year. No surprises in April. Works in the US, UK, Australia, New Zealand, France, and Italy.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Expense tracking",
                description: "Log expenses. Snap receipts. Tag to specific jobs if you want. Search and filter when you need to find something.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "CSV export",
                description: "Export paid jobs or expenses as a CSV. Custom date ranges. Hand it to your accountant and you\u2019re done.",
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
                className="bg-bg rounded-2xl border border-border p-6 text-center group hover:border-accent/30 transition-colors duration-300"
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
