import { numberToWords } from "@/utils/numberToWords";
import { properties } from "../ui/(components)/listings/data/properties";
import { wordToNumber } from "@/utils/wordToNumber";
interface SitemapParams {
  id: number;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateSitemaps() {
  const propertiesPerSitemap = 10;
  const totalProperties = properties.length; // Total number of properties

  // Calculate how many sitemaps (pages) are needed
  const numberOfSitemaps = Math.ceil(totalProperties / propertiesPerSitemap);

  // Generate an array of sitemaps with ids [0, 1, 2, ...]
  const sitemaps = Array.from({ length: numberOfSitemaps }, (_, index) => ({
    id: numberToWords(index + 1),
  }));
  return sitemaps;
}

export default async function sitemap({ id }: SitemapParams) {
  const numericId = wordToNumber[id];
  if (numericId === undefined) {
    throw new Error(`Invalid id parameter: ${id}`);
  }
  const propertiesPerPage = 10;
  const startIndex = (numericId - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;

  // Get a slice of properties for the current page
  const currentProperties = properties.slice(startIndex, endIndex);
  const propertyPaths = currentProperties.map((property) => ({
    url: `${baseUrl}/luxury-villa-listings/${property.details.type}`,
    lastModified: new Date().toISOString(),
    changefreq: "daily",
    priority: 0.7,
  }));

  return propertyPaths;
}
