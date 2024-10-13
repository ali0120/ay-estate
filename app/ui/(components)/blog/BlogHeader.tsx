'use client'
import { useMediaQuery } from '@mantine/hooks';
import { Button, Flex, Paper, TextInput } from '@mantine/core'
import IconSearch from '@/public/svg/search-normal.svg'
import Link from 'next/link';

const categories = [
    { name: 'Success Stories', value: 'success-stories' },
    { name: 'Invest Strategies', value: 'invest-strategies' },
    { name: 'Tips', value: 'tips' },
    { name: 'Success Story', value: 'success-story' },
];

const BlogHeader = () => {
    const isDesktop = useMediaQuery('(min-width: 56.25em)');
    return (
        <section className='bg-White' >
            <div className='px-[20px] xl:px-[100px] pt-[30px] lg:pt-[120px]'>
                <div className="text-center mx-auto">
                    <h1 className='text-[24px] lg:text-[44px] font-soraBold text-YankeesBlue leading-[31.2px] lg:leading-[57.2px] capitalize' >AyEstate  Blog</h1>
                    <p className='text-[16px] lg:text-[20px] text-RomanSilver leading-[26px] lg:leading-[30px] mt-4'>
                        Welcome to the AyEstate blog, where we share valuable insights and tips for navigating the real estate market. Here, you will find expert advice on market trends and essential tips for buying and selling properties.
                    </p>
                    <Paper shadow="xs" className='lg:max-w-[70%] m-auto mt-[16px] md:mt-[50px] rounded-[16px]'>
                        <TextInput
                            placeholder="Search article name"
                            radius={16}
                            leftSection={<IconSearch stroke={1.5} />}
                            leftSectionWidth={80}
                            rightSectionWidth={170}
                            rightSection={isDesktop ? <Button className='h-[48px] md:h-[56px] px-[53px] text-ChineseBlack font-soraSemiBold mr-[6px]' >Search</Button> : null}
                            classNames={{
                                input: '!px-[65px] h-[52px] lg:h-[68px] font-soraSemiBold !bg-White lg:!pr-[180px]',
                            }}
                        />
                    </Paper>
                    <Flex className='justify-center gap-[16px] md:gap-[30px] mt-[24px] '>
                        <h2 className='text-[12px] lg:text-[16px] text-RomanSilver font-soraSemiBold'>Suggested:</h2>
                        <Flex className='gap-[16px] md:gap-[24px] flex-wrap gap-y-[5px]'>
                            {categories.map(category => (
                                <Link
                                    rel="alternate"
                                    hrefLang="en"
                                    key={category.value}
                                    href={`/blog/${encodeURIComponent(category.value)}`}
                                    title={`Explore ${category.name} category`}
                                    className='text-[12px] lg:text-[16px] text-RoyalBlue font-soraSemiBold'
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </Flex>
                    </Flex>
                </div>
            </div>
        </section>
    )
}

export default BlogHeader