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

const Page = async () => {
    const initialPage = 1; // You can change this to dynamically get the page number if needed
    const initialArticles = await fetchRecentArticles(initialPage);

    return (
        <>
            <RecentArticlesHeader />
            <ArticlesListings initialArticles={initialArticles} />
        </>
    );
}

export default Page;
