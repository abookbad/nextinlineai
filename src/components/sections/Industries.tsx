import Container from "@/components/core/Container";
import Section from "@/components/core/Section";
import Reveal from "@/components/effects/Reveal";
import { industries as industriesCopy } from "@/lib/copy";

const iconMap: Record<string, React.ReactNode> = {
  scissors: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4L8.12 15.88M14.47 14.48L20 20" />
    </svg>
  ),
  sun: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ),
};

export default function Industries() {
  return (
    <Section id="industries" className="pt-8">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--nl-text)] sm:text-4xl">
            {industriesCopy.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {industriesCopy.items.map((item) => (
            <Reveal key={item.title}>
              <div className="glass sheen glass-ring flex items-start gap-4 rounded-[var(--radius-xl)] p-4 sm:p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 text-[var(--nl-green)]" aria-hidden="true">
                  {iconMap[item.icon]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[rgba(0,0,0,0.95)]">{item.title}</h3>
                  <p className="mt-1 text-[rgba(0,0,0,0.85)]">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 mb-8 max-w-2xl text-center text-[0.9rem] sm:text-[0.95rem] text-[rgba(255,255,255,0.85)]">
          Different business?{' '}
          <a
            href="#contact"
            className="text-[var(--nl-blue)] underline-offset-4 hover:underline"
            aria-label="Schedule a call to discuss your business fit"
          >
            Schedule a quick call
          </a>{' '}
          to see if this is a good fit for you.
        </p>
      </Container>
    </Section>
  );
}


