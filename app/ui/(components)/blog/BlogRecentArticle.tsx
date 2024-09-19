"use client"
import { Box, Button, Flex } from '@mantine/core'
import { useQuery } from '@tanstack/react-query';
import LoadingPartially from '../../loading';
import { IBlogArticle } from '@/app/helper/interfaces/blog.interface';
import { fetchBlogRecentArticles } from '@/app/helper/services/blog.api';
import ArticleCard from './ArticleCard';
import { useRouter } from 'next/navigation';

const BlogRecentArticle = () => {
    const router = useRouter();
    const { data: popularArticles, isLoading, error } = useQuery({
        queryKey: ["recentArticles"],
        queryFn: () => fetchBlogRecentArticles(),
    });

    if (isLoading) return <LoadingPartially />;
    if (error) return <p>Error fetching articles</p>;

    return (
        <section className='bg-White' >
            <Box px={{ base: 20, md: 100 }} pb={{ base: 100, md: 100 }}>
                <Flex align={'center'} justify={'space-between'} mb={{ base: 30, md: 50 }}>
                    <div className='w-[70%]' >
                        <h2 className='text-[16px] lg:text-[32px] text-DarkJungleGreentwo font-soraBold'>Recent Articles</h2>
                        <p className='text-[12px] lg:text-[18px] text-RomanSilver font-soraRegular mt-[8px] lg:mt-[12px]' >Newest update article from AyEstate</p>
                    </div>
                    <Flex justify={'flex-end'} className='w-[30%]' >
                        <Button h={{base:30,sm:47}} variant='default' px={{ base: 12, sm: 16 }} py={{ base: 7.2, sm: 12 }} className='text-[14px] md:text-[18px] text-ChineseBlack font-soraSemiBold !border-YellowGreen lg:!border-ChineseBlack'
                            onClick={() => router.push('/blog/recent-articles')}
                        >View All</Button>
                    </Flex>
                </Flex>
                <Flex gap={{ base: 20, md: 29 }} wrap={'wrap'} >
                    {popularArticles?.articles?.slice(0, 3).map((article: IBlogArticle) => {
                        return (
                            <ArticleCard key={article.id} article={article} />
                        )
                    })}
                </Flex>
            </Box>
        </section>
    )
}

export default BlogRecentArticle