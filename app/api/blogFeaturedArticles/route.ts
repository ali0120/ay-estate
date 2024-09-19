import { NextResponse } from "next/server";
import { blogFeaturedArticles } from "@/app/ui/(components)/blog/data/blogFeaturedArticles";

export async function GET(request: Request) {
  // Parse the query parameters from the request URL
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const defaultCategory = "success-story";

  // If a category is provided, filter the articles based on the category
  if (category) {
    const filteredArticles = blogFeaturedArticles.filter(
      (article) => article.category.toLowerCase() === category.toLowerCase()
    );
    return NextResponse.json(filteredArticles);
  }

  // If no category is provided, return articles from the default category
  const defaultArticles = blogFeaturedArticles.filter(
    (article) =>
      article.category.toLowerCase() === defaultCategory.toLowerCase()
  );
 
  return NextResponse.json(defaultArticles);
}