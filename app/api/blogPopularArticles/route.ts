import { NextResponse } from "next/server";
import { blogPopularArticles } from "@/app/ui/(components)/blog/data/blogPopularArticles";

export async function GET() {
  return NextResponse.json(blogPopularArticles);
}
