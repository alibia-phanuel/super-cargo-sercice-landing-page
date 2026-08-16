"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Comment ça marche"
          title="Importer depuis la Chine n'a jamais été aussi simple."
        />

        <div className="relative mx-auto mt-16 max-w-2xl">
          {/* Ligne verticale */}
          <div
            aria-hidden
            className="absolute left-5 top-2 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-primary via-amber to-secondary"
          />

          <motion.ol
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            {HOW_IT_WORKS.map((item) => (
              <motion.li
                key={item.step}
                variants={itemVariants}
                className="relative flex items-start gap-5"
              >
                <span className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-white shadow-md">
                  {item.step}
                </span>
                <p className="pt-2 font-display text-lg font-semibold text-primary">
                  {item.title}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}
