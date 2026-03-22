"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-[10vw] px-[5vw] bg-bg-deep">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="font-[family-name:var(--font-archivo)] text-[clamp(2rem,5vw,5rem)] uppercase leading-[1] text-text max-w-[60ch]">
          Your Money.
          <br />
          Your Contracts.
          <br />
          Your Schedule.
        </h2>

        <p className="mt-8 font-[family-name:var(--font-jetbrains)] text-[clamp(0.7rem,0.9vw,0.9rem)] uppercase tracking-[0.15em] text-text-muted max-w-[50ch]">
          Download BOOKDU. Log your first job. Let the app take it from there.
        </p>

        <motion.a
          href="https://apps.apple.com/us/app/bookdu/id6757381396"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 inline-flex items-center gap-4 bg-text text-bg-deep font-[family-name:var(--font-archivo)] uppercase px-[clamp(1.5rem,2vw,2.5rem)] py-[clamp(0.75rem,1vw,1.25rem)] hover:scale-[0.98] transition-transform duration-150 active:scale-[0.97]"
        >
          Download BOOKDU
          <span aria-hidden="true">&#8599;</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
