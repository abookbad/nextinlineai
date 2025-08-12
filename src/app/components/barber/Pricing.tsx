import Section from "../common/Section";
import Container from "../common/Container";
import { Button } from "@/components/ui/Button";
import TrackedLink from "../common/TrackedLink";

export default function Pricing({ pricing }: { pricing: { setupRange: string; monthlyRange: string; guarantee: string; note?: string } }) {
  return (
    <Section>
      <Container className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6 text-white/90">
          <h2 className="text-2xl font-semibold text-white">Pricing & Guarantee</h2>
          <ul className="mt-4 space-y-2 text-white/90">
            <li><strong>Setup:</strong> {pricing.setupRange}</li>
            <li><strong>Monthly:</strong> {pricing.monthlyRange}</li>
            <li className="pt-2 text-white/80">{pricing.guarantee}</li>
            {pricing.note && <li className="text-white/80">{pricing.note}</li>}
          </ul>
          <div className="mt-5">
            <TrackedLink
              href="/book"
              prefetch
              data-analytics-id="cta-pricing"
              analytics={{ eventName: "cta_click", payload: { location: "pricing" } }}
            >
              <Button className="h-11 px-6 text-base" aria-label="Book your demo">Book Your Demo</Button>
            </TrackedLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}


