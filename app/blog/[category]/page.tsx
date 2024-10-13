import { Metadata } from 'next'
import BlogPage from './../BlogPage'
import { blogPageMetadata } from '../../metaDataConfig'
import { fetchBlogRecentArticles, fetchBlogPopularArticles, fetchBlogFeaturedArticles } from '@/app/helper/services/blog.api';

export const metadata: Metadata = blogPageMetadata;

// Fetch data on the server side
async function fetchBlogData() {
    const lastSegment = 'success-stories';

    const [featuredArticles, popularArticles, recentArticles] = await Promise.all([
        fetchBlogFeaturedArticles(lastSegment),
        fetchBlogPopularArticles(),
        fetchBlogRecentArticles('1'),
    ]);

    return {
        initialFeaturedArticles: featuredArticles,
        initialPopularArticles: popularArticles,
        initialRecentArticles: recentArticles,
    };
}

export default async function Home() {
    // Fetch blog data
    const { initialFeaturedArticles, initialPopularArticles, initialRecentArticles } = await fetchBlogData();
    return (
        <>
        <BlogPage 
            initialFeaturedArticles={initialFeaturedArticles}
            initialPopularArticles={initialPopularArticles}
            initialRecentArticles={initialRecentArticles}
        />
    </>
    )
}

