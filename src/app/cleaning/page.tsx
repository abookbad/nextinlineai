import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import StickyCTA from "../components/common/StickyCTA";
import {
  CleaningHero,
  PainPromise,
  FeatureGrid,
  Workflow,
  Testimonials,
  ROINumbers,
  Pricing,
  FAQ,
  CalendarEmbed,
  FinalCTA,
} from "../components/cleaning";
import { cleaningContent } from "@/content/cleaning";
import { baseUrl } from "@/lib/seo";
import { buildFaqSchema, buildProductSchema, buildWebPageSchema } from "@/lib/schema";

export const revalidate = 3600;
export const runtime = "edge";

export const metadata: Metadata = {
  title: "Window & Solar Cleaning Booking System | AI Phone Receptionist & CRM | Next In Line AI",
  description:
    "Never miss another call. AI phone receptionist, website, and CRM for window & solar cleaning — live in 72 hours.",
  openGraph: {
    title: "Window & Solar Cleaning Booking System | AI Phone Receptionist & CRM | Next In Line AI",
    description:
      "Never miss another call. AI phone receptionist, website, and CRM for window & solar cleaning — live in 72 hours.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Next In Line AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Window & Solar Cleaning Booking System | AI Phone Receptionist & CRM | Next In Line AI",
    description:
      "Never miss another call. AI phone receptionist, website, and CRM for window & solar cleaning — live in 72 hours.",
    images: ["/opengraph-image"],
  },
};

export default function CleaningPage() {
  const url = `${baseUrl()}/cleaning`;
  const faqSchema = buildFaqSchema(cleaningContent.faq);
  const productSchema = buildProductSchema({
    url,
    name: "Window & Solar Cleaning System",
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
        <CleaningHero content={cleaningContent.hero} />
        <PainPromise pains={cleaningContent.pains} />
        <FeatureGrid features={cleaningContent.features} />
        <Workflow steps={cleaningContent.workflow} />
        <Testimonials items={cleaningContent.testimonials} />
        <ROINumbers avgJobValueRange={cleaningContent.roi.avgJobValueRange} extraJobsPerMonthRange={cleaningContent.roi.extraJobsPerMonthRange} />
        <Pricing pricing={cleaningContent.pricing} />
        <CalendarEmbed />
        <FAQ items={cleaningContent.faq} />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
      <Script id="jsonld-webpage-cleaning" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Script id="jsonld-product-cleaning" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Script id="jsonld-faq-cleaning" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}


