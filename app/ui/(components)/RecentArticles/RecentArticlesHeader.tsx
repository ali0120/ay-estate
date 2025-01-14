import { Button, Flex } from '@mantine/core'
import React from 'react'

const RecentArticlesHeader = () => {
    return (
        <section className='bg-White' >
            <div className='px-[20px] xl:px-[100px] pt-[40px]'>
                <Flex align={'center'} justify={'space-between'}>
                    <div>
                    <h1 className='text-[16px] lg:text-[32px] text-DarkJungleGreentwo font-soraBold'>Recent Articles</h1>
                    <p className='hidden md:block text-[12px] lg:text-[18px] text-RomanSilver font-soraRegular mt-[8px] lg:mt-[12px]' >Newest update article from AyEstate</p>
                    </div>
                    <Flex hiddenFrom='sm'>
                        <Button variant='default' className='w-[82px] h-[30px] px-[12px] md:px-[16px] text-[14px] md:text-[18px] text-ChineseBlack font-soraSemiBold !border-YellowGreen lg:!border-ChineseBlack'
                        >View All</Button>
                    </Flex>
                </Flex>
            </div>
        </section>
    )
}

export default RecentArticlesHeader