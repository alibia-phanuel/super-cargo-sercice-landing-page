import { MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { OFFICES } from "@/lib/constants";
import { telLink } from "@/lib/utils";

export default function Offices() {
  return (
    <section id="contact" className="bg-mist py-24">
      <Container>
        <SectionHeading
          eyebrow="Nos bureaux"
          title="Contactez l'agence la plus proche de vous"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OFFICES.map((office) => (
            <div key={`${office.country}-${office.city}`} className="rounded-2xl bg-white p-7">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue">
                {office.country}
              </span>
              <h3 className="mt-1 font-display text-xl font-semibold text-navy">
                {office.city}
              </h3>
              <div className="mt-4 flex items-start gap-2 text-sm text-slate">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{office.address}</span>
              </div>
              {office.phones.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {office.phones.map((phone) => (
                    <li key={phone}>
                      <a
                        href={telLink(phone)}
                        className="flex items-center gap-2 text-sm font-medium text-navy hover:text-blue"
                      >
                        <Phone className="h-4 w-4 flex-shrink-0" />
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
