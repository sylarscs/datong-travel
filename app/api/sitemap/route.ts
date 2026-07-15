import { NextResponse } from "next/server";
import { getAllContent } from "@/lib/content";

const BASE_URL = "https://datong-travel.vercel.app";

export async function GET() {
  const guides = getAllContent("guides");
  const attractions = getAllContent("attractions");
  const itineraries = getAllContent("itineraries");

  const staticPages = [
    { url: `${BASE_URL}`, priority: "1.0", changefreq: "weekly" },
    { url: `${BASE_URL}/transportation`, priority: "0.8", changefreq: "monthly" },
    { url: `${BASE_URL}/practical-info`, priority: "0.8", changefreq: "monthly" },
    { url: `${BASE_URL}/about`, priority: "0.6", changefreq: "monthly" },
    { url: `${BASE_URL}/guides`, priority: "0.9", changefreq: "weekly" },
    { url: `${BASE_URL}/attractions`, priority: "0.9", changefreq: "weekly" },
    { url: `${BASE_URL}/itineraries`, priority: "0.9", changefreq: "weekly" },
  ];

  const allGuides = guides.map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    priority: "0.8",
    changefreq: "monthly",
    lastmod: g.frontmatter.updatedAt || g.frontmatter.publishedAt,
  }));

  const allAttractions = attractions.map((a) => ({
    url: `${BASE_URL}/attractions/${a.slug}`,
    priority: "0.8",
    changefreq: "monthly",
    lastmod: a.frontmatter.updatedAt || a.frontmatter.publishedAt,
  }));

  const allItineraries = itineraries.map((i) => ({
    url: `${BASE_URL}/itineraries/${i.slug}`,
    priority: "0.8",
    changefreq: "monthly",
    lastmod: i.frontmatter.updatedAt || i.frontmatter.publishedAt,
  }));

  const allUrls = [...staticPages, ...allGuides, ...allAttractions, ...allItineraries];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>${
      (page as any).lastmod
        ? `\n    <lastmod>${(page as any).lastmod}</lastmod>`
        : ""
    }
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
