"use client"; 
import BlogHeader from '../ui/(components)/blog/BlogHeader';
import BlogFeaturedArticle from '../ui/(components)/blog/BlogFeaturedArticle';
import BlogPopularArticle from '../ui/(components)/blog/BlogPopularArticle';
import BlogRecentArticle from '../ui/(components)/blog/BlogRecentArticle';
import { useQueries } from '@tanstack/react-query';
import { fetchBlogRecentArticles, fetchBlogPopularArticles, fetchBlogFeaturedArticles } from '@/app/helper/services/blog.api';
import { usePathname } from 'next/navigation';
import LoadingPartially from '../ui/loading';

interface Article {
    id: number; 
    title: string;
    content: string;
}

interface BlogPageProps {
    initialFeaturedArticles: Article[];
    initialPopularArticles: Article[];
    initialRecentArticles: Article[];
}

const BlogPage: React.FC<BlogPageProps> = ({ initialFeaturedArticles, initialPopularArticles, initialRecentArticles }) => {
    const pathname = usePathname();
    const segments = pathname.split('/');
    const lastSegment = segments.length > 2 ? segments[segments.length - 1] : 'success-stories';

    const queries = useQueries({
        queries: [
            {
                queryKey: ['featuredArticles', lastSegment],
                queryFn: () => fetchBlogFeaturedArticles(lastSegment),
                initialData: initialFeaturedArticles, // Use initial data
            },
            {
                queryKey: ['popularArticles'],
                queryFn: fetchBlogPopularArticles,
                initialData: initialPopularArticles, // Use initial data
                staleTime: 1000 * 60 * 5, // 5 minutes
            },
            {
                queryKey: ['recentArticles'],
                queryFn: () => fetchBlogRecentArticles('1'),
                initialData: initialRecentArticles, // Use initial data
                staleTime: 1000 * 60 * 5, // 5 minutes
            },
        ],
    });

    const [
        { data: featuredArticles, isLoading: isLoadingFeatured, error: errorFeatured },
        { data: popularArticles, isLoading: isLoadingPopular, error: errorPopular },
        { data: recentArticles, isLoading: isLoadingRecent, error: errorRecent },
    ] = queries;

    // Handle loading and error states
    if (isLoadingRecent || isLoadingPopular || isLoadingFeatured) {
        return <LoadingPartially />;
    }

    if (errorRecent || errorPopular || errorFeatured) {
        return <div>Error loading articles!</div>;
    }
 
    return (
        <>
            <BlogHeader />
            <BlogFeaturedArticle articles={featuredArticles} />
            <BlogPopularArticle articles={popularArticles} />
            <BlogRecentArticle  articles={recentArticles} />
        </>
    );
};

export default BlogPage;
