import Container from "@/components/ui/Container";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/constants";
import { telLink, whatsappLink } from "@/lib/utils";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    path: "M13.5 9H15V6.5h-1.75C11.68 6.5 10.5 7.68 10.5 9.25V11H9v2.5h1.5V19h2.5v-5.5h1.75l.5-2.5h-2.25V9.5c0-.3.2-.5.5-.5Z",
  },
  {
    label: "Instagram",
    path: "M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5.7a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4ZM16.2 6a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM8 4.5h8A3.5 3.5 0 0 1 19.5 8v8a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 16V8A3.5 3.5 0 0 1 8 4.5Zm0 1.3A2.2 2.2 0 0 0 5.8 8v8A2.2 2.2 0 0 0 8 18.2h8a2.2 2.2 0 0 0 2.2-2.2V8A2.2 2.2 0 0 0 16 5.8Z",
  },
  {
    label: "LinkedIn",
    path: "M6.94 8.5H4.56V19h2.38V8.5ZM5.75 4.4a1.38 1.38 0 1 0 0 2.76 1.38 1.38 0 0 0 0-2.76ZM19.5 19h-2.38v-5.4c0-1.29-.03-2.94-1.79-2.94-1.8 0-2.07 1.4-2.07 2.85V19H10.9V8.5h2.28v1.43h.03c.32-.6 1.1-1.24 2.27-1.24 2.42 0 2.87 1.6 2.87 3.67V19Z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white/80">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-lg font-semibold text-white">
              Super Cargo Service
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {SITE.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={`Super Cargo Service sur ${social.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-amber hover:text-navy-deep"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-amber">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="transition-colors hover:text-amber">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={telLink(SITE.phonePrimary)} className="transition-colors hover:text-amber">
                  {SITE.phonePrimary}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(SITE.whatsappNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-amber"
                >
                  WhatsApp
                </a>
              </li>
              <li>Yaoundé — Entrée PMI Tsinga</li>
              <li>Douala — Face Hôpital Bali</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Super Cargo Service. Tous droits réservés.</p>
          <p>Chine → Cameroun · Mali · Togo · Gabon · Guinée équatoriale</p>
        </div>
      </Container>
    </footer>
  );
}
