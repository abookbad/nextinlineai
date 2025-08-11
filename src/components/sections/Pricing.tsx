import Container from "@/components/core/Container";
import Section from "@/components/core/Section";
import Reveal from "@/components/effects/Reveal";
import { pricing as pricingCopy } from "@/lib/copy";
import { Button } from "@/components/ui/Button";

export default function Pricing() {
  return (
    <Section id="pricing" className="pt-8">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--nl-text)] sm:text-4xl">
            {pricingCopy.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pricingCopy.plans.map((plan) => (
            <Reveal key={plan.title}>
              <div className="group glass glass-ring sheen flex h-full flex-col rounded-[var(--radius-xl)] p-4 sm:p-6 transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-[rgba(0,0,0,0.95)] text-center">{plan.title}</h3>
                {/* Title separator */}
                <div className="mt-3 h-px w-full bg-white/10" aria-hidden="true" />

                {/* Bullet features */}
                {Array.isArray((plan as unknown as { features?: string[] }).features) && (
                  <ul className="mt-4 space-y-2 text-left max-w-md mx-auto">
                    {(plan as unknown as { features: string[] }).features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-black/80">
                        <span
                          className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--nl-green)]/15 text-[var(--nl-green)] shadow-[0_0_0_1px_rgba(46,204,113,0.2),0_0_16px_rgba(46,204,113,0.2)] group-hover:animate-pulse"
                          aria-hidden="true"
                        >
                          {/* Lucide check icon (inline) */}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Bottom price highlight */}
                <div className="mt-6 flex justify-center">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-sm sm:text-base font-semibold text-[rgba(0,0,0,0.95)] ring-1 ring-[var(--nl-green)]/30 shadow-[0_8px_24px_rgba(46,204,113,0.18)]">
                    {plan.setup} | <span className="text-[var(--nl-green)]">{plan.monthly}</span>
                  </span>
                </div>

                <div className="mt-4 flex justify-center pt-2 mt-auto">
                  <Button variant="primary" className="sm:w-auto">{plan.cta}</Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Different business call-to-action */}
        <div className="mt-8 text-center">
          <p className="text-sm text-white/80 sm:text-base">
            Different business?{' '}
            <a
              href="#contact"
              className="text-[var(--nl-blue)] underline-offset-4 hover:underline transition-colors duration-200"
              aria-label="Schedule a call to discuss your business fit"
            >
              Schedule a quick call
            </a>{' '}
            to see if this is a good fit for you.
          </p>
        </div>
      </Container>
    </Section>
  );
}


