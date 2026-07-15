import { Metadata } from "next";

interface PageMeta {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedAt?: string;
  updatedAt?: string;
}

export function generatePageMetadata(page: PageMeta): Metadata {
  const url = `https://datong-travel.vercel.app/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "article",
      ...(page.publishedAt && { publishedTime: page.publishedAt }),
      ...(page.updatedAt && { modifiedTime: page.updatedAt }),
      ...(page.image && {
        images: [{ url: page.image, width: 1200, height: 630 }],
      }),
    },
  };
}

/**
 * Generate JSON-LD structured data for an Article
 */
export function generateArticleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedAt: string;
  updatedAt: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image || "https://datong-travel.vercel.app/og-default.jpg",
    url: `https://datong-travel.vercel.app/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.authorName || "Datong Travel Guide Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Datong Travel Guide",
    },
  };
}

/**
 * Generate JSON-LD for Breadcrumb
 */
export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate JSON-LD for FAQ
 */
export function generateFaqJsonLd(questions: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}
