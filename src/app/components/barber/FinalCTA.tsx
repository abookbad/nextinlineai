import Section from "../common/Section";
import Container from "../common/Container";
import { Button } from "@/components/ui/Button";
import TrackedLink from "../common/TrackedLink";

export default function FinalCTA() {
  return (
    <Section>
      <Container className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center">
        <h2 className="text-2xl font-semibold text-white">Never miss another booking.</h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <TrackedLink
            href="/book"
            prefetch
            data-analytics-id="cta-final-book"
            analytics={{ eventName: "cta_click", payload: { location: "final" } }}
          >
            <Button className="h-11 px-6 text-base" aria-label="Book your demo">Book Your Demo</Button>
          </TrackedLink>
          <a
            href="mailto:hello@yourdomain.com"
            className="text-base text-white underline-offset-4 hover:underline"
          >
            hello@yourdomain.com
          </a>
        </div>
      </Container>
    </Section>
  );
}


