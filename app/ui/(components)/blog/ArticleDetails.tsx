import Image from "next/image";
import { IArticleDetails, IBlogArticle } from "@/app/helper/interfaces/blog.interface";
import { Button, Flex } from "@mantine/core";
import EllipseIcon from '@/public/svg/Ellipse.svg'
import RectangleIcon from '@/public/svg/Rectangle.svg'
import ArticleCard from "./ArticleCard";

const ArticleDetails = ({ article }: { article: IArticleDetails }) => {
   
    return (
        <div className='px-[20px] xl:px-[100px] pt-[50px] lg:pt-[120px]'>
            <div className="text-center">
                <Flex  align={'center'} justify={'center'} className="text-[12px] gap-[12px] lg:text-[16px] text-RomanSilver font-soraRegular md:font-soraSemiBold" >
                    <p>{article.date}</p>
                    <EllipseIcon height={4} width={4} fill={"#D4D7DF"} />
                    <p>{article.category?.replace(/-/g, ' ').split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                </Flex>
                <h1 className="text-[20px] lg:text-[48px] capitalize font-soraBold leading-[26px] lg:leading-[62.4px] mt-[24px] lg:mt-[30px] lg:w-[80%] m-auto" >{article.title}</h1>
                <p className="text-[14px] lg:text-[18px] text-RomanSilver font-soraRegular leading-[22.4px] lg:leading-[28.8px] mt-[12px] lg:mt-[6px] lg:w-[65%] m-auto" >{article.description}</p>
            </div>
            <Image src={article.image} alt={article.title} width={1240} height={660} className='w-full h-[260px] md:h-full max-h-[660px] rounded-[16px] my-[30px] lg:my-[50px]' />
            <div className="lg:max-w-[76.2%] m-auto" >
                <p className="text-[14px] lg:text-[18px] text-RomanSilver font-soraRegular">{article.intro}</p>
                {article.additionalIntro ? <p className="text-[14px] lg:text-[18px] text-RomanSilver font-soraRegular mt-[30px] lg:mt-[60px]">{article.additionalIntro}</p> : null}
                {article.content?.map((block, index) => {
                    switch (block.type) {
                        case 'heading':
                            return <h2 key={index} className="text-[16px] lg:text-[32px] text-DarkJungleGreentwo font-soraBold leading-[20.8px] lg:leading-[41.6px] mt-[8px] lg:mt-[21px] mb-[12px] lg:mb-[24px]" >{block.text}</h2>;
                        case 'paragraph':
                            return <p key={index} className='text-[14px] lg:text-[18px] text-RomanSilver font-soraRegular leading-[28.8px]' >{block.text}</p>;
                        case 'intro':
                            return <p key={index} className='text-[14px] lg:text-[18px] text-RomanSilver font-soraRegular leading-[28.8px]' >{block.text}</p>;
                        case 'additionalIntro':
                            return <p key={index} className='text-[14px] lg:text-[18px] text-RomanSilver font-soraRegular leading-[28.8px] mt-[30px] lg:mt-[60px]' >{block.text}</p>;
                        case 'image':
                            return (
                                <div key={index}>
                                    <Image src={block.src || ''} alt={block.alt || ''} width={946} height={520} className='w-full h-[200px] md:h-full max-h-[520px] rounded-[16px] mt-[96px] mb-[30px] md:mt-[21px] md:mb-[50px]' />
                                </div>
                            );
                        case 'list':
                            return (
                                <ul key={index}>
                                    {block.items?.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <Flex align={'center'} className='gap-[6px] md:gap-[10px]'>
                                                <RectangleIcon />
                                                <h3 className="text-[16px] lg:text-[20px] text-DarkJungleGreentwo font-soraBold leading-[20.8px] lg:leading-[26px] mt-[8px] lg:mt-[21px] mb-[12px] lg:mb-[24px]">{item.heading}</h3>
                                            </Flex>
                                            <p className='text-[14px] lg:text-[18px] text-RomanSilver font-soraRegular leading-[28.8px]'>{item.text}</p>
                                        </li>
                                    ))}
                                </ul>
                            );
                        default:
                            return null;
                    }
                })}
            </div>
            <div className='pt-[30px] pb-[50px] lg:pt-[42px] lg:pb-[100px]'>
                <Flex align={'center'} justify={'space-between'} className="mb-[30px] md:mb-[50px]">
                    <div className='w-[70%]' >
                        <h2 className='text-[16px] lg:text-[32px] text-DarkJungleGreentwo font-soraBold'>Related Articles</h2>
                        <p className='hidden md:block text-[12px] lg:text-[18px] text-RomanSilver font-soraRegular mt-[8px] lg:mt-[12px]' >Newest update article from AyEstate</p>
                    </div>
                    <Flex justify={'flex-end'} className='w-[30%]' >
                        <Button variant='default' className='p-0 text-[14px] lg:text-[18px] !border-none lg:!border-ChineseBlack lg:!border-solid lg:!text-ChineseBlack font-soraSemiBold !text-YellowGreen w-[107px] h-[30px] md:h-[47px]'>View All</Button>
                    </Flex>
                </Flex>
                <Flex wrap={'wrap'} className='gap-[29px]'>
                    {article.recentArticles?.map((article: IBlogArticle) => {
                        return (
                            <ArticleCard key={article.id} article={article} />
                        )
                    })}
                </Flex>
            </div>
        </div>
    );
};

export default ArticleDetails;
