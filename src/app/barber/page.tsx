import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import StickyCTA from "../components/common/StickyCTA";
import {
  BarberHero,
  PainPromise,
  FeatureGrid,
  Workflow,
  Testimonials,
  ROINumbers,
  Pricing,
  FAQ,
  CalendarEmbed,
  FinalCTA,
} from "../components/barber";
import { barberContent } from "@/content/barber";
import { baseUrl } from "@/lib/seo";
import { buildFaqSchema, buildProductSchema, buildWebPageSchema } from "@/lib/schema";

export const revalidate = 3600;
export const runtime = "edge";

export const metadata: Metadata = {
  title: "Barbershop Booking System | AI Phone Receptionist & CRM | Next In Line AI",
  description:
    "Barbers: never miss a booking. AI phone receptionist, website, and CRM set up in 72 hours. Cut no-shows, get more reviews, and fill your chair.",
  openGraph: {
    title: "Barbershop Booking System | AI Phone Receptionist & CRM | Next In Line AI",
    description:
      "Barbers: never miss a booking. AI phone receptionist, website, and CRM set up in 72 hours. Cut no-shows, get more reviews, and fill your chair.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Next In Line AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbershop Booking System | AI Phone Receptionist & CRM | Next In Line AI",
    description:
      "Barbers: never miss a booking. AI phone receptionist, website, and CRM set up in 72 hours. Cut no-shows, get more reviews, and fill your chair.",
    images: ["/opengraph-image"],
  },
};

export default function BarberPage() {
  const url = `${baseUrl()}/barber`;
  const faqSchema = buildFaqSchema(barberContent.faq);
  const productSchema = buildProductSchema({
    url,
    name: "Barbershop Booking System",
    brandName: "Next In Line AI",
    description: metadata.description || "",
    priceRange: "$300–$700/month",
  });
  const webPageSchema = buildWebPageSchema({
    url,
    name: String(metadata.title),
    description: metadata.description || "",
  });

  return (
    <div className="font-sans">
      <link rel="preconnect" href={url} />
      <Navbar />
      <main>
        <BarberHero content={barberContent.hero} />
        <PainPromise pains={barberContent.pains} />
        <FeatureGrid features={barberContent.features} />
        <Workflow steps={barberContent.workflow} />
        <Testimonials items={barberContent.testimonials} />
        <ROINumbers avgCutPrice={barberContent.roi.avgCutPrice} bookingsPerMonthRange={barberContent.roi.bookingsPerMonthRange} />
        <Pricing pricing={barberContent.pricing} />
        <CalendarEmbed />
        <FAQ items={barberContent.faq} />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
      <Script
        id="jsonld-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="jsonld-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}


