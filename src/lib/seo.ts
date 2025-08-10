import type { Metadata } from "next";
import { seo as copySeo, brand } from "@/lib/copy";

export function baseUrl(): string {
  if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  return "https://nextinline.ai";
}

export function generateSiteMetadata(): Metadata {
  const url = baseUrl();
  return {
    metadataBase: new URL(url),
    title: copySeo.title,
    description: copySeo.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: copySeo.title,
      description: copySeo.description,
      url,
      siteName: brand.name,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: copySeo.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: copySeo.title,
      description: copySeo.description,
      images: ["/opengraph-image"],
    },
    icons: {
      icon: "/favicon.ico",
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
      viewportFit: "cover",
    },
  };
}


