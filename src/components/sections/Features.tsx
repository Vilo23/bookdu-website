"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { FEATURES } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface FeaturesProps {
  showAll?: boolean;
  title?: string;
  subtitle?: string;
}

export default function Features({
  showAll = false,
  title = "What you get.",
  subtitle
}: FeaturesProps) {
  const displayFeatures = showAll ? FEATURES : FEATURES.slice(0, 4);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-title mb-4"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-text-muted max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {displayFeatures.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover/card:bg-accent/20">
                    <Icon name={feature.icon} className="w-6 h-6 text-accent-dark transition-transform duration-300 group-hover/card:scale-110" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-title mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
