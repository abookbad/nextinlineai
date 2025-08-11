import Container from "@/components/core/Container";
import Section from "@/components/core/Section";
import { finalCta as finalCopy } from "@/lib/copy";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function CTA() {
  return (
    <Section id="contact" className="pt-8">
      <Container>
        <div className="glass sheen glass-ring relative mx-auto max-w-3xl overflow-hidden rounded-2xl p-8 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_0_48px_rgba(0,115,255,0.4)]">
          {/* Background Image with Zoom Animation */}
          <Image
            src="/images/aiDontSleep.jpeg"
            alt="AI technology background"
            fill
            className="object-cover animate-[zoom_10s_ease-in-out_infinite]"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
          
          {/* Enhanced Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/45" />
          
          {/* Blur Effect */}
          <div className="absolute inset-0 backdrop-blur-[2px]" />
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{finalCopy.title}</h2>
            <p className="mt-3 text-white/90">{finalCopy.sub}</p>
            <div className="mt-6 flex justify-center">
              <Button variant="primary">{finalCopy.button}</Button>
            </div>
            <p className="mt-4 text-xs text-white/80">Contact: <a className="underline hover:text-white" href="mailto:hello@nextinlineai.com">hello@nextinlineai.com</a></p>
          </div>
        </div>
      </Container>
    </Section>
  );
}


