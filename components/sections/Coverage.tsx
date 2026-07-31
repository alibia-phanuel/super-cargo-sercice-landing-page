import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { NETWORK_COUNTRIES } from "@/lib/constants";

export default function Coverage() {
  return (
    <section className="bg-navy py-24">
      <Container>
        <SectionHeading
          light
          eyebrow="Notre réseau"
          title="Un réseau international au service de vos achats"
        />

        <div className="mt-14 flex flex-col items-center gap-3">
          <div className="rounded-2xl bg-white/5 px-8 py-5 text-center">
            <p className="font-display text-xl font-bold text-amber">CHINE</p>
            <p className="mt-1 text-sm text-white/60">Guangzhou / Foshan</p>
          </div>
          <div aria-hidden className="h-10 w-px bg-gradient-to-b from-amber to-red" />
          <div className="rounded-2xl bg-white/5 px-8 py-5 text-center">
            <p className="font-display text-xl font-bold text-white">CAMEROUN</p>
            <p className="mt-1 text-sm text-white/60">Yaoundé / Douala</p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {NETWORK_COUNTRIES.map((entry) => (
            <div
              key={entry.country}
              className="rounded-xl border border-white/10 px-4 py-5 text-center"
            >
              <p className="text-sm font-semibold text-white">{entry.country}</p>
              <p className="mt-1 text-xs text-white/50">{entry.city}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
