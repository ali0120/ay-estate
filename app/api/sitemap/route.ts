import { properties } from "@/app/ui/(components)/listings/data/properties";
import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const generateSitemapXML = (urls: string[]) => {
  const xmlUrls = urls
    .map(
      (url) => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${xmlUrls}
    </urlset>`;
};

export async function GET() {

  const categories = [
    { name: "Success Stories", value: "success-stories" },
    { name: "Invest Strategies", value: "invest-strategies" },
    { name: "Tips", value: "tips" },
  ];

  const categoryUrls = categories.map(
    (category) => `/blog?category=${category.value}`
  );

  // Fetch dynamic pages
  const response = await fetch(`${baseUrl}/api/blogRecentArticles`);
  const blogs = await response.json();

  if (!Array.isArray(blogs)) {
    return NextResponse.json({ error: "Invalid blogs data" }, { status: 500 });
  }

  const blogPaths = blogs.map(
    (blog: { id: string }) => `/blog/recent-article/${blog.id}`
  );

  const listingsPaths = properties.map(
    (property) => `/luxury-villa-listings/${property.details.type}`
  );

  const staticPaths = [
    "/",
    "/luxury-villa-listings",
    "/blog",
    "/blog/recent-articles",
    "/about-ayestate-creative-team",
    "/contact-ayestate-excellent-customer-service",
    "/faqs",
  ];

  const allUrls = [
    ...staticPaths,
    ...categoryUrls,
    ...blogPaths,
    ...listingsPaths,
  ];

  const sitemapXML = generateSitemapXML(allUrls);

  return NextResponse.json(sitemapXML, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
