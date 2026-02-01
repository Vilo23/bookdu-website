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
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-8">
            Yeah, we get it.
          </h2>
        </motion.div>

        <div className="space-y-6 text-lg text-text-muted">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            You do a job. Agency says you&apos;ll get paid &quot;soon.&quot;
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Three weeks later — nothing. You&apos;ve done five more jobs since then.
            Different agencies. Different clients. You&apos;re not even sure which ones
            have paid anymore.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            And asking feels weird.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            So some payments just... disappear.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-title font-semibold text-xl pt-4"
          >
            BOOKDU fixes that.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
