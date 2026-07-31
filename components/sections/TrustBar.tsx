import Container from "@/components/ui/Container";
import { TRUST_STATS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <section className="border-b border-black/5 bg-white">
      <Container className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4 sm:gap-6">
        {TRUST_STATS.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="font-display text-2xl font-bold text-navy sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
