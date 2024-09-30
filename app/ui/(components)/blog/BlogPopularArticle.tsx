"use client"
import { BackgroundImage, Box, Button, Flex } from '@mantine/core'
import { Carousel } from '@mantine/carousel';
import EllipseIcon from '@/public/svg/Ellipse.svg'
import { useQuery } from '@tanstack/react-query';
import LoadingPartially from '../../loading';
import { IBlogArticle } from '@/app/helper/interfaces/blog.interface';
import { fetchBlogPopularArticles } from '@/app/helper/services/blog.api';
import '@mantine/carousel/styles.css';

const BlogPopularArticle = () => {
    const { data: popularArticles, isLoading, error } = useQuery({
        queryKey: ["popularArticles"],
        queryFn: () => fetchBlogPopularArticles(),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    if (isLoading) return <LoadingPartially />;
    if (error) return <p>Error fetching articles</p>;

    return (
        <section className='bg-White' >
            <Box className='px-[20px] xl:px-[100px] pt-[30px] lg:pt-0 pb-[75px] lg:pb-[100px]'>
                <Flex align={'center'} justify={'space-between'}  className='mb-[30px] md:mb-[50px]'>
                    <div className='w-[65%] md:w-[70%]' >
                        <h2 className='text-[16px] lg:text-[32px] text-DarkJungleGreentwo font-soraBold'>Popular Articles</h2>
                        <p className='text-[12px] lg:text-[18px] text-RomanSilver font-soraRegular mt-[8px] lg:mt-[12px]' >We provide blog that help start your career on AyEstate</p>
                    </div>
                    <Flex justify={'flex-end'} className='w-[30%]' >
                        <Button variant='default'className='h-[30px] md:h-[47px] px-[12px] md:px-[16px] text-[14px] md:text-[18px] text-ChineseBlack font-soraSemiBold !border-YellowGreen lg:!border-ChineseBlack'>View All</Button>
                    </Flex>
                </Flex>
                <Flex visibleFrom='sm' className='gap-[30px] flex-col md:flex-row'>
                    {popularArticles.map((article: IBlogArticle) => {
                        return (
                            <BackgroundImage
                                key={article.id}
                                src={article.image?.src}
                                radius={16}
                                h={588}
                                className="md:w-[50%] !h-[317px] lg:!h-[502px]"
                                pos={"relative"}
                            >
                                <Box className="text-White absolute w-full p-[16px] md:p-[24px] bottom-0">
                                    <Flex align={"center"} className="text-[12px] gap-[10px] lg:text-[18px] font-soraRegular md:font-soraSemiBold opacity-[70%] lg:opacity-1">
                                        <p>{article.date}</p>
                                        <EllipseIcon height={4} width={4} />
                                        <p>{article.category.replace(/-/g, ' ').split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                                    </Flex>
                                    <h3 className="mt-[12px] text-[14px] lg:text-[28px] font-soraBold leading-[18.2px] lg:leading-[36.4px]">
                                        {article.title}
                                    </h3>
                                    <p className='text-[12px] lg:text-[18px] mt-[8px] font-soraSemiBold leading-[15.6px] lg:leading-[32.4px] opacity-[70%] whitespace-nowrap overflow-hidden text-ellipsis' >{article.description}</p>
                                </Box>
                            </BackgroundImage>
                        )
                    })}
                </Flex>
                <Flex hiddenFrom='sm' className='gap-[30px] flex-col lg:flex-row'>
                    <Carousel
                        withIndicators
                        height={317}
                        loop
                        slideGap="5px"
                        classNames={{
                            controls: 'opacity-0',
                            indicators: '!bottom-[-16px]',
                            indicator: '!h-[8px] !w-[8px] !bg-[#F3F3F3] data-[active]:!bg-[#B7E08A]'
                        }}>
                        {popularArticles.map((article: IBlogArticle) => {
                            return (
                                <Carousel.Slide key={article.id}>
                                    <BackgroundImage
                                        src={article.image?.src}
                                        radius={16}
                                        h={588}
                                        className="md:w-[50%] !h-[317px] lg:!h-[502px]"
                                        pos={"relative"}
                                    >
                                        <Box className="text-White absolute w-full p-[16px] md:p-[24px] bottom-0">
                                            <Flex align={"center"} className="text-[12px] gap-[10px] lg:text-[18px] font-soraRegular md:font-soraRegular opacity-[70%] lg:opacity-1">
                                                <p>{article.date}</p>
                                                <EllipseIcon height={4} width={4} />
                                                <p>{article.category.replace(/-/g, ' ').split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                                            </Flex>
                                            <h3 className="mt-[6px] md:mt-[12px] text-[14px] lg:text-[28px] font-soraBold leading-[18.2px] lg:leading-[36.4px]">
                                                {article.title}
                                            </h3>
                                            <p className='text-[12px] lg:text-[18px] mt-[8px] font-soraRegular md:font-soraSemiBold leading-[15.6px] lg:leading-[32.4px] opacity-[70%] whitespace-nowrap overflow-hidden text-ellipsis' >{article.description}</p>
                                        </Box>
                                    </BackgroundImage>
                                </Carousel.Slide>
                            )
                        })}
                    </Carousel>
                </Flex>
            </Box>
        </section>
    )
}

export default BlogPopularArticle