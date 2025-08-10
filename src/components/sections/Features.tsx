import { features as featuresCopy } from "@/lib/copy";
import Container from "@/components/core/Container";
import Section from "@/components/core/Section";
import Reveal from "@/components/effects/Reveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import HoverGlow from "@/components/effects/HoverGlow";
import LiveVoiceCallDemo from "@/components/sections/parts/LiveVoiceCallDemo";

const iconMap: Record<string, React.ReactNode> = {
  phone: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 4.18 2 2 0 0 1 5.1 2h3a2 2 0 0 1 2 1.72 12.44 12.44 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l1.36-1.36a2 2 0 0 1 2.11-.45 12.44 12.44 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  "calendar-check": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <polyline points="9 15 11.5 17.5 15 14" />
    </svg>
  ),
  "bell-ring": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M13 21a2 2 0 0 1-2 0" />
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M21 5l-1.5 1.5M3 5l1.5 1.5" />
    </svg>
  ),
};

export default function Features() {
  return (
    <Section id="features">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--nl-text)] sm:text-4xl">
            {featuresCopy.title}
          </h2>
          <p className="mt-3 text-white">{featuresCopy.subtitle}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresCopy.items.map((item) => (
            <Reveal key={item.title}>
              <HoverGlow>
                <Card className="group glass-feature p-5 sm:p-8">
                  <CardHeader className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[var(--nl-blue)] shadow-[0_0_0_1px_rgba(39,110,241,0.15),0_0_14px_rgba(39,110,241,0.12)] transition-transform duration-200 group-hover:-rotate-3" aria-hidden="true">
                      {iconMap[item.icon]}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </HoverGlow>
            </Reveal>
          ))}
        </div>

        {/* Live voice demo under 24/7 AI Receptionist */}
        <Reveal>
          <div className="mx-auto mt-10 max-w-5xl">
            <LiveVoiceCallDemo />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}


