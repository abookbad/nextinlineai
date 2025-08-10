import { hero as heroCopy } from "@/lib/copy";
import { Button } from "@/components/ui/Button";
import Container from "@/components/core/Container";
import Section from "@/components/core/Section";
import Reveal from "@/components/effects/Reveal";
import HeroVisual from "@/components/sections/parts/HeroVisual";

export default function Hero() {
  return (
    <Section id="home" className="relative overflow-visible pt-20 sm:pt-24">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 text-center md:order-1 md:text-left">
          <Reveal>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-[var(--nl-text)] sm:text-5xl">
              {heroCopy.h1}
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-4 max-w-prose text-lg text-white md:max-w-none md:pr-8">
              {heroCopy.sub}
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Button variant="primary">{heroCopy.ctaPrimary}</Button>
              <Button variant="glass">{heroCopy.ctaSecondary}</Button>
            </div>
          </Reveal>
        </div>
        <Reveal className="order-1 md:order-2">
          <HeroVisual />
        </Reveal>
      </Container>
    </Section>
  );
}


