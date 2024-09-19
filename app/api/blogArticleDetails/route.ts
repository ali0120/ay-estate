import { NextResponse } from "next/server";
import { blogArticleDetails } from "@/app/ui/(components)/blog/data/blogArticleDetails";

export async function GET() {
  // const url = new URL(request.url);
  // const id = url.searchParams.get("id");
  const defaultId = "1"
  const article = blogArticleDetails.find((article) => article.id === defaultId);

  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  return NextResponse.json(article);
}
