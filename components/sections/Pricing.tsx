"use client";

import { ArrowRight, Package } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { PRICING } from "@/lib/constants";

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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Pricing() {
  return (
    <section id="tarifs" className="bg-surface py-24">
      <Container>
        <SectionHeading
          eyebrow="Nos tarifs"
          title="Des tarifs clairs pour démarrer votre importation"
          subtitle="Tarifs indicatifs valables pour le Cameroun. Le coût final dépend du produit, du volume et du mode de transport choisi."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 mx-auto grid max-w-3xl gap-5 sm:grid-cols-2"
        >
          {PRICING.map((tier) => (
            <motion.div
              key={tier.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                <Package className="h-6 w-6" />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-text-muted">
                {tier.label}
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-primary">
                {tier.price}
                {tier.unit && (
                  <span className="text-base font-medium text-text-muted">
                    {" "}
                    {tier.unit}
                  </span>
                )}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Button href="#devis" icon={<ArrowRight className="h-4 w-4" />}>
            Demander un devis personnalisé
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
