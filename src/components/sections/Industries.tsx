import Container from "@/components/core/Container";
import Section from "@/components/core/Section";
import Reveal from "@/components/effects/Reveal";
import { industries as industriesCopy } from "@/lib/copy";
import Image from "next/image";
import Link from "next/link";

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
              <Link href={item.href || "#"} className="group glass sheen glass-ring relative block h-64 overflow-hidden rounded-[var(--radius-xl)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.3)] sm:h-72 focus:outline-none focus:ring-2 focus:ring-white/50">
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={`${item.title} business`}
                  fill
                  className="object-cover animate-[breathing_12s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                
                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white shadow-[0_0_0_1px_rgba(255,255,255,0.2)]">
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/90 sm:text-base">{item.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 mb-8 max-w-2xl text-center text-[0.9rem] sm:text-[0.95rem] text-[rgba(255,255,255,0.85)]">
          Different business?{' '}
          <a
            href="/book"
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


