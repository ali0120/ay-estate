import { NextResponse } from 'next/server';
import { getServerSideSitemap } from 'next-sitemap';

export async function GET() {
  const baseUrl = 'https://ay-estate-two.vercel.app';

  const fields = [
    { loc: `${baseUrl}/`, lastmod: new Date().toISOString() },
  ];

  const sitemap = await getServerSideSitemap(fields);

  return NextResponse.json(sitemap);
}
