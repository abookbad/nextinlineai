import type { Metadata } from "next";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import Container from "@/components/core/Container";
import Section from "@/components/core/Section";
import { baseUrl } from "@/lib/seo";
import Reveal from "@/components/effects/Reveal";
import ScrollToCalendarButton from "@/app/book/scroll-to-calendar-button";

export const metadata: Metadata = {
  title: "Book a Demo | Next In Line AI",
  description:
    "Pick a time that works. 20‑minute demo of the website + CRM + AI receptionist.",
  alternates: {
    canonical: new URL("/book", baseUrl()).toString(),
  },
  openGraph: {
    title: "Book a Demo | Next In Line AI",
    description:
      "Pick a time that works. 20‑minute demo of the website + CRM + AI receptionist.",
    url: new URL("/book", baseUrl()).toString(),
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Demo | Next In Line AI",
    description:
      "Pick a time that works. 20‑minute demo of the website + CRM + AI receptionist.",
    images: ["/opengraph-image"],
  },
};

export default function BookPage() {
  const calendarUrl = process.env.NEXT_PUBLIC_GHL_EMBED_URL;
  const videoUrl = process.env.NEXT_PUBLIC_BOOK_VIDEO_URL;

  return (
    <div className="font-sans">
      <a href="#calendar" className="sr-only focus:not-sr-only">Skip to calendar</a>
      <Navbar />
      <main>
        {/* Hero / Intro */}
        <Section id="book" className="pt-12 sm:pt-16 pb-8 sm:pb-12">
          <Container className="max-w-6xl">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <Reveal>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-[var(--nl-text)] sm:text-4xl">
                    Book a 20‑minute demo
                  </h1>
                  <p className="mt-3 text-lg text-white">
                    See how the website, CRM, and 24/7 AI receptionist work together.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="glass rounded-md px-3 py-2 text-neutral-900">
                      Never miss a booking — 24/7 AI phone receptionist
                    </li>
                    <li className="glass rounded-md px-3 py-2 text-neutral-900">
                      Website + CRM live in 72 hours
                    </li>
                    <li className="glass rounded-md px-3 py-2 text-neutral-900">
                      Works with your current tools (Google, iCal, Stripe, GHL)
                    </li>
                  </ul>
                  {/* Removed the call-to-action button on the book page */}
                </div>
              </Reveal>

              {videoUrl ? (
                <Reveal>
                  <div className="glass glass-ring sheen overflow-hidden rounded-2xl">
                    <div className="aspect-video w-full">
                      <iframe
                        src={videoUrl}
                        title="Demo video"
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </Reveal>
              ) : (
                <Reveal>
                  <div className="glass glass-ring rounded-2xl p-6 text-sm text-white/80">
                    Optional demo video can appear here. Set NEXT_PUBLIC_BOOK_VIDEO_URL to show it.
                  </div>
                </Reveal>
              )}
            </div>
          </Container>
        </Section>

        {/* Calendar */}
        <Section id="calendar" className="scroll-mt-24 pt-8 sm:pt-10">
          <Container className="max-w-6xl">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-[var(--nl-text)] sm:text-3xl">
                Pick a time that works
              </h2>
            </Reveal>
            <div className="mt-4">
              {calendarUrl ? (
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/10 backdrop-blur-sm">
                  <iframe
                    src={calendarUrl}
                    title="Book a demo calendar"
                    className="w-full bg-white h-[70vh] min-h-[720px] max-h-[960px]"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="glass rounded-2xl border border-white/10 p-6 text-white/90">
                  The calendar could not be loaded. Please provide NEXT_PUBLIC_GHL_EMBED_URL.
                </div>
              )}
            </div>
            <p className="mt-6 text-center text-sm text-white/80">
              Built for busy owners. Live in 72 hours.
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}


