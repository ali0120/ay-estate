import { NextResponse } from "next/server";
import {  buildSitemapIndex, generateSitemaps } from "./../sitemapUtils";

export async function GET() {
  try {
    // Generate sitemaps
    const dynamicSitemaps = await generateSitemaps();

    // Combine static and dynamic sitemaps
    const sitemaps = [
      `${process.env.NEXT_WEBSITE_URL}/sitemap.xml`,
      ...dynamicSitemaps.map((sitemap) => sitemap.url),
    ];

    const sitemapIndexXML = await buildSitemapIndex(sitemaps);
    console.log("Generated sitemap index XML:", sitemapIndexXML); // Debugging log
    return new NextResponse(sitemapIndexXML, {
      headers: {
        "Content-Type": "application/xml",
        "Content-Length": Buffer.byteLength(sitemapIndexXML).toString(),
      },
    });
  } catch (error) {
    console.error("Error generating sitemap index:", error);
    return NextResponse.error();
  }
}
