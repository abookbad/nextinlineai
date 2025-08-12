import Section from "../common/Section";
import Container from "../common/Container";

type Testimonial = { quote: string; author: string; shop: string; avatar?: string };

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-semibold text-white">What shops say</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {items.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-white/20 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-white/60" aria-hidden />
                <blockquote className="text-white/90">“{t.quote}”</blockquote>
              </div>
              <figcaption className="mt-3 text-sm text-white/70">
                {t.author} — {t.shop}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}


