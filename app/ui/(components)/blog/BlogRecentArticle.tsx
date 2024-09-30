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
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    if (isLoading) return <LoadingPartially />;
    if (error) return <p>Error fetching articles</p>;

    return (
        <section className='bg-White' >
            <Box className='px-[20px] xl:px-[100px] pb-[50px] lg:pb-[100px]'>
                <Flex align={'center'} justify={'space-between'} className='pb-[30px] lg:pb-[50px]'>
                    <div className='w-[70%]' >
                        <h2 className='text-[16px] lg:text-[32px] text-DarkJungleGreentwo font-soraBold'>Recent Articles</h2>
                        <p className='text-[12px] lg:text-[18px] text-RomanSilver font-soraRegular mt-[8px] lg:mt-[12px]' >Newest update article from AyEstate</p>
                    </div>
                    <Flex justify={'flex-end'} className='w-[30%]' >
                        <Button variant='default'className='h-[30px] md:h-[47px] px-[12px] md:px-[16px] text-[14px] md:text-[18px] text-ChineseBlack font-soraSemiBold !border-YellowGreen lg:!border-ChineseBlack'
                            onClick={() => router.push('/blog/recent-articles')}
                        >View All</Button>
                    </Flex>
                </Flex>
                <Flex wrap={'wrap'} className='gap-[20px] md:gap-[29px]' >
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