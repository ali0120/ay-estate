import React from 'react'
import { servicesdata } from '../data/servicesData'
import { Flex } from '@mantine/core'

const Services = () => {
    return (
        <Flex justify={'space-between'} className='gap-[36px] md:gap-[48px] flex-wrap md:flex-nowrap'  >
            {servicesdata.map((item, index: number) => {
                return (
                    <div key={index} className='md:w-[46%] lg:w-[30%]' >
                        {<item.icon color='#F9F9F9' />}
                        <h4 className='text-[24px] md:text-[32px] font-soraBold py-[24px] leading-[33.6px] md:leading-[41.6px]' >{item.title}</h4>
                        <p className='text-[16px] font-soraRegular leading-[24px]' >{item.description}</p>
                    </div>
                )
            })}
        </Flex>
    )
}

export default Services