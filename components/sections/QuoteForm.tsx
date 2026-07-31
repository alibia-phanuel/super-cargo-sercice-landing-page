"use client";

import { useState, type FormEvent } from "react";
import { Send, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

const inputClasses =
  "w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate/60 focus:border-blue focus:outline-none";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="devis" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Devis gratuit"
          title="Parlez-nous de votre projet"
          subtitle="Recevez une estimation adaptée à votre produit, votre quantité et votre mode de transport préféré."
        />

        <div className="mx-auto mt-12 max-w-2xl">
          {submitted ? (
            <div className="rounded-2xl bg-mist p-8 text-center">
              <p className="font-display text-lg font-semibold text-navy">
                Merci ! Votre demande a bien été enregistrée.
              </p>
              <p className="mt-2 text-sm text-slate">
                Un conseiller Super Cargo Service vous contactera très rapidement. Vous pouvez
                aussi nous écrire directement sur WhatsApp.
              </p>
              <div className="mt-6">
                <Button
                  href={whatsappLink(SITE.whatsappNumber, "Bonjour, je viens de faire une demande de devis sur le site.")}
                  variant="whatsapp"
                  icon={<MessageCircle className="h-4 w-4" />}
                >
                  Ouvrir WhatsApp
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl bg-mist p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder="Nom complet" className={inputClasses} />
                <input required name="phone" placeholder="Téléphone / WhatsApp" className={inputClasses} />
                <input required type="email" name="email" placeholder="Email" className={inputClasses} />
                <input required name="city" placeholder="Ville" className={inputClasses} />
                <input required name="product" placeholder="Produit à importer" className={inputClasses} />
                <input required name="quantity" placeholder="Quantité" className={inputClasses} />
              </div>

              <fieldset className="mt-4">
                <legend className="mb-2 text-sm font-medium text-ink/70">Mode de transport</legend>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm text-ink/80">
                    <input type="radio" name="transport" value="Maritime" defaultChecked required />
                    Maritime
                  </label>
                  <label className="flex items-center gap-2 text-sm text-ink/80">
                    <input type="radio" name="transport" value="Aérien" required />
                    Aérien
                  </label>
                </div>
              </fieldset>

              <textarea
                name="message"
                placeholder="Message (facultatif)"
                rows={4}
                className={`${inputClasses} mt-4 resize-none`}
              />

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button type="submit" icon={<Send className="h-4 w-4" />}>
                  Demander mon devis
                </Button>
                <Button
                  href={whatsappLink(SITE.whatsappNumber, "Bonjour, je souhaite un devis pour importer depuis la Chine.")}
                  variant="whatsapp"
                  icon={<MessageCircle className="h-4 w-4" />}
                >
                  Contacter WhatsApp
                </Button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
