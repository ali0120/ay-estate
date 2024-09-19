import { NextResponse } from "next/server";
import { blogRecentArticles } from "@/app/ui/(components)/blog/data/blogRecentArticles";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("pn") || "1"); // Default to page 1
  const limit = parseInt(searchParams.get("limit") || "9"); // Default limit of 9 articles

  // Calculate the start and end index for the articles
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
 
  // Slice the blogRecentArticles array to get the articles for the current page
  const paginatedArticles = blogRecentArticles.slice(startIndex, endIndex);

  return NextResponse.json({
    page,
    limit,
    totalArticles: blogRecentArticles.length,
    totalPages: Math.ceil(blogRecentArticles.length / limit),
    articles: paginatedArticles,
  });
}
