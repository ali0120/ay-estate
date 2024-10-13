import { Metadata } from 'next';
import RecentArticlesHeader from '@/app/ui/(components)/RecentArticles/RecentArticlesHeader';
import ArticlesListings from '@/app/ui/(components)/RecentArticles/ArticlesListings';
import { recentArticlePageMetadata } from '@/app/metaDataConfig';
import { fetchBlogRecentArticles } from '@/app/helper/services/blog.api';

// Define the metadata for the page
export const metadata: Metadata = recentArticlePageMetadata;

// Fetch recent articles on the server side
async function fetchRecentArticles(page: number) {
  return await fetchBlogRecentArticles(`${page}`);
}

const Page = async ({ searchParams }: { searchParams: { pn?: string } }) => {
  const pageNumber = searchParams.pn ? parseInt(searchParams.pn) : 1;
  const initialArticles = await fetchRecentArticles(pageNumber);

  return (
    <>
      <RecentArticlesHeader />
      <ArticlesListings initialArticles={initialArticles} />
    </>
  );
}

export default Page;
