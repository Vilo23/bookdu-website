"use client";

import { motion } from "framer-motion";

const modules = [
  {
    label: "Module // Payments",
    value: "Always know where your money stands.",
    desc: "Agency says you\u2019ve got a booking? Log it. It stays in BOOKDU until you tag it paid. If the money\u2019s late, 35 days, 56 days, we\u2019ll remind you. Twice. Weekly summaries every Monday.",
  },
  {
    label: "Module // Contracts",
    value: "Never get stuck in a contract you forgot about.",
    desc: "Upload agency contracts. Set the end date. We\u2019ll remind you 90 days before expiry, on your notice deadline, and the day before it ends.",
  },
  {
    label: "Module // Schedule",
    value: "Know what\u2019s coming before the week starts.",
    desc: "Your next 3 days right on the dashboard. Every job on your calendar, colour-coded \u2014 confirmed vs unconfirmed at a glance.",
  },
  {
    label: "Module // Tax & Export",
    value: "Tax time? Hand your accountant a CSV.",
    desc: "BOOKDU estimates what you might owe so you can set money aside. Export your jobs and expenses as a CSV. Works in the US, UK, Australia, New Zealand, France, and Italy.",
  },
  {
    label: "Module // Privacy",
    value: "Locked. Backed up. Yours.",
    desc: "BOOKDU locks \u2014 nobody sees your data unless you open the app. Everything stays on your phone by default. If you want a backup, we\u2019ve got you. Your data, your rules.",
  },
];

export default function Features() {
  return (
    <section className="py-[10vw] px-[5vw]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[5vw]">
        {/* Left column: section number */}
        <div>
          <div className="section-num">03</div>
        </div>

        {/* Right column: 2-col grid of data cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <h2 className="sr-only">BOOKDU Features: Payments, Contracts, Schedule, Tax and Privacy</h2>
          {modules.map((mod, index) => (
            <motion.div
              key={mod.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="data-card"
            >
              <span className="data-label">{mod.label}</span>
              <p className="data-card-value">{mod.value}</p>
              <p className="data-card-desc">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
