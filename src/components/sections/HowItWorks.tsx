"use client";

import { motion } from "framer-motion";

const moments = [
  {
    time: "When the job comes in",
    title: "Log it",
    description:
      "Agency says you\u2019ve got a booking? Confirmed or not \u2014 add it. Agency, client, rate, date. Takes 30 seconds. Now it\u2019s in BOOKDU, not floating around in your head.",
    example: "Vivians \u2192 Louis Vuitton \u2192 Campaign shoot \u2192 $1,000/day",
  },
  {
    time: "Before the job",
    title: "We remind you",
    description:
      "Your next 3 days on the dashboard. If a job is still unconfirmed and it\u2019s coming up, we\u2019ll nudge you to follow up. When it\u2019s confirmed, you\u2019ll see the work date so nothing catches you off guard.",
    example: "$1,200 with Viviens on Tuesday \u2014 still unconfirmed. Worth a check?",
  },
  {
    time: "After the job",
    title: "We watch the money",
    description:
      "You did the work. Now BOOKDU tracks the payment. It stays there until you tag it paid. If the money\u2019s late \u2014 35 days, 56 days \u2014 we\u2019ll ping you. Twice.",
    example: "Waiting on $1,200 from Viviens. 35 days.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-surface border-y border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Opening story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="section-dash mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-title mb-6">
            Here&apos;s how it works.
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Your agency emails — there&apos;s a campaign shoot next week, not confirmed yet but looking good. You log it in BOOKDU. Three days before,{" "}
            <span className="text-title font-medium">
              BOOKDU nudges you: still unconfirmed, worth a check?
            </span>
          </p>
        </motion.div>

        {/* Three moments with connectors */}
        <div className="relative grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-px bg-border z-0" />

          {moments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center md:text-left relative z-10"
            >
              {/* Step number dot */}
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                </div>
                {/* Time pill */}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent-dark">
                  {moment.time}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-title mb-3">
                {moment.title}
              </h3>

              <p className="text-text-muted mb-4">{moment.description}</p>

              {moment.example && (
                <p className="text-sm text-accent-dark font-medium italic bg-accent/5 rounded-lg px-3 py-2 inline-block">
                  {moment.example}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Closing reassurance */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-lg text-text-muted mt-16"
        >
          From the moment a job comes in to the moment you get paid. BOOKDU watches everything in between.
        </motion.p>
      </div>
    </section>
  );
}
