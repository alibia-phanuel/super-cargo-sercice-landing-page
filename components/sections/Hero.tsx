"use client";

import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

const PROOF_POINTS = [
  "Accompagnement de A à Z",
  "Transport maritime & aérien",
  "Contrôle qualité",
  "Livraison au Cameroun",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
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

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-primary pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Gradient décoratif */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 10%, rgba(0,16,64,0.55) 0%, rgba(0,8,48,0) 70%)",
        }}
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Contenu texte */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber"
          >
            Chine → Cameroun
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Vous achetez en <span className="text-amber">Chine</span>.
            <br />
            Nous nous occupons du <span className="text-amber">reste</span>.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/75"
          >
            Super Cargo Service vous accompagne de l&apos;achat auprès de vos
            fournisseurs jusqu&apos;à la livraison à Yaoundé, Douala et partout
            au Cameroun.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#devis" icon={<ArrowRight className="h-4 w-4" />}>
              Obtenir un devis
            </Button>
            <Button href="#services" variant="outline">
              Commander depuis la Chine
            </Button>
          </motion.div>

          <motion.ul
            variants={itemVariants}
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {PROOF_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-amber" />
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants} className="mt-6">
            <a
              href={whatsappLink(
                SITE.whatsappNumber,
                "Bonjour, je souhaite un devis pour importer depuis la Chine.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 underline-offset-4 hover:text-amber hover:underline"
            >
              <MessageCircle className="h-4 w-4" />
              Parler à un conseiller sur WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Visuel route */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <RouteVisual />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-4 left-4 rounded-2xl bg-white px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.35)] sm:left-8"
          >
            <p className="font-display text-sm font-semibold text-primary">
              Livraison Chine → Cameroun
            </p>
            <p className="mt-1 text-xs font-medium text-text-muted">
              Rapide • Sécurisée • Suivie
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function RouteVisual() {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <svg
        viewBox="0 0 480 420"
        className="h-auto w-full"
        role="img"
        aria-label="Trajet logistique entre la Chine et le Cameroun, par voie maritime et aérienne"
      >
        <defs>
          <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F5B400" />
            <stop offset="100%" stopColor="#A00000" />
          </linearGradient>

          {/* Ombre douce pour les drapeaux */}
          <filter id="flagShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* ========== ORIGIN : CHINE ========== */}
        <g>
          {/* Cercle de fond */}
          <circle cx="80" cy="70" r="30" fill="#001040" opacity="0.25" />
          <circle cx="80" cy="70" r="16" fill="#F5B400" />

          {/* Drapeau Chine flottant */}
          <g className="flag-float" style={{ transformOrigin: "110px 55px" }}>
            {/* Mât */}
            <rect
              x="104"
              y="42"
              width="2.5"
              height="38"
              rx="1"
              fill="#e5e7eb"
            />

            {/* Drapeau */}
            <g filter="url(#flagShadow)">
              <rect
                x="106.5"
                y="42"
                width="36"
                height="24"
                rx="2"
                fill="#DE2910"
              />
              {/* Étoile principale */}
              <polygon
                points="118,48 120.2,53.5 126,53.5 121.5,57 123.2,62.5 118,59 112.8,62.5 114.5,57 110,53.5 115.8,53.5"
                fill="#FFDE00"
              />
              {/* Petites étoiles (simplifiées) */}
              <circle cx="128" cy="49" r="1.4" fill="#FFDE00" />
              <circle cx="131" cy="53" r="1.4" fill="#FFDE00" />
              <circle cx="131" cy="58" r="1.4" fill="#FFDE00" />
              <circle cx="128" cy="61" r="1.4" fill="#FFDE00" />
            </g>
          </g>

          <text
            x="80"
            y="120"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="15"
            fontWeight="700"
          >
            CHINE
          </text>
          <text
            x="80"
            y="138"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="11"
            opacity="0.6"
          >
            Guangzhou / Foshan
          </text>
        </g>

        {/* ========== DESTINATION : CAMEROUN ========== */}
        <g>
          <circle cx="380" cy="330" r="30" fill="#A00000" opacity="0.2" />
          <circle cx="380" cy="330" r="16" fill="#A00000" />

          {/* Drapeau Cameroun flottant */}
          <g
            className="flag-float-delayed"
            style={{ transformOrigin: "410px 315px" }}
          >
            {/* Mât */}
            <rect
              x="404"
              y="302"
              width="2.5"
              height="38"
              rx="1"
              fill="#e5e7eb"
            />

            {/* Drapeau tricolore */}
            <g filter="url(#flagShadow)">
              <rect x="406.5" y="302" width="12" height="24" fill="#007A5E" />{" "}
              {/* Vert */}
              <rect
                x="418.5"
                y="302"
                width="12"
                height="24"
                fill="#CE1126"
              />{" "}
              {/* Rouge */}
              <rect
                x="430.5"
                y="302"
                width="12"
                height="24"
                fill="#FCD116"
              />{" "}
              {/* Jaune */}
              {/* Étoile jaune au centre */}
              <polygon
                points="424.5,308 426.2,312.5 431,312.5 427.2,315.5 428.6,320 424.5,317 420.4,320 421.8,315.5 418,312.5 422.8,312.5"
                fill="#FCD116"
              />
            </g>
          </g>

          <text
            x="380"
            y="380"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="15"
            fontWeight="700"
          >
            CAMEROUN
          </text>
          <text
            x="380"
            y="398"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="11"
            opacity="0.6"
          >
            Yaoundé / Douala
          </text>
        </g>

        {/* Route path */}
        <path
          id="scsRoute"
          d="M 80 70 C 180 130, 190 250, 380 330"
          fill="none"
          stroke="url(#routeGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="route-path"
          opacity="0.85"
        />

        {/* Traveling dot */}
        <circle
          r="6"
          fill="#ffffff"
          className="route-dot"
          style={{
            offsetPath: "path('M 80 70 C 180 130, 190 250, 380 330')",
          }}
        />

        {/* Container / ship glyph */}
        <g transform="translate(150, 155)" opacity="0.9">
          <rect
            x="-26"
            y="-14"
            width="52"
            height="28"
            rx="4"
            fill="#ffffff"
            opacity="0.12"
          />
          <rect
            x="-20"
            y="-8"
            width="40"
            height="16"
            rx="2"
            fill="#F5B400"
            opacity="0.9"
          />
        </g>

        {/* Plane glyph */}
        <g transform="translate(255, 210)" opacity="0.9">
          <circle r="18" fill="#ffffff" opacity="0.08" />
          <path d="M -10 0 L 10 -3 L 3 0 L 10 3 Z" fill="#ffffff" />
        </g>
      </svg>

      {/* Styles d'animation des drapeaux */}
      <style jsx>{`
        .flag-float {
          animation: float 3.2s ease-in-out infinite;
        }
        .flag-float-delayed {
          animation: float 3.2s ease-in-out infinite;
          animation-delay: 0.6s;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }
      `}</style>
    </div>
  );
}
