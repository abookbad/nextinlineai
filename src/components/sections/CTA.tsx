import Container from "@/components/core/Container";
import Section from "@/components/core/Section";
import { finalCta as finalCopy } from "@/lib/copy";
import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <Section id="contact" className="pt-8">
      <Container>
        <div className="glass sheen glass-ring mx-auto max-w-3xl rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-black sm:text-3xl">{finalCopy.title}</h2>
          <p className="mt-3 text-black/70">{finalCopy.sub}</p>
          <div className="mt-6 flex justify-center">
            <Button variant="primary">{finalCopy.button}</Button>
          </div>
          <p className="mt-4 text-xs text-black/60">Contact: <a className="underline" href="mailto:hello@nextinlineai.com">hello@nextinlineai.com</a></p>
        </div>
      </Container>
    </Section>
  );
}


