import Section from "../common/Section";
import Container from "../common/Container";

export default function PainPromise({ pains }: { pains: string[] }) {
  return (
    <Section>
      <Container className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-white">The painful problems</h2>
          <ul className="mt-4 space-y-3">
            {pains.map((p) => (
              <li key={p} className="flex items-start gap-3 text-white/90">
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-[var(--nl-blue)]" aria-hidden />
                <span className="text-base">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <p className="text-white/90">
            Answer every call, book instantly, send reminders, and keep your calendar full — without lifting a finger.
          </p>
        </div>
      </Container>
    </Section>
  );
}


