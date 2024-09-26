import { Metadata } from 'next'
import {
    dehydrate,
    HydrationBoundary,
    QueryClient
} from '@tanstack/react-query'
import BlogHeader from '../ui/(components)/blog/BlogHeader'
import BlogFeaturedArticle from '../ui/(components)/blog/BlogFeaturedArticle'
import BlogPopularArticle from '../ui/(components)/blog/BlogPopularArticle'
import BlogRecentArticle from '../ui/(components)/blog/BlogRecentArticle'
import { fetchBlogRecentArticles } from '../helper/services/blog.api'
import { blogPageMetadata } from '../metaDataConfig'

export const metadata: Metadata = blogPageMetadata;

export default async function Home() {
    const queryClient = new QueryClient()
    // Prefetch recent articles
    await queryClient.prefetchQuery({
        queryKey: ['recentArticles'],
        queryFn: () => fetchBlogRecentArticles(),
    });

    return (
        <>
            <BlogHeader />
            <BlogFeaturedArticle />
            <BlogPopularArticle />
            <HydrationBoundary state={dehydrate(queryClient)}>
                <BlogRecentArticle />
            </HydrationBoundary>
        </>
    )
}

