import { Box, Flex } from '@mantine/core'
import React from 'react'
import { statsData } from '../data/statsData'

const Stats = () => {
    return (
        <Flex justify={'space-between'} gap={{ base: 32, lg: 60 }} wrap={"wrap"} >
            {statsData.map((item, index) => {
                return (
                    <Box key={index} className='border-l-2 border-l-white pl-[32px]' >
                        <h2 className='text-[56px] lg:text-[80px] leading-[72.8px] lg:leading-[104px] font-robotoRegular font-[700] pb-[8px]' >{item.percentage}%</h2>
                        <h6 className='text-[18px] lg:text-[20px] leading-[25.2px] lg:leading-[28px] font-bold' >{item.title}</h6>
                    </Box>
                )
            })}
        </Flex>
    )
}

export default Stats