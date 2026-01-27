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
            About BOOKDU
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-muted max-w-2xl mx-auto"
          >
            The story behind the app and why we built it.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">The Problem</h2>
              <p className="text-text-muted mb-4">
                Freelancers, creatives, and models live fast-moving lives. You might have several agencies or recruiters
                on your books, juggling multiple jobs at the same time. The gap between finishing a job and actually getting
                paid can be weeks or even months.
              </p>
              <p className="text-text-muted">
                When you&apos;re constantly moving between gigs, it&apos;s hard to remember what&apos;s been paid and
                what&apos;s still outstanding. Payments slip through the cracks. Money you&apos;re owed gets forgotten.
                And when tax time rolls around, the last thing you want is a surprise.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">The Solution</h2>
              <p className="text-text-muted mb-4">
                BOOKDU was built to solve exactly this. It&apos;s a simple, focused app that helps you track your jobs,
                follow up on outstanding payments, and make sure you get paid for every piece of work you do.
              </p>
              <p className="text-text-muted">
                No bloat, no subscriptions, no data harvesting. Just a clean tool that keeps you on top of your money.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">Who It&apos;s For</h2>
              <p className="text-text-muted mb-4">
                BOOKDU is designed for freelancers, creatives, and models who:
              </p>
              <ul className="space-y-3">
                {[
                  "Work with multiple agencies or recruiters at the same time",
                  "Juggle several jobs with long gaps between work and payment",
                  "Need a simple way to track what's been paid and what's outstanding",
                  "Want to follow up on late payments without losing track",
                  "Value their privacy and prefer keeping data on their own device",
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
              <h2 className="text-2xl font-bold text-title mb-6">Tax Awareness</h2>
              <p className="text-text-muted">
                As a freelancer or creative, it&apos;s easy to forget that you need to account for tax.
                BOOKDU gives you a clear view of your potential income tax obligation - without deductions -
                so you know how much to set aside. No surprises when the end of the financial year arrives.
                Currently supporting Australian tax brackets, with more regions coming soon.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">Expenses, Your Way</h2>
              <p className="text-text-muted">
                Track your business expenses completely separately from your income. Upload receipts, take photos,
                add notes - whatever works for you. When tax time comes, download a clean CSV file with everything
                your accountant needs.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">Privacy First</h2>
              <p className="text-text-muted">
                Your financial data is nobody&apos;s business but yours. BOOKDU operates 100% offline -
                your data never leaves your device. No accounts, no cloud sync, no analytics.
                Just you and your financial information, exactly as it should be.
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
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Simplicity",
                description: "Do one thing well. No feature bloat, no unnecessary complexity. Just the tools you need.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: "Privacy",
                description: "Your data is yours. No tracking, no analytics, no cloud storage. Complete control.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: "Honesty",
                description: "No dark patterns, no upsells, no manipulation. Just honest software that helps you.",
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
