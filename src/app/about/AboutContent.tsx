"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function AboutContent() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-title mb-4"
          >
            Why we built this.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-muted max-w-2xl mx-auto"
          >
            Built for how you actually work.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">The problem</h2>
              <p className="text-text-muted mb-4">
                You work through agencies. They book you for clients. You do the job.
                Then you wait. And wait. Sometimes weeks. Sometimes months.
              </p>
              <p className="text-text-muted mb-4">
                Meanwhile, you&apos;ve done ten more jobs. Different agencies. Different clients.
                Different rates. Some have paid. Some haven&apos;t. You&apos;re not really sure anymore.
              </p>
              <p className="text-text-muted">
                And chasing feels awkward. So some payments just... get forgotten.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">The fix</h2>
              <p className="text-text-muted mb-4">
                BOOKDU is built for exactly this. Log your jobs the way they actually work —
                agency, client, job, rate. See what&apos;s outstanding. Get reminded when
                something&apos;s been sitting too long.
              </p>
              <p className="text-text-muted">
                No bloat. No subscriptions. No accounts. Just a clean app that keeps track
                so you don&apos;t have to.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">Who it&apos;s for</h2>
              <p className="text-text-muted mb-4">
                Models, talent, influencers, creatives — anyone who:
              </p>
              <ul className="space-y-3">
                {[
                  "Works through agencies (one or several)",
                  "Gets paid weeks or months after the job",
                  "Juggles multiple clients and rates at once",
                  "Needs to track what's paid and what's still outstanding",
                  "Wants to keep their financial data private",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 text-text-muted"
                  >
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">Tax? Sorted.</h2>
              <p className="text-text-muted mb-4">
                Easy to forget you need to set money aside for tax when it&apos;s not
                deducted automatically. BOOKDU shows you a rough estimate of what you
                might owe — so you&apos;re not caught off guard at the end of the year.
              </p>
              <p className="text-text-muted">
                Works in the US, UK, Australia, New Zealand, France, and Italy.
                We handle the different tax years and brackets for each country.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">Expenses too.</h2>
              <p className="text-text-muted mb-4">
                Track what you spend. Tag it to specific jobs in the notes if you want.
                Snap photos of receipts. Add categories.
              </p>
              <p className="text-text-muted">
                When tax time comes, export everything as a CSV — jobs or expenses,
                custom date ranges, whatever you need. Hand it to your accountant and
                you&apos;re done.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">Your data stays yours.</h2>
              <p className="text-text-muted">
                Everything lives on your phone. No accounts. No cloud. No tracking.
                No one sees your money but you. That&apos;s it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            {...fadeUp}
            className="text-3xl font-bold text-title text-center mb-12"
          >
            What we believe.
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Keep it simple",
                description: "One job: help you track payments. No feature creep. No complexity for the sake of it.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: "Respect privacy",
                description: "Your financial data is yours. We don't want it. We don't collect it. End of story.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: "Be honest",
                description: "No dark patterns. No manipulation. No surprise charges. Just software that does what it says.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-accent-dark transition-colors duration-300 group-hover:bg-accent/20">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-title mb-2">{value.title}</h3>
                <p className="text-text-muted text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
