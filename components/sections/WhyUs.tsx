"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_US } from "@/lib/constants";

const listVariants = {
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
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Texte + liste */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Pourquoi nous"
              title="Un accompagnement pensé pour les importateurs camerounais"
            />

            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-8 space-y-4"
            >
              {WHY_US.map((point) => (
                <motion.li
                  key={point}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-sm leading-relaxed text-text/80 sm:text-base">
                    {point}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Illustration SVG mise à jour avec la nouvelle palette */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <svg
              viewBox="0 0 400 340"
              className="h-auto w-full"
              role="img"
              aria-label="Illustration logistique conteneurs et transport"
            >
              <rect
                x="0"
                y="0"
                width="400"
                height="340"
                rx="24"
                fill="#F5F5F5"
              />

              {/* Conteneur bleu */}
              <g transform="translate(60,180)">
                <rect
                  x="0"
                  y="0"
                  width="90"
                  height="60"
                  rx="6"
                  fill="#001040"
                />
                <rect
                  x="10"
                  y="10"
                  width="70"
                  height="14"
                  rx="2"
                  fill="#ffffff"
                  opacity="0.3"
                />
                <rect
                  x="10"
                  y="32"
                  width="70"
                  height="14"
                  rx="2"
                  fill="#ffffff"
                  opacity="0.3"
                />
              </g>

              {/* Conteneur principal */}
              <g transform="translate(160,150)">
                <rect
                  x="0"
                  y="0"
                  width="90"
                  height="90"
                  rx="6"
                  fill="#000830"
                />
                <rect
                  x="10"
                  y="12"
                  width="70"
                  height="14"
                  rx="2"
                  fill="#F5B400"
                  opacity="0.9"
                />
                <rect
                  x="10"
                  y="34"
                  width="70"
                  height="14"
                  rx="2"
                  fill="#ffffff"
                  opacity="0.2"
                />
                <rect
                  x="10"
                  y="56"
                  width="70"
                  height="14"
                  rx="2"
                  fill="#ffffff"
                  opacity="0.2"
                />
              </g>

              {/* Conteneur rouge */}
              <g transform="translate(260,190)">
                <rect
                  x="0"
                  y="0"
                  width="90"
                  height="50"
                  rx="6"
                  fill="#A00000"
                />
                <rect
                  x="10"
                  y="10"
                  width="70"
                  height="12"
                  rx="2"
                  fill="#ffffff"
                  opacity="0.25"
                />
                <rect
                  x="10"
                  y="28"
                  width="70"
                  height="12"
                  rx="2"
                  fill="#ffffff"
                  opacity="0.25"
                />
              </g>

              {/* Sol */}
              <rect
                x="30"
                y="255"
                width="340"
                height="8"
                rx="4"
                fill="#001040"
                opacity="0.12"
              />

              {/* Avion */}
              <g transform="translate(240,60)" opacity="0.9">
                <path d="M0 20 L60 0 L60 40 Z" fill="#001040" />
                <rect x="-10" y="10" width="10" height="20" fill="#001040" />
              </g>
            </svg>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
