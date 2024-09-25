"use client"
import { BackgroundImage, Box, Flex } from '@mantine/core'
import EllipseIcon from '@/public/svg/Ellipse.svg'
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { fetchBlogFeaturedArticles } from '@/app/helper/services/blog.api';
import LoadingPartially from '../../loading';
import Image from 'next/image';
import { IBlogArticle } from '@/app/helper/interfaces/blog.interface';

const BlogFeaturedArticle = () => {
    const searchParams = useSearchParams();

    const { data: featuredArticles, isLoading, error } = useQuery({
        queryKey: ["featuredArticles", searchParams.toString()],
        queryFn: () => fetchBlogFeaturedArticles(searchParams.get("category") || ''),
    });

    if (isLoading) return <LoadingPartially />;
    if (error) return <p>Error fetching articles</p>;

    const firstArticle = featuredArticles?.[0]; // First item
    const remainingArticles = featuredArticles?.slice(1); // Items after the first

    return (
        <section className='bg-White' >
            <Box className='p-[20px] xl:p-[100px] pt-[50px] lg:pt-[100px] lg:pb-[100px]'>
            <Flex className='gap-[30px] flex-col md:flex-row'>
                    {firstArticle && (
                        <BackgroundImage
                            src={firstArticle.image?.src} // Image of the first article
                            radius={16}
                            h={588}
                            className="md:w-[57%] !h-[317px] md:!h-[350px] lg:!h-[588px]"
                            pos={"relative"}
                        >
                            <Box className="text-White absolute w-full p-[16px] lg:p-[24px] bottom-0">
                                <Flex className="text-[12px] gap-[10px] items-center lg:text-[18px] font-soraRegular md:font-soraSemiBold opacity-[70%] lg:opacity-1">
                                    <p>{firstArticle.date}</p>
                                    <EllipseIcon height={4} width={4} />
                                    <p>{firstArticle.category.replace(/-/g, ' ').split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                                </Flex>
                                <p className="mt-[12px] text-[14px] lg:text-[28px] font-soraBold leading-[18.2px] lg:leading-[36.4px]">
                                    {firstArticle.title}
                                </p>
                            </Box>
                        </BackgroundImage>
                    )}
                    <Flex className="md:w-[42.975%] flex-col gap-[20px] md:gap-[30px]">
                        {remainingArticles?.map((article: IBlogArticle) => (
                            <Flex key={article.id} className='items-center gap-[12px] md:gap-[24px]'>
                                <Image src={article.image.src} width={190} height={176} alt={article.category} className='w-[30%] lg:w-auto lg:h-[176px]' />
                                <div>
                                    <Flex className="items-center gap-[12px] text-[12px] lg:text-[16px] text-RomanSilver font-soraRegular md:font-soraSemiBold" >
                                        <p>{article.date}</p>
                                        <EllipseIcon height={4} width={4} />
                                        <p>{article.category.replace(/-/g, ' ').split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p> {/* Category */}
                                    </Flex>
                                    <h3 className="mt-[12px] text-[14px] lg:text-[20px] font-soraBold leading-[18.2px] lg:leading-[26px] lg:max-w-[310px]">
                                        {article.title}
                                    </h3>
                                </div>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Box>
        </section>
    )
}

export default BlogFeaturedArticle