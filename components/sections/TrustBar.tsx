"use client";

import { motion } from "framer-motion";
import { CN, CM } from "country-flag-icons/react/3x2";
import Container from "@/components/ui/Container";
import { TRUST_STATS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function TrustBar() {
  return (
    <section className="border-b border-border bg-white">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4 sm:gap-6"
        >
          {TRUST_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center sm:text-left"
            >
              {/* Cas spécial pour Chine → Cameroun */}
              {stat.value === "CN → CM" ? (
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <CN className="h-6 w-8 rounded-sm shadow-sm" />
                  <span className="font-display text-xl font-bold text-primary">
                    →
                  </span>
                  <CM className="h-6 w-8 rounded-sm shadow-sm" />
                </div>
              ) : (
                <p className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  {stat.value}
                </p>
              )}

              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-text-muted sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
