"use client";

import { motion } from "framer-motion";
import { CN, CM, ML, TG, GA, GQ } from "country-flag-icons/react/3x2";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { NETWORK_COUNTRIES } from "@/lib/constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FLAGS: Record<string, React.ComponentType<any>> = {
  CN,
  CM,
  ML,
  TG,
  GA,
  GQ,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Coverage() {
  return (
    <section className="bg-primary py-24">
      <Container>
        <SectionHeading
          light
          eyebrow="Notre réseau"
          title="Un réseau international au service de vos achats"
        />

        {/* Trajet Chine → Cameroun */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          {/* Chine */}
          <div className="flex items-center gap-4 rounded-2xl bg-white/5 px-8 py-5">
            <CN className="h-9 w-12 rounded-sm shadow-sm" />
            <div className="text-left">
              <p className="font-display text-xl font-bold text-amber">CHINE</p>
              <p className="mt-0.5 text-sm text-white/60">Guangzhou / Foshan</p>
            </div>
          </div>

          <div
            aria-hidden
            className="h-10 w-px bg-gradient-to-b from-amber to-secondary"
          />

          {/* Cameroun */}
          <div className="flex items-center gap-4 rounded-2xl bg-white/5 px-8 py-5">
            <CM className="h-9 w-12 rounded-sm shadow-sm" />
            <div className="text-left">
              <p className="font-display text-xl font-bold text-white">
                CAMEROUN
              </p>
              <p className="mt-0.5 text-sm text-white/60">Yaoundé / Douala</p>
            </div>
          </div>
        </motion.div>

        {/* Grille des pays */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {NETWORK_COUNTRIES.map((entry) => {
            const FlagComponent = FLAGS[entry.code];
            return (
              <motion.div
                key={entry.country}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center rounded-xl border border-white/10 px-4 py-5 text-center"
              >
                {FlagComponent && (
                  <FlagComponent className="mb-3 h-8 w-11 rounded-sm shadow-sm" />
                )}
                <p className="text-sm font-semibold text-white">
                  {entry.country}
                </p>
                <p className="mt-1 text-xs text-white/50">{entry.city}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
