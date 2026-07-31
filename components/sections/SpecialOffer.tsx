import { Gift, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function SpecialOffer() {
  return (
    <section className="relative overflow-hidden bg-amber py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-navy/10"
      />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[auto_1fr_auto] lg:gap-14">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-white sm:h-20 sm:w-20">
          <Gift className="h-8 w-8 sm:h-9 sm:w-9" />
        </div>

        <div>
          <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-navy/70">
            5 nuits d&apos;hébergement offertes
          </span>
          <h2 className="mt-2 font-display text-2xl font-semibold leading-snug text-navy sm:text-3xl">
            Vous venez acheter en Chine ? Nous vous accompagnons aussi sur place.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-navy/80 sm:text-base">
            Pour les entrepreneurs qui utilisent nos services Super Cargo Service, bénéficiez
            de 5 nuits d&apos;hébergement offertes à Guangzhou*.
          </p>
          <p className="mt-2 text-xs text-navy/60">*Sous conditions.</p>
        </div>

        <div>
          <Button
            href="#devis"
            variant="secondary"
            className="whitespace-nowrap"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            Profiter de l&apos;offre
          </Button>
        </div>
      </Container>
    </section>
  );
}
