import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Barbershop Knowledge Base (Demo)",
  description:
    "This page contains all the information our voice AI and booking assistant use for barbershop calls. It’s written in plain text for easy crawling and indexing.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/kb/barbers" },
};

const faqPairs: { q: string; a: string }[] = [
  { q: "What services do you offer?", a: "Fades, tapers, scissor cuts, buzz cuts, kids cuts, beard trims, hot towel shaves, designs, enhancements, and add‑ons like shampoo, black mask, and eyebrows." },
  { q: "How do I book an appointment?", a: "I can book it for you now. What day works best—today, tomorrow, or later this week?" },
  { q: "Do you accept walk‑ins?", a: "We recommend appointments. Walk‑ins are welcome when a barber is open, but availability isn’t guaranteed." },
  { q: "What are your hours?", a: "Mon–Fri 9am–7pm, Sat 8am–6pm, Sun 10am–4pm." },
  { q: "Where are you located?", a: "123 Main St, Suite B, Your City. Next to Corner Coffee. Parking in rear lot or street front." },
  { q: "What’s the price for a regular haircut?", a: "Classic Haircut is $35 for 30 minutes. Fade/Taper is $40 for 45 minutes." },
  { q: "Do you cut kids’ hair?", a: "Yes, Kids Cut (under 12) is $28 for 30 minutes." },
  { q: "Can I book a haircut and beard together?", a: "Yes. “Haircut + Beard Trim” is $55 for 60 minutes." },
  { q: "Do you do hot towel shaves?", a: "Yes, Traditional Hot Towel Shave is $35 for 30 minutes." },
  { q: "Which barber should I choose?", a: "All barbers are experienced. Request a name or I’ll book first available." },
  { q: "How far in advance should I book?", a: "Same‑day fills up; 1–3 days ahead is safest; weekends fill fastest." },
  { q: "What’s your cancellation policy?", a: "Cancel or reschedule ≥ 4 hours before; late/no‑shows may be charged 50%." },
  { q: "What if I’m running late?", a: "10‑minute grace period; may shorten or reschedule after that." },
  { q: "Do you take cash and cards?", a: "Yes—cash, cards, Apple Pay, Google Pay." },
  { q: "Do you offer student or military discounts?", a: "10% off Mon–Thu with ID." },
  { q: "Do you do designs or hair art?", a: "Yes. Design add‑on starts at $10 depending on complexity." },
  { q: "Do you cut all hair types?", a: "Yes, all hair types and textures." },
  { q: "Do you offer shampoo/wash?", a: "Yes, add Shampoo & Rinse for $8 (+5 min)." },
  { q: "Do you use enhancements?", a: "Yes, Enhancement Line‑Up add‑on $8." },
  { q: "What age for kids cuts?", a: "Ages 3–12; under 3 depends on comfort." },
  { q: "Can I bring a guest?", a: "One guest per client; please be respectful." },
  { q: "Are gift cards available?", a: "Yes, digital and physical." },
  { q: "Do you accept tips?", a: "Tips appreciated; cash or card." },
  { q: "Do you offer mobile/house calls?", a: "Not for this demo location." },
  { q: "How can I reschedule?", a: "Tell me a new day/time and I’ll move it." },
  { q: "Do you have same‑day availability?", a: "Often mornings; I can check—morning, afternoon, or evening?" },
];

