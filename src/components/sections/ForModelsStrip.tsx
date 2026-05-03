"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    href: "/payment-tracker",
    label: "Model Payment Tracker",
    tag: "Surface // Payments",
    desc: "Track every job across every agency. Know what's owed, what's overdue, and what's hit your account.",
  },
  {
    href: "/expense-tracker",
    label: "Expense Tracker",
    tag: "Surface // Expenses",
    desc: "Tax-ready categories built for models — agency fees, test shoots, travel, hair, gym. Receipts and CSV export.",
  },
  {
    href: "/tax-and-expenses",
    label: "Tax & Expenses",
    tag: "Surface // Tax",
    desc: "What fashion models can claim on tax across AU, US and UK — paired with the tracker that captures it.",
  },
];

export default function ForModelsStrip() {
  return (
    <section className="py-[10vw] px-[5vw]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[5vw]">
        {/* Left column: section number + label */}
        <div>
          <div className="section-num">03</div>
          <span className="data-label mt-6 block">For Models</span>
        </div>

        {/* Right column: 3-card strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <h2 className="sr-only">For Models — Payment Tracker, Expense Tracker, Tax &amp; Expenses</h2>
          {cards.map((card, index) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={card.href}
                className="data-card block group focus:outline-none focus-visible:ring-2 focus-visible:ring-text/40 focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
              >
                <span className="data-label">{card.tag}</span>
                <p className="data-card-value">
                  <span className="border-b border-transparent group-hover:border-text transition-colors duration-200">
                    {card.label}
                  </span>
                  <span aria-hidden="true" className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </p>
                <p className="data-card-desc">{card.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
