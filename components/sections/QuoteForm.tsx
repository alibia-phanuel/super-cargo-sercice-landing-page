"use client";

import { useState, type FormEvent } from "react";
import { Send, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

const inputClasses =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  function isValidPhone(phone: string) {
    // Accepte uniquement des chiffres, espaces, +, -, ( )
    // Minimum 8 chiffres
    const cleaned = phone.replace(/[\s\-\(\)]/g, "");
    const onlyNumbers = cleaned.replace(/^\+/, ""); // enlève le + au début s'il y en a un

    return /^\d{8,15}$/.test(onlyNumbers);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPhoneError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const city = formData.get("city") as string;
    const product = formData.get("product") as string;
    const quantity = formData.get("quantity") as string;
    const transport = formData.get("transport") as string;
    const message = (formData.get("message") as string) || "Aucun message";

    // Validation du numéro
    if (!isValidPhone(phone)) {
      setPhoneError(
        "Veuillez entrer un numéro de téléphone valide (ex: +237 6XX XXX XXX)",
      );
      return;
    }

    // Message formaté pour WhatsApp
    const whatsappMessage = `
*Nouvelle demande de devis - Super Cargo Service*

👤 *Nom :* ${name}
📞 *Téléphone :* ${phone}
📧 *Email :* ${email}
🏙️ *Ville :* ${city}

📦 *Produit :* ${product}
🔢 *Quantité :* ${quantity}
🚢 *Transport :* ${transport}

💬 *Message :*
${message}
    `.trim();

    const url = whatsappLink(SITE.whatsappNumber, whatsappMessage);
    window.open(url, "_blank");

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
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl bg-surface p-8 text-center"
              >
                <p className="font-display text-lg font-semibold text-primary">
                  Merci ! Votre demande a été préparée.
                </p>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  WhatsApp va s’ouvrir avec votre demande de devis déjà rédigée.
                  <br />
                  <strong className="text-primary">
                    Vous devez avoir un compte WhatsApp
                  </strong>{" "}
                  pour finaliser l’envoi.
                </p>
                <p className="mt-2 text-sm text-text-muted">
                  Un conseiller Super Cargo Service vous répondra rapidement.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    href={whatsappLink(
                      SITE.whatsappNumber,
                      "Bonjour, je viens de faire une demande de devis sur le site.",
                    )}
                    variant="whatsapp"
                    icon={<MessageCircle className="h-4 w-4" />}
                  >
                    Ouvrir WhatsApp
                  </Button>

                  <Button
                    className="bg-red-500"
                    onClick={() => setSubmitted(false)}
                  >
                    Faire une autre demande
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="rounded-2xl bg-surface p-6 sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    name="name"
                    placeholder="Nom complet"
                    className={inputClasses}
                  />

                  {/* Champ téléphone avec validation */}
                  <div>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="Téléphone / WhatsApp (ex: +237 6XX XXX XXX)"
                      className={`${inputClasses} ${
                        phoneError
                          ? "border-secondary focus:border-secondary focus:ring-secondary/20"
                          : ""
                      }`}
                      onChange={() => setPhoneError("")}
                    />
                    {phoneError && (
                      <p className="mt-1.5 text-xs text-secondary">
                        {phoneError}
                      </p>
                    )}
                  </div>

                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={inputClasses}
                  />
                  <input
                    required
                    name="city"
                    placeholder="Ville"
                    className={inputClasses}
                  />
                  <input
                    required
                    name="product"
                    placeholder="Produit à importer"
                    className={inputClasses}
                  />
                  <input
                    required
                    name="quantity"
                    placeholder="Quantité"
                    className={inputClasses}
                  />
                </div>

                <fieldset className="mt-5">
                  <legend className="mb-2 text-sm font-medium text-text/70">
                    Mode de transport
                  </legend>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 text-sm text-text/80 cursor-pointer">
                      <input
                        type="radio"
                        name="transport"
                        value="Maritime"
                        defaultChecked
                        required
                        className="accent-primary"
                      />
                      Maritime
                    </label>
                    <label className="flex items-center gap-2 text-sm text-text/80 cursor-pointer">
                      <input
                        type="radio"
                        name="transport"
                        value="Aérien"
                        required
                        className="accent-primary"
                      />
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

                <p className="mt-4 text-xs text-text-muted">
                  ℹ️ En cliquant sur « Demander mon devis », WhatsApp s’ouvrira
                  automatiquement.{" "}
                  <strong>Vous devez disposer d’un compte WhatsApp</strong> pour
                  envoyer la demande.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" icon={<Send className="h-4 w-4" />}>
                    Demander mon devis
                  </Button>
                  <Button
                    href={whatsappLink(
                      SITE.whatsappNumber,
                      "Bonjour, je souhaite un devis pour importer depuis la Chine.",
                    )}
                    variant="whatsapp"
                    icon={<MessageCircle className="h-4 w-4" />}
                  >
                    Contacter WhatsApp
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
