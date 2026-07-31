import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
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

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-navy pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 10%, rgba(11,78,162,0.55) 0%, rgba(6,43,104,0) 70%)",
        }}
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            Chine → Cameroun
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            Vous achetez en <span className="text-amber">Chine</span>.
            <br />
            Nous nous occupons du <span className="text-amber">reste</span>.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
            Super Cargo Service vous accompagne de l&apos;achat auprès de vos fournisseurs
            jusqu&apos;à la livraison à Yaoundé, Douala et partout au Cameroun.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#devis" icon={<ArrowRight className="h-4 w-4" />}>
              Obtenir un devis
            </Button>
            <Button href="#services" variant="outline">
              Commander depuis la Chine
            </Button>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PROOF_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-amber" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <a
              href={whatsappLink(SITE.whatsappNumber, "Bonjour, je souhaite un devis pour importer depuis la Chine.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 underline-offset-4 hover:text-amber hover:underline"
            >
              <MessageCircle className="h-4 w-4" />
              Parler à un conseiller sur WhatsApp
            </a>
          </div>
        </div>

        <div className="fade-up relative" style={{ animationDelay: "120ms" }}>
          <RouteVisual />
          <div className="absolute -bottom-4 left-4 rounded-2xl bg-white px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.35)] sm:left-8">
            <p className="font-display text-sm font-semibold text-navy">
              Livraison Chine → Cameroun
            </p>
            <p className="mt-1 text-xs font-medium text-slate">
              Rapide • Sécurisée • Suivie
            </p>
          </div>
        </div>
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
            <stop offset="100%" stopColor="#D71920" />
          </linearGradient>
        </defs>

        {/* Origin: China */}
        <g>
          <circle cx="80" cy="70" r="30" fill="#0B4EA2" opacity="0.25" />
          <circle cx="80" cy="70" r="16" fill="#F5B400" />
          <text x="80" y="120" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="700">
            CHINE
          </text>
          <text x="80" y="138" textAnchor="middle" fill="#ffffff" fontSize="11" opacity="0.6">
            Guangzhou / Foshan
          </text>
        </g>

        {/* Destination: Cameroon */}
        <g>
          <circle cx="380" cy="330" r="30" fill="#D71920" opacity="0.2" />
          <circle cx="380" cy="330" r="16" fill="#D71920" />
          <text x="380" y="380" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="700">
            CAMEROUN
          </text>
          <text x="380" y="398" textAnchor="middle" fill="#ffffff" fontSize="11" opacity="0.6">
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

        {/* Traveling dot representing cargo in transit */}
        <circle r="6" fill="#ffffff" className="route-dot" style={{ offsetPath: "path('M 80 70 C 180 130, 190 250, 380 330')" }} />

        {/* Container / ship glyph */}
        <g transform="translate(150, 155)" opacity="0.9">
          <rect x="-26" y="-14" width="52" height="28" rx="4" fill="#ffffff" opacity="0.12" />
          <rect x="-20" y="-8" width="40" height="16" rx="2" fill="#F5B400" opacity="0.9" />
        </g>

        {/* Plane glyph */}
        <g transform="translate(255, 210)" opacity="0.9">
          <circle r="18" fill="#ffffff" opacity="0.08" />
          <path d="M -10 0 L 10 -3 L 3 0 L 10 3 Z" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}
