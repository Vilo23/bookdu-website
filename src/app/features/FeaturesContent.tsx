"use client";

import { motion } from "framer-motion";

const pillarDetails = [
  {
    label: "Pillar 01 // Get Paid",
    title: "Get Paid",
    body: [
      "Got a booking? Log it \u2014 agency, client, rate, date. It stays in BOOKDU until you tag it paid. No disappearing, no forgetting.",
      "When payments are late, we remind you:",
    ],
    bullets: [
      "35 days: \u2018Waiting on $1,200 from Viviens. 35 days.\u2019",
      "56 days: \u2018$1,200 from Viviens. 56 days.\u2019",
    ],
    footer:
      "Two reminders. Enough to prompt a follow-up, not enough to nag.",
  },
  {
    label: "Pillar 02 // Guard Contracts",
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
  },
  {
    label: "Pillar 03 // See Your Schedule",
    title: "See Your Schedule",
    body: [
      "Your next 3 days on the dashboard. Every job on your calendar. Week view or month view.",
    ],
    bullets: [
      "Confirmed jobs: one colour",
      "Unconfirmed jobs: different colour",
      "Multi-day shoots: shown clearly",
    ],
    footer:
      "If a job is unconfirmed 3 days before: \u2018$1,200 with Viviens on Tuesday \u2014 still unconfirmed. Worth a check?\u2019",
  },
];

const reminders = [
  {
    trigger: "Payment overdue (35 days)",
    example:
      "\u2018Waiting on $1,200 from Viviens. 35 days.\u2019",
  },
  {
    trigger: "Payment still overdue (56 days)",
    example: "\u2018$1,200 from Viviens. 56 days.\u2019",
  },
  {
    trigger: "Contract expiring (90 days)",
    example:
      "\u2018Viviens contract ends in 90 days. Worth a review?\u2019",
  },
  {
    trigger: "Notice deadline",
    example:
      "\u2018Last day to give notice to Viviens \u2014 if you\u2019re thinking of leaving.\u2019",
  },
  {
    trigger: "Job unconfirmed (3 days before)",
    example:
      "\u2018$1,200 with Viviens on Tuesday \u2014 still unconfirmed. Worth a check?\u2019",
  },
  {
    trigger: "Payment cleared",
    example:
      "\u2018Nice \u2014 $1,200 from Viviens cleared.\u2019",
  },
  {
    trigger: "Weekly summary (Mondays)",
    example:
      "\u2018You\u2019re owed $4,200 across 3 jobs. Oldest: 52 days.\u2019",
  },
];

const taxExpenses = [
  {
    label: "Module // Tax Estimates",
    title: "Tax estimates",
    description:
      "See roughly what you might owe so you can set money aside during the year. No surprises in April. Works in the US, UK, Australia, New Zealand, France, and Italy.",
  },
  {
    label: "Module // Expense Tracking",
    title: "Expense tracking",
    description:
      "Log expenses. Snap receipts. Tag to specific jobs if you want. Search and filter when you need to find something.",
  },
  {
    label: "Module // CSV Export",
    title: "CSV export",
    description:
      "Export paid jobs or expenses as a CSV. Custom date ranges. Hand it to your accountant and you\u2019re done.",
  },
];

export default function FeaturesContent() {
  return (
    <>
      {/* ── Three Pillars Section ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="data-label"
            >
              System // Overview
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-text"
            >
              The Three Pillars
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-text-muted max-w-2xl"
            >
              Everything a model needs to stay on top of work — without the
              mental load.
            </motion.p>
          </div>

          <div className="space-y-16">
            {pillarDetails.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="data-card"
              >
                <span className="data-label">{pillar.label}</span>
                <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-text mb-6">
                  {pillar.title}
                </h3>
                <div className="max-w-3xl space-y-4">
                  {pillar.body.map((paragraph, i) => (
                    <p key={i} className="data-card-desc">
                      {paragraph}
                    </p>
                  ))}
                  <ul className="space-y-2 pt-2">
                    {pillar.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="font-mono text-sm text-text-muted flex items-start gap-3"
                      >
                        <span className="text-accent select-none shrink-0">
                          --
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-text-muted italic pt-2">
                    {pillar.footer}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Privacy Section ── */}
      <section className="py-24 md:py-32 bg-bg-deep">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="data-card"
          >
            <span className="data-label">Module // Privacy</span>
            <h2 className="data-card-value text-2xl md:text-3xl font-display uppercase tracking-tight text-text mb-6">
              Locked. Backed up. Yours.
            </h2>
            <div className="max-w-3xl">
              <p className="data-card-desc mb-8">
                BOOKDU locks so nobody can open it and look at your data.
                Everything stays on your phone by default. If you want a secure
                backup — so you can restore everything if you lose or break your
                phone — just sign in. Nothing leaves your device unless you
                choose it.
              </p>
              <ul className="space-y-4">
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
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className="flex items-start gap-3 text-text"
                  >
                    <span className="text-accent select-none shrink-0 font-mono text-sm leading-relaxed">
                      —
                    </span>
                    <span className="text-text-muted leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Smart Reminders ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="data-label"
            >
              System // Notifications
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-text"
            >
              Reminders That Actually Help
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-text-muted max-w-2xl"
            >
              We ping you at the right moment. No spam. No nagging.
            </motion.p>
          </div>

          <div className="space-y-0">
            {reminders.map((reminder, i) => (
              <motion.div
                key={reminder.trigger}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="data-card py-6"
              >
                <span className="data-label mb-2">{reminder.trigger}</span>
                <p className="data-card-value">{reminder.example}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tax & Expenses ── */}
      <section className="py-24 md:py-32 bg-bg-deep">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="data-label"
            >
              System // Finances
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-text"
            >
              Tax And Expenses
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-text-muted max-w-2xl"
            >
              You&apos;re focused on shows and bookings — not spreadsheets. If
              you log as you go, tax time is just an export.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {taxExpenses.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="data-card"
              >
                <span className="data-label">{item.label}</span>
                <h3 className="data-card-value font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="data-card-desc">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
