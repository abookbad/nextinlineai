import Section from "../common/Section";
import Container from "../common/Container";

type QA = { q: string; a: string };

export default function FAQ({ items }: { items: QA[] }) {
  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-semibold text-white">FAQ</h2>
        <div className="mt-6 space-y-3">
          {items.map((item, idx) => (
            <details key={idx} className="rounded-xl border border-white/15 bg-white/5 p-4">
              <summary className="cursor-pointer list-none text-base font-medium text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                {item.q}
              </summary>
              <div className="mt-2 text-sm text-white/80">{item.a}</div>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}


