import { ArrowRight, Package } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { PRICING } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="tarifs" className="bg-mist py-24">
      <Container>
        <SectionHeading
          eyebrow="Nos tarifs"
          title="Des tarifs clairs pour démarrer votre importation"
          subtitle="Tarifs indicatifs valables pour le Cameroun. Le coût final dépend du produit, du volume et du mode de transport choisi."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
          {PRICING.map((tier) => (
            <div
              key={tier.id}
              className="rounded-2xl border border-navy/10 bg-white p-8 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <Package className="h-6 w-6" />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate">
                {tier.label}
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-navy">
                {tier.price}
                {tier.unit && <span className="text-base font-medium text-slate"> {tier.unit}</span>}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="#devis" icon={<ArrowRight className="h-4 w-4" />}>
            Demander un devis personnalisé
          </Button>
        </div>
      </Container>
    </section>
  );
}
