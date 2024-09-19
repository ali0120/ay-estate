import { Flex } from '@mantine/core'
import React from 'react'
import { contentdata } from '../data/contentData'
import Image from 'next/image'

const Content = () => {
    return (
        <Flex gap={48} wrap={{ base: "wrap", md: 'nowrap' }} >
            {contentdata.map((item, index: number) => {
                return (
                    <div key={index} className='md:w-[46%] lg:w-[30%] text-center' >
                        <Image src={item.image} alt='content-image' className='w-full' />
                        <h4 className='text-[24px] md:text-[32px] font-soraBold pt-[24px] pb-[20px] md:pb-[24px] leading-[33.6px] lg:leading-[41.6px]' >{item.title}</h4>
                        <p className='text-[16px] font-soraRegular leading-[24px]' >{item.description}</p>
                    </div>
                )
            })}
        </Flex>
    )
}

export default Content