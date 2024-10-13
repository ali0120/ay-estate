import BlogPage from './../BlogPage';
import { fetchBlogRecentArticles, fetchBlogPopularArticles, fetchBlogFeaturedArticles } from '@/app/helper/services/blog.api';

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
