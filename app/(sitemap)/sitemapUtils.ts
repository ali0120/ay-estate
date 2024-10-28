import { numberToWords } from "@/utils/numberToWords";
import { properties } from "../ui/(components)/listings/data/properties";
interface Sitemap {
  id: number;
  url: string;
}

export async function generateSitemaps(): Promise<Sitemap[]> {
  const propertiesPerSitemap = 10;
  const blogsPerSitemap = 10;

  // Generate property sitemaps
  const totalProperties = properties.length;
  const numberOfPropertySitemaps = Math.ceil(
    totalProperties / propertiesPerSitemap
  );
  const propertySitemaps: Sitemap[] = Array.from(
    { length: numberOfPropertySitemaps },
    (_, index) => ({
      id: index,
      url: `${process.env.NEXT_WEBSITE_URL}/luxury-villa-listings/sitemap/${numberToWords(index + 1)}.xml`,
    })
  );

  const response = await fetch(
    `${process.env.NEXT_WEBSITE_URL}/api/blogRecentArticles`
  );
  const { totalArticles } = await response.json(); // Get totalArticles from the API response

  const numberOfBlogSitemaps = Math.ceil(totalArticles / blogsPerSitemap);
  const blogSitemaps: Sitemap[] = Array.from(
    { length: numberOfBlogSitemaps },
    (_, index) => ({
      id: index,
      url: `${process.env.NEXT_WEBSITE_URL}/blog/recent-articles/sitemap/${numberToWords(index + 1)}.xml`,
    })
  );

  // Combine property and blog sitemaps
  const allSitemaps = [...propertySitemaps, ...blogSitemaps];

  return allSitemaps;
}

export type SitemapURL = string;

export async function buildSitemapIndex(
  sitemaps: SitemapURL[]
): Promise<string> {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  for (const sitemapURL of sitemaps) {
    xml += "<sitemap>";
    xml += `<loc>${sitemapURL}</loc>`;
    xml += "</sitemap>";
  }

  xml += "</sitemapindex>";
  return xml;
}
