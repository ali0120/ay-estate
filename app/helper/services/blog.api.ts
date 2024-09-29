export async function fetchBlogFeaturedArticles(category?: string) {
  const response = await fetch(
    `/api/blogFeaturedArticles${category ? `?category=${category}` : ""}`
  );
  const articles = await response.json();
  return articles;
}

export async function fetchBlogPopularArticles() {
  const response = await fetch(`/api/blogPopularArticles`);
  const articles = await response.json();
  return articles;
}

export async function fetchBlogRecentArticles(pageNumber: string = "1") {
  const response = await fetch(`/api/blogRecentArticles?pn=${pageNumber}`);
  const articles = await response.json();
  return articles;
}

export async function fetchBlogArticleDetails(id: string) {
  const response = await fetch(`/api/blogArticleDetails?id=${id}`);
  const article = await response.json();
  return article;
}
