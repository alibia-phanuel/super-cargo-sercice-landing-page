"use client";

import { Search, Smartphone, Lock, PackageSearch } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Container from "@/components/ui/Container";

const UPCOMING_FEATURES = [
  "Création de colis directement depuis l'app",
  "Suivi en temps réel, étape par étape",
  "Notifications à chaque changement de statut",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Tracking() {
  return (
    <section
      id="suivi"
      className="relative overflow-hidden bg-surface py-20 sm:py-28"
    >
      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Contenu texte */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            <Smartphone className="h-3.5 w-3.5" />
            Bientôt disponible
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-6 font-display text-3xl font-semibold leading-tight text-text sm:text-4xl"
          >
            Suivez votre colis{" "}
            <span className="text-secondary">en un coup d&apos;œil</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-lg text-base leading-relaxed text-text-muted"
          >
            Nous développons actuellement notre application mobile Super Cargo
            Service. Elle vous permettra bientôt de créer vos colis et de suivre
            en temps réel à quelle étape se trouve votre livraison, de la Chine
            jusqu&apos;au Cameroun.
          </motion.p>

          <motion.ul variants={itemVariants} className="mt-8 space-y-3">
            {UPCOMING_FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-text"
              >
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber">
                  <PackageSearch className="h-3.5 w-3.5" />
                </span>
                {feature}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Carte de suivi désactivée */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_20px_50px_-15px_rgba(0,16,64,0.15)] sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
              <Lock className="h-3.5 w-3.5" />
              Fonctionnalité en conception
            </div>

            <p className="mt-2 font-display text-lg font-semibold text-text">
              Où en est mon colis ?
            </p>

            <div className="mt-6">
              <label
                htmlFor="tracking-number"
                className="mb-2 block text-sm font-medium text-text-muted"
              >
                Numéro de suivi
              </label>

              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted/50" />
                <input
                  id="tracking-number"
                  type="text"
                  disabled
                  placeholder="Ex : SCS-2026-004521"
                  className="w-full cursor-not-allowed rounded-xl border border-border bg-surface py-3 pl-11 pr-4 text-sm text-text-muted placeholder:text-text-muted/60 focus:outline-none"
                />
              </div>

              <button
                type="button"
                disabled
                className="mt-3 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-primary/40 px-5 py-3 text-sm font-semibold text-white/70"
              >
                <Search className="h-4 w-4" />
                Suivre mon colis
              </button>
            </div>

            <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-amber/10 px-4 py-3">
              <Smartphone className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber" />
              <p className="text-xs leading-relaxed text-text">
                Cette fonctionnalité arrive avec notre future application
                mobile. En attendant, contactez-nous directement sur WhatsApp
                pour connaître l&apos;état de votre colis.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
