"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.5 },
};

const whoItsFor = [
  {
    label: "Profile 01",
    text: "Works through agencies and gets paid weeks or months later",
  },
  {
    label: "Profile 02",
    text: "Juggles confirmed and unconfirmed bookings",
  },
  {
    label: "Profile 03",
    text: "Has agency contracts that expire and need watching",
  },
  {
    label: "Profile 04",
    text: "Wants their money tracked until it actually lands",
  },
  {
    label: "Profile 05",
    text: "Needs tax and expenses sorted without becoming an accountant",
  },
];

const values = [
  {
    label: "Value 01 // For Models",
    title: "Built for models, not accountants",
    description:
      "From the moment a job comes in to the moment you get paid. We track it all so you don\u2019t have to think like a bookkeeper.",
  },
  {
    label: "Value 02 // Your Data",
    title: "Your data, your rules",
    description:
      "Everything stays on your phone unless you choose to back it up. The app locks. Nobody sees your finances but you.",
  },
  {
    label: "Value 03 // Honesty",
    title: "Honest. Always.",
    description:
      "No dark patterns. No surprise charges. No manipulation. We built this for someone we love. We treat every user the same way.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block mb-6"
          >
            About // Origin Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-text"
          >
            Why We Built This
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 font-mono text-sm uppercase tracking-[0.15em] text-text-muted max-w-2xl"
          >
            Our daughter is a model. We watched her deal with all of this. So
            we built something to help.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-text-muted"
          >
            Founder:{" "}
            <Link
              href="/about/roman-feldman"
              className="underline underline-offset-4 hover:text-text transition-colors"
            >
              Roman Feldman
            </Link>
          </motion.p>
        </div>
      </section>

      {/* ── Story Sections ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Section: We know this world */}
            <motion.div {...fadeUp}>
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-text mb-8">
                We Know This World.
              </h2>
              <div className="space-y-5">
                <p className="text-text-muted leading-relaxed">
                  We watched our daughter come home from shoots, castings,
                  runway shows — exhausted but buzzing. Then we watched her try
                  to figure out which agencies owed her what, chase payments
                  that were weeks overdue, and scramble at tax time because
                  nothing was written down.
                </p>
                <p className="text-text-muted leading-relaxed">
                  She&apos;d get paid months after a job. Sometimes she&apos;d
                  forget a payment entirely. Sometimes a contract would
                  auto-renew because she didn&apos;t know it was ending.
                </p>
                <p className="text-text-muted leading-relaxed">
                  She&apos;s not bad with money. She&apos;s busy. And the
                  system isn&apos;t built to make it easy. So we built something
                  that is.
                </p>
              </div>
            </motion.div>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-l-2 border-accent pl-8 py-4"
            >
              <p className="font-display text-xl md:text-2xl uppercase tracking-tight text-text leading-snug">
                She&apos;s not bad with money. She&apos;s busy. And the system
                isn&apos;t built to make it easy.
              </p>
            </motion.blockquote>

            {/* Section: What BOOKDU actually does */}
            <motion.div {...fadeUp}>
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-text mb-8">
                What BOOKDU Actually Does.
              </h2>
              <div className="space-y-5">
                <p className="text-text-muted leading-relaxed">
                  Agency says you&apos;ve got a booking? Log it. Confirmed or
                  not — get it in there. BOOKDU reminds you when it&apos;s
                  coming up, nudges you if it&apos;s still unconfirmed. After
                  the job, it tracks the payment until it lands. If the money
                  doesn&apos;t come, we remind you — at 35 days and again at
                  56. Weekly summary every Monday morning.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Your contracts are stored with end dates. We remind you 90
                  days out, on your notice deadline, and the day before it ends.
                  No more getting locked into terms you forgot to review.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Your next 3 days show up on the dashboard. If a job is
                  unconfirmed and it&apos;s coming up, we&apos;ll nudge you to
                  follow up.
                </p>
                <p className="text-text-muted leading-relaxed">
                  That&apos;s it. We track your money, guard your contracts, and
                  keep your schedule clear. Finance tracking for models — not
                  accountants.
                </p>
              </div>
            </motion.div>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-l-2 border-accent pl-8 py-4"
            >
              <p className="font-display text-xl md:text-2xl uppercase tracking-tight text-text leading-snug">
                Finance tracking for models — not accountants.
              </p>
            </motion.blockquote>

            {/* Section: Who it's for */}
            <motion.div {...fadeUp}>
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-text mb-8">
                Who It&apos;s For.
              </h2>
              <p className="text-text-muted leading-relaxed mb-8">
                Models, talent, influencers, creatives — anyone who:
              </p>
              <div className="space-y-0">
                {whoItsFor.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="data-card py-5"
                  >
                    <span className="data-label mb-1">{item.label}</span>
                    <p className="data-card-value text-base">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Section: Tax doesn't have to be a scramble */}
            <motion.div {...fadeUp}>
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-text mb-8">
                Tax Doesn&apos;t Have To Be A Scramble.
              </h2>
              <div className="space-y-5">
                <p className="text-text-muted leading-relaxed">
                  You&apos;re focused on shows, bookings, runways, travel — and
                  then tax time hits and you&apos;re digging through bank
                  statements trying to piece together a year of work.
                </p>
                <p className="text-text-muted leading-relaxed">
                  If you log your jobs and expenses in BOOKDU, it&apos;s
                  already done. Export your paid jobs as a CSV. Export your
                  expenses as a CSV. Hand them to your accountant. That&apos;s
                  it.
                </p>
                <p className="text-text-muted leading-relaxed">
                  BOOKDU also estimates what you might owe in tax so you can set
                  money aside during the year instead of getting hit with a
                  surprise bill. Works in the US, UK, Australia, New Zealand,
                  France, and Italy.
                </p>
              </div>
            </motion.div>

            {/* Section: Secure. Private. Backed up if you want. */}
            <motion.div {...fadeUp}>
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-text mb-8">
                Secure. Private. Backed Up If You Want.
              </h2>
              <div className="space-y-5">
                <p className="text-text-muted leading-relaxed">
                  BOOKDU locks. Nobody can open it and see your data unless you
                  unlock the app. Your finances are your business.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Everything lives on your phone by default. No cloud. No
                  tracking. But if you want a backup — in case you lose or break
                  your phone — you can sign in and we&apos;ll keep a secure
                  copy. Your data doesn&apos;t leave your device unless you
                  choose it.
                </p>
                <p className="text-text-muted leading-relaxed">
                  We don&apos;t sell data. We don&apos;t share data. We built
                  this for our daughter and her friends — not for advertisers.
                </p>
              </div>
            </motion.div>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-l-2 border-accent pl-8 py-4"
            >
              <p className="font-display text-xl md:text-2xl uppercase tracking-tight text-text leading-snug">
                We built this for our daughter and her friends — not for
                advertisers.
              </p>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* ── Values Section ── */}
      <section className="py-24 md:py-32 bg-bg-deep">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="data-label"
            >
              Principles // What We Believe
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-text"
            >
              What We Believe
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {values.map((value, i) => (
              <motion.article
                key={value.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="data-card"
              >
                <span className="data-label">{value.label}</span>
                <h3 className="data-card-value font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="data-card-desc">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
