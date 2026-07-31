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

export default function Services() {
  return (
    <section id="services" className="bg-mist py-24">
      <Container>
        <SectionHeading
          eyebrow="Nos services"
          title="Tout ce dont vous avez besoin pour importer depuis la Chine"
          subtitle="Nous simplifions chaque étape de votre importation."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-white p-7 transition-shadow duration-300 hover:shadow-[0_20px_50px_-20px_rgba(6,43,104,0.25)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue/10 text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                  {Icon ? (
                    <Icon className="h-6 w-6" />
                  ) : (
                    <span className="flex items-center gap-0.5">
                      <Ship className="h-5 w-5" />
                      <Plane className="h-4 w-4" />
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
