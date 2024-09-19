import { Box, Flex } from '@mantine/core'
import React from 'react'
import Product from './components/Product'

const Properties = () => {
    return (
        <section className='bg-White text-Black'>
            <Box py={{ base: 50, md: 80 }} px={{ base: 20, md: 0 }}>
                <Flex direction={'column'} align={'center'} justify={'center'} pb={{ base: 48, md: 80 }} className="text-center lg:text-start" >
                    <h5 className='text-[16px] leading-[24px] font-soraSemiBold' >Find</h5>
                    <h2 className='text-[32px] lg:text-[48px] leading-[38.4px] lg:leading-[57.6px] font-soraBold pt-[12px] lg:pt-[16px] pb-[20px] lg:pb-[24px] ' >Properties</h2>
                    <p className='text-[16px] lg:text-[18px] md:w-[58.53%] m-auto text-center leading-[24px] lg:leading-[27px] font-soraRegular' >Explore our curated list of properties and find your dream home.</p>
                </Flex>
                <Box pb={{ base: 0, md: 111 }} >
                    <Product />
                </Box>
            </Box>
        </section>
    )
}

export default Properties