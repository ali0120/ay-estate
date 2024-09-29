export async function fetchBlogFeaturedArticles(category?: string) {
  const response = await fetch(
    `/api/blogFeaturedArticles${category ? `?category=${category}` : ""}`
  );
  const articles = await response.json();
  return articles;
}

export async function fetchBlogPopularArticles() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/blogPopularArticles`);
  const articles = await response.json();
  return articles;
}

export async function fetchBlogRecentArticles(pageNumber: string = "1") {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/blogRecentArticles?pn=${pageNumber}`);
  const articles = await response.json();
  return articles;
}

export async function fetchBlogArticleDetails(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/blogArticleDetails?id=${id}`);
  const article = await response.json();
  return article;
}
