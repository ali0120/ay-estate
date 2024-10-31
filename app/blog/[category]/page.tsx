import { notFound } from 'next/navigation';
import BlogPage from './../BlogPage';
import { fetchBlogRecentArticles, fetchBlogPopularArticles, fetchBlogFeaturedArticles } from '@/app/helper/services/blog.api';

export const revalidate = 60

const VALID_CATEGORIES = ['invest-strategies', 'success-stories', 'success-story', 'tips'];

async function fetchBlogData(pathname: string) {

    const [featuredArticles, popularArticles, recentArticles] = await Promise.all([
        fetchBlogFeaturedArticles(pathname),
        fetchBlogPopularArticles(),
        fetchBlogRecentArticles('1'),
    ]);

    return {
        initialFeaturedArticles: featuredArticles,
        initialPopularArticles: popularArticles,
        initialRecentArticles: recentArticles,
    };
}

export default async function Page({ params }: { params: { category: string } }) {
    const category = params.category;
    if (!VALID_CATEGORIES.includes(category)) {
        return notFound(); 
    }
    const { initialFeaturedArticles, initialPopularArticles, initialRecentArticles } = await fetchBlogData(category);

    return (
        <>
            <BlogPage
                initialFeaturedArticles={initialFeaturedArticles}
                initialPopularArticles={initialPopularArticles}
                initialRecentArticles={initialRecentArticles}
            />
        </>
    );
}
