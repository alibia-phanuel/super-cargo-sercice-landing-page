"use client";

import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { OFFICES } from "@/lib/constants";
import { telLink } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Offices() {
  return (
    <section id="contact" className="bg-surface py-24">
      <Container>
        <SectionHeading
          eyebrow="Nos bureaux"
          title="Contactez l'agence la plus proche de vous"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {OFFICES.map((office) => (
            <motion.div
              key={`${office.country}-${office.city}`}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl bg-white p-7 shadow-sm border border-border"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                {office.country}
              </span>

              <h3 className="mt-1 font-display text-xl font-semibold text-primary">
                {office.city}
              </h3>

              <div className="mt-4 flex items-start gap-2 text-sm text-text-muted">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{office.address}</span>
              </div>

              {office.phones.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {office.phones.map((phone) => (
                    <li key={phone}>
                      <a
                        href={telLink(phone)}
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
                      >
                        <Phone className="h-4 w-4 flex-shrink-0" />
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
