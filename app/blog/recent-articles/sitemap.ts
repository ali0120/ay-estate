interface SitemapParams {
  id: number;
}

interface Blog {
  id: string;
  updated_at?: string;
  created_at?: string;
}

const baseUrl = "https://ay-estate-two.vercel.app";

export async function generateSitemaps() {
  // Fetch the total number of blogs
  const response = await fetch(`${baseUrl}/api/blogRecentArticles`);
  const { totalArticles } = await response.json(); // Get totalArticles from the API response
  // Calculate the number of sitemaps needed (50000 blogs per sitemap)
  const blogsPerSitemap = 10;
  const numberOfSitemaps = Math.ceil(totalArticles / blogsPerSitemap);
  
  // Generate an array of sitemap objects
  const sitemaps = Array.from({ length: numberOfSitemaps }, (_, index) => ({
    id: index,
  }));
  
  return sitemaps;
}

export default async function sitemap({ id }: SitemapParams) {
  const pageNumber = id + 1; // Assuming page number starts from 1, adjust the id to match that
  
  // Fetch paginated blog data using the page number and limit
  const response = await fetch(`${baseUrl}/api/blogRecentArticles?pn=${pageNumber}`);
  const { articles } = await response.json(); // Get paginated articles from the API
  
  const blogPaths = articles.map(
    (blog: Blog) => ({
      url: `/blog/recent-articles/${blog.id}`,
      lastModified: blog.updated_at || blog.created_at || new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    })
  );

  return blogPaths;
}
