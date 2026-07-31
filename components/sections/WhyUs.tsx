import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_US } from "@/lib/constants";

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Pourquoi nous"
              title="Un accompagnement pensé pour les importateurs camerounais"
            />
            <ul className="mt-8 space-y-4">
              {WHY_US.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue" />
                  <span className="text-sm leading-relaxed text-ink/80 sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <svg viewBox="0 0 400 340" className="h-auto w-full" role="img" aria-label="Illustration logistique conteneurs et transport">
              <rect x="0" y="0" width="400" height="340" rx="24" fill="#F5F7FA" />
              <g transform="translate(60,180)">
                <rect x="0" y="0" width="90" height="60" rx="6" fill="#0B4EA2" />
                <rect x="10" y="10" width="70" height="14" rx="2" fill="#ffffff" opacity="0.3" />
                <rect x="10" y="32" width="70" height="14" rx="2" fill="#ffffff" opacity="0.3" />
              </g>
              <g transform="translate(160,150)">
                <rect x="0" y="0" width="90" height="90" rx="6" fill="#062B68" />
                <rect x="10" y="12" width="70" height="14" rx="2" fill="#F5B400" opacity="0.8" />
                <rect x="10" y="34" width="70" height="14" rx="2" fill="#ffffff" opacity="0.2" />
                <rect x="10" y="56" width="70" height="14" rx="2" fill="#ffffff" opacity="0.2" />
              </g>
              <g transform="translate(260,190)">
                <rect x="0" y="0" width="90" height="50" rx="6" fill="#D71920" />
                <rect x="10" y="10" width="70" height="12" rx="2" fill="#ffffff" opacity="0.25" />
                <rect x="10" y="28" width="70" height="12" rx="2" fill="#ffffff" opacity="0.25" />
              </g>
              <rect x="30" y="255" width="340" height="8" rx="4" fill="#062B68" opacity="0.15" />
              <g transform="translate(240,60)" opacity="0.9">
                <path d="M0 20 L60 0 L60 40 Z" fill="#0B4EA2" />
                <rect x="-10" y="10" width="10" height="20" fill="#0B4EA2" />
              </g>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
