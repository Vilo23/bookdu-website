"use client";

import { motion } from "framer-motion";

const cards = [
  {
    label: "Problem 01 // Payments",
    value: "Payments take time. Visibility shouldn\u2019t.",
    desc: "Which agency owes you what. Which payments are weeks overdue. You\u2019re not getting paid on the spot \u2014 it\u2019s weeks, sometimes months. Without a system, money slips through the cracks.",
  },
  {
    label: "Problem 02 // Contracts",
    value: "Contracts get buried in emails and forgotten.",
    desc: "When your contract runs out. Whether it auto-renews into terms you didn\u2019t check. One person, multiple agencies, multiple clients.",
  },
  {
    label: "Problem 03 // Schedule",
    value: "Your schedule is pieced together from texts and memory.",
    desc: "Whether that job next Tuesday is actually confirmed. Shows, castings, fittings \u2014 and somewhere in between, you\u2019re supposed to track it all.",
  },
  {
    label: "Solution // BOOKDU",
    value: "We built BOOKDU so you don\u2019t have to carry any of that.",
    desc: "Then tax time hits and you\u2019re digging through bank statements and email threads trying to piece together a year of work. Not anymore.",
  },
];

export default function Problem() {
  return (
    <section className="py-[10vw] px-[5vw]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[5vw]">
        {/* Left column: section number */}
        <div>
          <div className="section-num">01</div>
        </div>

        {/* Right column: data cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <h2 className="sr-only">The Problems Models Face With Payments and Contracts</h2>
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="data-card"
            >
              <span className="data-label">{card.label}</span>
              <p className="data-card-value">{card.value}</p>
              <p className="data-card-desc">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
