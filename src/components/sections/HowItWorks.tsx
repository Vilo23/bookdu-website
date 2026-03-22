"use client";

import { motion } from "framer-motion";

const steps = [
  {
    label: "Step 01 // Log It",
    value: "Agency says you\u2019ve got a booking? Log it.",
    desc: "Agency, client, rate, date. Takes 30 seconds. Now it\u2019s in BOOKDU, not floating around in your head.",
  },
  {
    label: "Step 02 // We Remind You",
    value: "Your next 3 days on the dashboard.",
    desc: "If a job is still unconfirmed and it\u2019s coming up, we\u2019ll nudge you to follow up. When it\u2019s confirmed, you\u2019ll see the work date so nothing catches you off guard.",
  },
  {
    label: "Step 03 // We Watch The Money",
    value: "You did the work. Now BOOKDU tracks the payment.",
    desc: "It stays there until you tag it paid. If the money\u2019s late \u2014 35 days, 56 days \u2014 we\u2019ll ping you. Twice.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-[10vw] px-[5vw] bg-bg-deep"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[5vw]">
        {/* Left column: section number */}
        <div>
          <div className="section-num">02</div>
        </div>

        {/* Right column: stacked data cards */}
        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="data-card"
            >
              <span className="data-label">{step.label}</span>
              <p className="data-card-value">{step.value}</p>
              <p className="data-card-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
