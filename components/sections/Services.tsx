"use client";

import {
  ShoppingCart,
  Handshake,
  CreditCard,
  ShieldCheck,
  Truck,
  Ship,
  Plane,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  ShoppingCart,
  Handshake,
  CreditCard,
  ShieldCheck,
  Truck,
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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24">
      <Container>
        <SectionHeading
          eyebrow="Nos services"
          title="Tout ce dont vous avez besoin pour importer depuis la Chine"
          subtitle="Nous simplifions chaque étape de votre importation."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-[0_20px_50px_-20px_rgba(0,16,64,0.18)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  {Icon ? (
                    <Icon className="h-6 w-6" />
                  ) : (
                    <span className="flex items-center gap-0.5">
                      <Ship className="h-5 w-5" />
                      <Plane className="h-4 w-4" />
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-primary">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
