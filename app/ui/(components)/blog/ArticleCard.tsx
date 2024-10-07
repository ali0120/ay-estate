import { FC } from 'react';
import { Flex } from '@mantine/core'
import Link from 'next/link';
import EllipseIcon from '@/public/svg/Ellipse.svg'
import Image from 'next/image'
import { IBlogArticle } from '@/app/helper/interfaces/blog.interface';
import { refactorTitleToSlug } from '@/utils/refactorTitle';

interface IArticleCard {
    article: IBlogArticle
    withParagrapg?: boolean
}

const ArticleCard: FC<IArticleCard> = ({ article, withParagrapg }) => {

    return (
        <Flex direction={'column'} className='w-full md:w-[45%] lg:w-[394px] gap-[16px] md:gap-[24px]'>
            <Link href={`/blog/recent-articles/${refactorTitleToSlug(article.title)}`}   title={`Read more about ${article.title}`}>
                <Image src={article.image.src} width={394} height={300} alt={article.category} className='h-[260px] lg:h-full' />
            </Link>
            <div>
                <Flex  align={'center'} className="text-[12px] gap-[12px] lg:text-[18px] font-soraRegular md:font-soraSemiBold text-RomanSilver" >
                    <p>{article.date}</p>
                    <EllipseIcon height={4} width={4} fill={"#D4D7DF"} />
                    <p>{article.category?.replace(/-/g, ' ').split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                </Flex>
                <h3 className="mt-[6px] lg:mt-[12px] text-[14px] lg:text-[20px] font-soraBold leading-[18.2px] lg:leading-[26px] md:max-w-[310px]">
                    {article.title}
                </h3>
                {withParagrapg &&
                    <p className='text-[18px] font-soraRegular md:font-soraSemiBold leading-[32.4px] opacity-[70%] whitespace-nowrap overflow-hidden text-ellipsis' >{article.description}</p>
                }
            </div>
        </Flex>
    )
}

export default ArticleCard