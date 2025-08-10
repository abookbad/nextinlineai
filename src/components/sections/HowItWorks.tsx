import Container from "@/components/core/Container";
import Section from "@/components/core/Section";
import Reveal from "@/components/effects/Reveal";
import { howItWorks as howCopy } from "@/lib/copy";

export default function HowItWorks() {
  return (
    <Section id="how" className="pt-8">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--nl-text)] sm:text-4xl">
            {howCopy.title}
          </h2>
        </div>
        <div className="relative mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {howCopy.steps.map((step, idx) => (
            <Reveal key={step.title}>
              <div className="glass glass-ring rounded-[var(--radius-xl)] p-4 sm:p-6 text-center">
                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/60 text-sm font-semibold text-[var(--nl-blue)]" aria-hidden="true">
                  {idx + 1}
                </div>
                <h3 className="text-base font-semibold text-[rgba(0,0,0,0.95)]">{step.title}</h3>
                <p className="mt-1 text-sm text-[rgba(0,0,0,0.85)]">{step.description}</p>
              </div>
            </Reveal>
          ))}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--nl-blue)]/20 to-transparent sm:block" />
        </div>
      </Container>
    </Section>
  );
}


