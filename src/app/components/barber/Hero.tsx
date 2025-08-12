import Image from "next/image";
import Link from "next/link";
import Container from "../common/Container";
import Section from "../common/Section";
import { Button } from "@/components/ui/Button";
import TrackedLink from "../common/TrackedLink";
import type { BarberContent } from "@/content/barber";

type Props = { content: BarberContent["hero"] };

export default function Hero({ content }: Props) {
  return (
    <Section className="pt-10 sm:pt-16">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {content.headline}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            {content.sub}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <TrackedLink
              href={content.ctas.primaryHref}
              prefetch
              data-analytics-id="cta-hero-primary"
              analytics={{ eventName: "cta_click", payload: { location: "hero", label: "Book Your Demo" } }}
            >
              <Button className="h-11 px-6 text-base" aria-label="Book your demo">
                Book Your Demo
              </Button>
            </TrackedLink>
            <Link href={content.ctas.secondaryHref} scroll data-analytics-id="cta-hero-secondary" aria-label="Scroll to how it works">
              <Button variant="ghost" className="h-11 px-6 text-base text-white border-white/30 hover:bg-white/10">
                How it works
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-6 opacity-80">
            <span className="text-xs uppercase tracking-wide text-white/70">Trusted by local shops</span>
            <div className="h-6 w-px bg-white/20" />
            <div className="flex items-center gap-3 text-white/70 text-xs">
              <span>Fast setup</span>
              <span>•</span>
              <span>24/7 AI</span>
              <span>•</span>
              <span>CRM included</span>
            </div>
          </div>
        </div>
        <div className="relative">
          {content.heroImage && (
            <Image
              src={content.heroImage}
              alt="AI receptionist on phone"
              width={600}
              height={700}
              priority
              className="mx-auto h-auto w-full max-w-md rounded-3xl border border-white/20 shadow-2xl"
            />
          )}
        </div>
      </Container>
    </Section>
  );
}