export default function Page() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Next In Line Barbers (Demo)',
    url: '/kb/barbers',
    sameAs: [] as string[],
    telephone: '(555) 123‑4567',
  };

  const localBizSchema = {
    '@context': 'https://schema.org',
    '@type': 'Barbershop',
    name: 'Next In Line Barbers (Demo)',
    telephone: '(555) 123‑4567',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main St, Suite B',
      addressLocality: 'Your City',
      addressRegion: 'ST',
      postalCode: '00000',
      addressCountry: 'US',
    },
    openingHours: [
      'Mo-Fr 09:00-19:00',
      'Sa 08:00-18:00',
      'Su 10:00-16:00',
    ],
    paymentAccepted: ['Cash', 'CreditCard', 'ApplePay', 'GooglePay'],
    areaServed: ['Downtown', 'Midtown', 'Westside'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqPairs.map((p) => ({
      '@type': 'Question',
      name: p.q,
      acceptedAnswer: { '@type': 'Answer', text: p.a },
    })),
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 text-[rgba(255,255,255,0.92)]">
      <h1 className="text-3xl font-bold text-white">Barbershop Knowledge Base (Demo)</h1>
      <p className="mt-3 text-white/80">
        This page contains all the information our voice AI and booking assistant use for barbershop calls. It’s written in plain text for easy crawling and indexing.
      </p>

      <nav aria-label="Quick Links" className="mt-6">
        <h2 className="sr-only">Quick Links</h2>
        <ul className="list-disc pl-5 text-white/90">
          <li><a className="underline underline-offset-4 hover:text-white" href="#overview">Overview</a></li>
          <li><a className="underline underline-offset-4 hover:text-white" href="#location-hours">Location & Hours</a></li>
          <li><a className="underline underline-offset-4 hover:text-white" href="#pricing-services">Pricing & Services</a></li>
          <li><a className="underline underline-offset-4 hover:text-white" href="#memberships">Memberships</a></li>
          <li><a className="underline underline-offset-4 hover:text-white" href="#policies">Policies</a></li>
          <li><a className="underline underline-offset-4 hover:text-white" href="#faqs">FAQs</a></li>
        </ul>
      </nav>

      <section id="overview" className="mt-10">
        <h2 className="text-2xl font-semibold text-white">Overview</h2>
        <dl className="mt-4">
          <div className="mt-2">
            <dt className="font-medium text-white">Business name:</dt>
            <dd>Next In Line Barbers (Demo)</dd>
          </div>
          <div className="mt-2">
            <dt className="font-medium text-white">Tagline:</dt>
            <dd>Smart bookings. More clients. Less stress.</dd>
          </div>
          <div className="mt-2">
            <dt className="font-medium text-white">Phone:</dt>
            <dd>(555) 123‑4567</dd>
          </div>
          <div className="mt-2">
            <dt className="font-medium text-white">Booking:</dt>
            <dd><a href="/book" className="underline underline-offset-4 hover:text-white">/book</a> (same‑site link or external URL)</dd>
          </div>
          <div className="mt-2">
            <dt className="font-medium text-white">Payments:</dt>
            <dd>Cash, major cards, Apple Pay, Google Pay.</dd>
          </div>
          <div className="mt-2">
            <dt className="font-medium text-white">Neighborhoods served:</dt>
            <dd>Downtown, Midtown, Westside.</dd>
          </div>
          <div className="mt-2">
            <dt className="font-medium text-white">Primary goal for agents:</dt>
            <dd>Offer 2–3 time options and book the earliest that matches caller’s preference.</dd>
          </div>
          <div className="mt-2">
            <dt className="font-medium text-white">Voice & tone:</dt>
            <dd>Friendly, concise, confident.</dd>
          </div>
        </dl>
      </section>

      <section id="location-hours" className="mt-10">
        <h2 className="text-2xl font-semibold text-white">Location & Hours</h2>
        <article className="mt-2">
          <address className="not-italic">
            123 Main St, Suite B, Your City, ST 00000
            Parking: Free lot behind the shop; street parking out front.
          </address>
          <p className="mt-2"><strong>Hours:</strong> Mon–Fri 9:00am–7:00pm Sat 8:00am–6:00pm Sun 10:00am–4:00pm</p>
        </article>
      </section>

      <section id="pricing-services" className="mt-10">
        <h2 className="text-2xl font-semibold text-white">Pricing & Services</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/20 text-white">
                <th scope="col" className="py-2 pr-4">Service</th>
                <th scope="col" className="py-2 pr-4">Description</th>
                <th scope="col" className="py-2 pr-4">Duration</th>
                <th scope="col" className="py-2 pr-4">Price</th>
                <th scope="col" className="py-2 pr-4">Add‑ons</th>
                <th scope="col" className="py-2 pr-0">Notes</th>
              </tr>
            </thead>
            <tbody className="align-top text-white/90">
              {[
                ["Classic Haircut","Scissor/clipper, neckline finish","30 min","$35","Shampoo (+$8), Eyebrows (+$8), Enhancement (+$8)","Good for trims/maintaining shape"],
                ["Fade/Taper","Skin/low/mid/high fade, shear work","45 min","$40","Shampoo (+$8), Eyebrows (+$8), Enhancement (+$8)","Extra time for detail"],
                ["Buzz Cut","Single‑guard all over, edge‑up","20 min","$25","Beard Line‑Up (+$10)","Fast & clean"],
                ["Kids Cut (Under 12)","Age‑friendly cut & style","30 min","$28","Design (+$10+)","Parent/guardian required"],
                ["Haircut + Beard Trim","Full cut + beard shape/line‑up","60 min","$55","Hot Towel (+$5), Enhancement (+$8)","Most‑booked combo"],
                ["Beard Trim","Clippers/scissors, line‑up","20 min","$20","Hot Towel (+$5), Enhancement (+$8)","Neck shave included"],
                ["Beard Sculpt & Hot Towel","Detailed sculpt, hot towel, finish","30 min","$28","Enhancement (+$8)","Relaxing service"],
                ["Traditional Hot Towel Shave","Straight razor, lather, hot towel","30 min","$35","—","Requires ID if under 18"],
                ["Edge‑Up / Line‑Up","Hairline, sides, nape only","15 min","$18","Enhancement (+$8)","No full haircut"],
                ["Design / Graphics (Add‑On)","Lines/parts/artwork","+10–20 min","+$10+","—","Price by complexity"],
                ["Shampoo & Rinse (Add‑On)","Cleanse + scalp massage","+5 min","+$8","—","Add to any haircut"],
                ["Eyebrows (Add‑On)","Trim/shape with trimmer/razor","+5 min","+$8","—","Add to any service"],
                ["Enhancement Line‑Up (Add‑On)","Temporary fibers/spray","+5 min","+$8","—","Lasts 1–2 days"],
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-white/10 last:border-0">
                  {row.map((cell, i) => (
                    <td key={i} className={"py-2 pr-4" + (i === row.length - 1 ? " pr-0" : "")}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="memberships" className="mt-10">
        <h2 className="text-2xl font-semibold text-white">Memberships</h2>
        <article className="mt-2 space-y-2">
          <p>Monthly Cut (2x): Two Classic Haircuts per month — $60 (save $10).</p>
          <p>Beard Care (2x): Two Beard Trims per month — $30.</p>
          <p>Both memberships are non‑transferable.</p>
        </article>
      </section>

      <section id="policies" className="mt-10">
        <h2 className="text-2xl font-semibold text-white">Policies</h2>
        <article className="mt-2 space-y-2">
          <p>Cancellation: Cancel or reschedule ≥ 4 hours before appointment; late cancels/no‑shows may be charged 50%.</p>
          <p>Late arrivals: 10‑minute grace period, then we may shorten or reschedule.</p>
          <p>Walk‑ins: Welcome when a barber is free; appointments recommended.</p>
          <p>Accessibility: Wheelchair accessible; let us know any accommodations.</p>
          <p>Sanitation: Tools sanitized between clients; fresh capes; handwashing between services.</p>
        </article>
      </section>

      <section id="faqs" className="mt-10">
        <h2 className="text-2xl font-semibold text-white">FAQs</h2>
        <div className="mt-4 space-y-4">
          {faqPairs.map((p, i) => (
            <article key={i} className="border-b border-white/10 pb-4">
              <h3 className="text-lg font-medium text-white">{p.q}</h3>
              <p className="mt-1 text-white/90">{p.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-white/15 bg-white/5 p-6">
        <h2 className="text-xl font-semibold text-white">Ready to book?</h2>
        <p className="mt-2 text-white/80">This is a demo page for AI/voice assistant testing.</p>
        <div className="mt-4">
          <a href="/book" className="inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            Book Now
          </a>
        </div>
      </section>

      <Script id="jsonld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Script id="jsonld-localbiz" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }} />
      <Script id="jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}


