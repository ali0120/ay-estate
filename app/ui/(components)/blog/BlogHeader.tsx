'use client'
import { useMediaQuery } from '@mantine/hooks';
import { Box, Button, Flex, Paper, TextInput } from '@mantine/core'
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
            <Box pt={{ base: 30, md: 120 }} px={{ base: 20, md: 100 }}>
                <div className="text-center mx-auto">
                    <h1 className='text-[24px] lg:text-[44px] font-soraBold text-YankeesBlue leading-[31.2px] lg:leading-[57.2px] capitalize' >Our Blog</h1>
                    <Paper pt={{ base: 16, md: 50 }} shadow="xs" radius={16} className='lg:max-w-[70%] m-auto'>
                        <TextInput
                            placeholder="Search article name"
                            radius={16}
                            leftSection={<IconSearch stroke={1.5} />}
                            leftSectionWidth={80}
                            rightSectionWidth={170}
                            rightSection={isDesktop ? <Button h={{base:48,md:56}} py={19} px={53} className='text-ChineseBlack font-soraSemiBold mr-[6px]' >Search</Button> : null}
                            classNames={{
                                input: '!px-[65px] h-[52px] lg:h-[68px] font-soraSemiBold !bg-White lg:!pr-[180px]',
                            }}
                        />
                    </Paper>
                    <Flex mt={24} justify={"center"} gap={{base:16,md:30}}>
                        <h3 className='text-[12px] lg:text-[16px] text-RomanSilver font-soraSemiBold'>Suggested:</h3>
                        <Flex gap={{ base: 16, md: 24 }} wrap={'wrap'} rowGap={5}>
                            {categories.map(category => (
                                <Link
                                    key={category.value}
                                    href={`/blog?category=${encodeURIComponent(category.value)}`}
                                    className='text-[12px] lg:text-[16px] text-RoyalBlue font-soraSemiBold'
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </Flex>
                    </Flex>
                </div>
            </Box>
        </section>
    )
}

export default BlogHeader