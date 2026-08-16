"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-24">
      {/* Gradient décoratif */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(50% 60% at 20% 20%, rgba(160,0,0,0.35) 0%, rgba(0,8,48,0) 70%)",
        }}
      />

      <Container className="relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl"
        >
          Vous achetez en Chine ? Nous nous occupons du reste.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg"
        >
          De votre fournisseur en Chine jusqu&apos;à votre porte au Cameroun.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href="#devis" icon={<ArrowRight className="h-4 w-4" />}>
            Obtenir un devis
          </Button>
          <Button
            href={whatsappLink(
              SITE.whatsappNumber,
              "Bonjour, je souhaite un devis pour importer depuis la Chine.",
            )}
            variant="whatsapp"
            icon={<MessageCircle className="h-4 w-4" />}
          >
            Nous contacter sur WhatsApp
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
