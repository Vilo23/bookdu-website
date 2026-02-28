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
            Our daughter is a model. We watched her deal with all of this. So we built something to help.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">We know this world.</h2>
              <p className="text-text-muted mb-4">
                We watched our daughter come home from shoots, castings, runway shows — exhausted
                but buzzing. Then we watched her try to figure out which agencies owed her what,
                chase payments that were weeks overdue, and scramble at tax time because nothing
                was written down.
              </p>
              <p className="text-text-muted mb-4">
                She&apos;d get paid months after a job. Sometimes she&apos;d forget a payment
                entirely. Sometimes a contract would auto-renew because she didn&apos;t know
                it was ending.
              </p>
              <p className="text-text-muted">
                She&apos;s not bad with money. She&apos;s busy. And the system isn&apos;t built
                to make it easy. So we built something that is.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">What BOOKDU actually does.</h2>
              <p className="text-text-muted mb-4">
                Agency says you&apos;ve got a booking? Log it. Confirmed or not — get it
                in there. BOOKDU reminds you when it&apos;s coming up, nudges you if it&apos;s
                still unconfirmed. After the job, it tracks the payment until it lands.
                If the money doesn&apos;t come, we remind you — at 35 days and again at 56.
                Weekly summary every Monday morning.
              </p>
              <p className="text-text-muted mb-4">
                Your contracts are stored with end dates. We remind you 90 days out,
                on your notice deadline, and the day before it ends. No more getting
                locked into terms you forgot to review.
              </p>
              <p className="text-text-muted mb-4">
                Your next 3 days show up on the dashboard. If a job is unconfirmed
                and it&apos;s coming up, we&apos;ll nudge you to follow up.
              </p>
              <p className="text-text-muted">
                That&apos;s it. We track your money, guard your contracts, and keep
                your schedule clear. Finance tracking for models — not accountants.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">Who it&apos;s for.</h2>
              <p className="text-text-muted mb-4">
                Models, talent, influencers, creatives — anyone who:
              </p>
              <ul className="space-y-3">
                {[
                  "Works through agencies and gets paid weeks or months later",
                  "Juggles confirmed and unconfirmed bookings",
                  "Has agency contracts that expire and need watching",
                  "Wants their money tracked until it actually lands",
                  "Needs tax and expenses sorted without becoming an accountant",
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

            {/* Tax & Expenses */}
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">Tax doesn&apos;t have to be a scramble.</h2>
              <p className="text-text-muted mb-4">
                You&apos;re focused on shows, bookings, runways, travel — and then tax
                time hits and you&apos;re digging through bank statements trying to
                piece together a year of work.
              </p>
              <p className="text-text-muted mb-4">
                If you log your jobs and expenses in BOOKDU, it&apos;s already done.
                Export your paid jobs as a CSV. Export your expenses as a CSV. Hand
                them to your accountant. That&apos;s it.
              </p>
              <p className="text-text-muted">
                BOOKDU also estimates what you might owe in tax so you can set money
                aside during the year instead of getting hit with a surprise bill.
                Works in the US, UK, Australia, New Zealand, France, and Italy.
              </p>
            </motion.div>

            {/* Security & Privacy — updated */}
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-title mb-6">Secure. Private. Backed up if you want.</h2>
              <p className="text-text-muted mb-4">
                BOOKDU locks. Nobody can open it and see your data unless you unlock
                the app. Your finances are your business.
              </p>
              <p className="text-text-muted mb-4">
                Everything lives on your phone by default. No cloud. No tracking.
                But if you want a backup — in case you lose or break your phone —
                you can sign in and we&apos;ll keep a secure copy. Your data doesn&apos;t
                leave your device unless you choose it.
              </p>
              <p className="text-text-muted">
                We don&apos;t sell data. We don&apos;t share data. We built this for
                our daughter and her friends — not for advertisers.
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
                title: "Built for models, not accountants",
                description: "From the moment a job comes in to the moment you get paid. We track it all so you don\u2019t have to think like a bookkeeper.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: "Your data, your rules",
                description: "Everything stays on your phone unless you choose to back it up. The app locks. Nobody sees your finances but you.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: "Honest. Always.",
                description: "No dark patterns. No surprise charges. No manipulation. We built this for someone we love. We treat every user the same way.",
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
