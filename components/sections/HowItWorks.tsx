import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Comment ça marche"
          title="Importer depuis la Chine n'a jamais été aussi simple."
        />

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div
            aria-hidden
            className="absolute left-5 top-2 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-blue via-amber to-red"
          />
          <ol className="space-y-10">
            {HOW_IT_WORKS.map((item) => (
              <li key={item.step} className="relative flex items-start gap-5">
                <span className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-white">
                  {item.step}
                </span>
                <p className="pt-2 font-display text-lg font-semibold text-navy">
                  {item.title}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
