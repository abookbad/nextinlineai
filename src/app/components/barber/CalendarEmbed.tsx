import Section from "../common/Section";
import Container from "../common/Container";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CalendarEmbed({ src }: { src?: string }) {
  const calendarSrc = src || process.env.NEXT_PUBLIC_GHL_CALENDAR_EMBED || "";
  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-semibold text-white">Ready to see it for your shop?</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-white/20 bg-white/5">
          {calendarSrc ? (
            <iframe
              title="Booking calendar"
              src={calendarSrc}
              className="h-[720px] w-full"
              loading="lazy"
            />
          ) : (
            <div className="p-6 text-white/80">Calendar embed coming soon.</div>
          )}
        </div>
        <div className="mt-4">
          <Link href="/book" prefetch>
            <Button className="h-11 px-6 text-base" aria-label="Book your demo">Book Your Demo</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}


