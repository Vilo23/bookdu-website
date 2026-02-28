"use client";

import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-title">
            Shows, castings, fittings — and somewhere in between, you&apos;re supposed to track it all.
          </h2>
        </motion.div>

        <div className="space-y-6 text-lg text-text-muted">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Which agency owes you what. Which payments are weeks overdue. When your contract runs out. Whether that job next Tuesday is actually confirmed.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            You&apos;re not getting paid on the spot. It&apos;s weeks. Sometimes months. And if you don&apos;t chase it, nobody else will.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Then tax time hits and you&apos;re digging through bank statements and email threads trying to piece together a year of work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-6"
          >
            <div className="border-l-3 border-accent pl-6">
              <p className="text-title font-semibold text-xl">
                We built BOOKDU so you don&apos;t have to carry any of that.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
