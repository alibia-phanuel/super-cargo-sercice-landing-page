import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(50% 60% at 20% 20%, rgba(215,25,32,0.35) 0%, rgba(4,27,69,0) 70%)",
        }}
      />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Vous achetez en Chine ? Nous nous occupons du reste.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
          De votre fournisseur en Chine jusqu&apos;à votre porte au Cameroun.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#devis" icon={<ArrowRight className="h-4 w-4" />}>
            Obtenir un devis
          </Button>
          <Button
            href={whatsappLink(SITE.whatsappNumber, "Bonjour, je souhaite un devis pour importer depuis la Chine.")}
            variant="whatsapp"
            icon={<MessageCircle className="h-4 w-4" />}
          >
            Nous contacter sur WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
