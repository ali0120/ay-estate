"use client"
import { IBlogArticle } from '@/app/helper/interfaces/blog.interface'
import { fetchBlogRecentArticles } from '@/app/helper/services/blog.api';
import { Box, Flex, Pagination } from '@mantine/core'
import { useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import LoadingPartially from '../../loading';
import ArticleCard from '../blog/ArticleCard';

const ArticlesListings = () => {
    const searchParams = useSearchParams();
    const router = useRouter();  // To manipulate URL

    const currentPage = Number(searchParams.get('pn')) || 1;

    const { data: popularArticles, isLoading, error } = useQuery({
        queryKey: ["recentArticles", searchParams.toString()],
        queryFn: () => fetchBlogRecentArticles(`${currentPage}` ?? ''),
        staleTime: 1000 * 60 * 5, // 5 minutes
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
            <Box px={{ base: 20, md: 100 }} pt={{ base: 20, md: 65 }}>
                <Flex gap={29} wrap={'wrap'} >
                    {popularArticles?.articles?.map((article: IBlogArticle) => {
                        return (
                            <ArticleCard key={article.id} article={article} />
                        )
                    })}
                </Flex>
                <Flex justify='center' pt={50} pb={{ base: 50, md: 100 }}>
                    <Pagination
                        total={popularArticles.totalPages}
                        boundaries={3}
                        value={currentPage}
                        onChange={handlePageChange}
                        defaultValue={1} radius={8} color="#B7E08A"
                        className='text-[14px] text-RomanSilver font-soraSemiBold'
                        classNames={{
                            control: 'border-none text-RomanSilver data-[active]:!text-ChineseBlack',
                        }}
                    />
                </Flex>
            </Box>
        </section>
    )
}

export default ArticlesListings