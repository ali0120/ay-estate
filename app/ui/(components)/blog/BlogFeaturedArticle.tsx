import { BackgroundImage, Flex } from '@mantine/core'
import EllipseIcon from '@/public/svg/Ellipse.svg'
import Image from 'next/image';
import { IBlogArticle } from '@/app/helper/interfaces/blog.interface';
import '@mantine/core/styles/BackgroundImage.css';
interface BlogFeaturedArticleProps {
    articles: IBlogArticle[]; // Accept articles as a prop
}

const BlogFeaturedArticle: React.FC<BlogFeaturedArticleProps> = ({ articles }) => {
    const firstArticle = articles?.[0]; // First item
    const remainingArticles = articles?.slice(1);

    return (
        <section className='bg-White' >
            <div className='p-[20px] xl:p-[100px] pt-[50px] lg:pt-[100px] lg:pb-[100px]'>
            <Flex className='gap-[30px] flex-col md:flex-row'>
                    {firstArticle && (
                        <BackgroundImage
                            src={firstArticle.image?.src} // Image of the first article
                            radius={16}
                            h={588}
                            className="md:!w-[57%] !h-[317px] md:!h-[350px] lg:!h-[588px]"
                            pos={"relative"}
                        >
                            <div className="text-White absolute w-full p-[16px] lg:p-[24px] bottom-0">
                                <Flex className="text-[12px] gap-[10px] items-center lg:text-[18px] font-soraRegular md:font-soraSemiBold opacity-[70%] lg:opacity-1">
                                    <p>{firstArticle.date}</p>
                                    <EllipseIcon height={4} width={4} />
                                    <p>{firstArticle.category.replace(/-/g, ' ').split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                                </Flex>
                                <p className="mt-[12px] text-[14px] lg:text-[28px] font-soraBold leading-[18.2px] lg:leading-[36.4px]">
                                    {firstArticle.title}
                                </p>
                            </div>
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
            </div>
        </section>
    )
}

export default BlogFeaturedArticle