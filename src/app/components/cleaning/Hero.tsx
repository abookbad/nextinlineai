import Image from "next/image";
import Container from "../common/Container";
import Section from "../common/Section";
import { Button } from "@/components/ui/Button";
import TrackedLink from "../common/TrackedLink";
import type { CleaningContent } from "@/content/cleaning";

type Props = { content: CleaningContent["hero"] };

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
              data-analytics-id="cta-hero-primary-cleaning"
              analytics={{ eventName: "cta_click", payload: { location: "hero", label: "Book Your Demo" } }}
            >
              <Button className="h-11 px-6 text-base" aria-label="Book your demo">
                Book Your Demo
              </Button>
            </TrackedLink>
            <a href={content.ctas.secondaryHref} className="inline-block">
              <Button variant="ghost" className="h-11 px-6 text-base text-white border-white/30 hover:bg-white/10">
                See How It Works
              </Button>
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 opacity-80">
            <span className="text-xs uppercase tracking-wide text-white/70">Used by growing cleaning teams</span>
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
              alt="Window and solar cleaning crew"
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


