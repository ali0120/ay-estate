import { Metadata } from 'next';
import RecentArticlesHeader from '@/app/ui/(components)/RecentArticles/RecentArticlesHeader'
import ArticlesListings from '@/app/ui/(components)/RecentArticles/ArticlesListings'
import { recentArticlePageMetadata } from '@/app/metaDataConfig';

export const metadata: Metadata = recentArticlePageMetadata;

const page = () => {
  return (
    <>
        <RecentArticlesHeader />
        <ArticlesListings />
    </>
  )
}

export default page