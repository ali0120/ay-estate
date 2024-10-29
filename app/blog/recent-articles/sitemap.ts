import { numberToWords } from "@/utils/numberToWords";
import { refactorTitleToSlug } from "@/utils/refactorTitle";
import { wordToNumber } from "@/utils/wordToNumber";

interface SitemapParams {
  id: number;
}

interface Blog {
  id: string;
  title: string;
  updated_at?: string;
  created_at?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateSitemaps() {
  // Fetch the total number of blogs
  const response = await fetch(`${baseUrl}/api/blogRecentArticles`);
  const { totalArticles } = await response.json(); // Get totalArticles from the API response
  // Calculate the number of sitemaps needed (50000 blogs per sitemap)
  const blogsPerSitemap = 10;
  const numberOfSitemaps = Math.ceil(totalArticles / blogsPerSitemap);
  
  // Generate an array of sitemap objects
  const sitemaps = Array.from({ length: numberOfSitemaps }, (_, index) => ({
    id: numberToWords(index + 1),
  }));
  
  return sitemaps;
}

export default async function sitemap({ id }: SitemapParams) {
  const numericId = wordToNumber[id]; // Convert the id from words to number
  if (numericId === undefined) {
    throw new Error(`Invalid id parameter: ${id}`);
  }
  const pageNumber = numericId; 
  
  // Fetch paginated blog data using the page number and limit
  const response = await fetch(`${baseUrl}/api/blogRecentArticles?pn=${pageNumber}`);
  const { articles } = await response.json(); // Get paginated articles from the API
  
  const blogPaths = articles.map(
    (blog: Blog) => ({
      url: `${baseUrl}/blog/recent-articles/${refactorTitleToSlug(blog.title)}`,
      lastModified: blog.updated_at || blog.created_at || new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    })
  );

  return blogPaths;
}
