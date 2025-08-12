export type JsonLd = Record<string, unknown>;

export function buildWebPageSchema(params: {
  url: string;
  name: string;
  description: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: params.url,
    name: params.name,
    description: params.description,
  };
}

export function buildProductSchema(params: {
  url: string;
  name: string;
  brandName: string;
  description: string;
  priceRange: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: params.name,
    url: params.url,
    description: params.description,
    brand: {
      '@type': 'Brand',
      name: params.brandName,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      highPrice: 700,
      lowPrice: 300,
      price: '300-700',
      availability: 'https://schema.org/InStock',
    },
  };
}

export function buildFaqSchema(faq: { q: string; a: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}


