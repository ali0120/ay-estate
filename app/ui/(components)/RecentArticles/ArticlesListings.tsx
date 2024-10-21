"use client"
import { IBlogArticle } from '@/app/helper/interfaces/blog.interface'
import { fetchBlogRecentArticles } from '@/app/helper/services/blog.api';
import { Flex, Pagination } from '@mantine/core'
import { useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import LoadingPartially from '../../loading';
import ArticleCard from '../blog/ArticleCard';
import '@mantine/core/styles/Pagination.css';

interface ArticlesListingsProps {
    initialArticles: { articles: IBlogArticle[]; totalPages: number }; // Define the type for initial articles
}

const ArticlesListings: React.FC<ArticlesListingsProps> = ({ initialArticles }) => {
    const searchParams = useSearchParams();
    const router = useRouter();  // To manipulate URL

    const currentPage = Number(searchParams.get('pn')) || 1;

    const { data: popularArticles, isLoading, error } = useQuery({
        queryKey: ["recentArticles", currentPage],
        queryFn: () => fetchBlogRecentArticles(`${currentPage}`),
        initialData: initialArticles,
    });

    const handlePageChange = (page: number) => {
        // Set the `pn` search parameter
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('pn', page.toString());

        // Push the new URL with the updated search params
        router.push(`?${newSearchParams.toString()}`);
    };

    if (isLoading) return <LoadingPartially />;
    if (error) return <p>Error fetching articles</p>;

    return (
        <section className='bg-White' >
            <div className='px-[20px] xl:px-[100px] pt-[20px] lg:pt-[65px]'>
                <Flex gap={29} wrap={'wrap'} >
                    {popularArticles?.articles?.map((article: IBlogArticle) => {
                        return (
                            <ArticleCard key={article.id} article={article} />
                        )
                    })}
                </Flex>
                <Flex className='pb-[50px] lg:pb-[100px] pt-[50px] justify-center'>
                    <Pagination
                        total={popularArticles.totalPages}
                        boundaries={3}
                        value={currentPage}
                        onChange={handlePageChange}
                        defaultValue={1}
                        radius={8}
                        className='text-[14px] text-RomanSilver font-soraSemiBold'
                        classNames={{
                            control: '!text-RomanSilver !border-none !bg-GhostWhite data-[active]:!bg-YellowGreen data-[active]:!text-ChineseBlack w-[44px] !h-[44px]',
                        }}
                    />
                </Flex>
            </div>
        </section>
    )
}

export default ArticlesListings