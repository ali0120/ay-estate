import { properties } from "@/app/ui/(components)/listings/data/properties";
import { NextResponse } from "next/server";

const generateSitemapXML = (urls: string[]) => {
  const baseUrl = "https://ay-estate-two.vercel.app";
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
  const baseUrl = "https://ay-estate-two.vercel.app";

  // Define categories
  const categories = [
    { name: "Success Stories", value: "success-stories" },
    { name: "Invest Strategies", value: "invest-strategies" },
    { name: "Tips", value: "tips" },
  ];

  // Generate category-based URLs
  const categoryUrls = categories.map(
    (category) => `/blog?category=${category.value}`
  );

  // Fetch dynamic pages
  const response = await fetch(`${baseUrl}/api/blogRecentArticles`);
  const blogs = await response.json();

  // Extract the paths for each blog
  const blogPaths = blogs.map(
    (blog: { id: string }) => `/blog/recent-article/${blog.id}`
  );
  const listingsPaths = properties.map(
    (property) => `/listings/${property.details.type}`
  );

  // Include static pages if needed
  const staticPaths = [
    "/",
    "/listings",
    "/blog",
    "blog/recent-articles",
    "/about-us",
    "/contact-us",
    "/faqs",
  ];

  // Combine static and dynamic URLs
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
