import { properties } from "../ui/(components)/listings/data/properties";

interface SitemapParams {
  id: number;
}

const baseUrl = "https://ay-estate-two.vercel.app";

export async function generateSitemaps() {
  const propertiesPerSitemap = 10;
  const totalProperties = properties.length; // Total number of properties

  // Calculate how many sitemaps (pages) are needed
  const numberOfSitemaps = Math.ceil(totalProperties / propertiesPerSitemap);

  // Generate an array of sitemaps with ids [0, 1, 2, ...]
  const sitemaps = Array.from({ length: numberOfSitemaps }, (_, index) => ({
    id: index, 
  }));
  
  return sitemaps; 
}

export default async function sitemap({ id }: SitemapParams) {
  const propertiesPerPage = 10;
  const startIndex = id * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;

  // Get a slice of properties for the current page
  const currentProperties = properties.slice(startIndex, endIndex);
  const propertyPaths = currentProperties.map((property) => ({
    url: `${baseUrl}/listings/${property.details.type}`,
    lastModified: new Date().toISOString(),
    changefreq: "daily",
    priority: 0.7,
  }));

  return propertyPaths;
}
