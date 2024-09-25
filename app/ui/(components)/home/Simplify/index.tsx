import { Box, Flex } from '@mantine/core'
import React from 'react'
import Content from './components/Content'

const Simplify = () => {
    return (
        <section className='bg-White'>
            <Box className='px-[20px] xl:px-[64px] py-0 lg:py-[80px] pb-[50px] lg:pb-[80px]'>
                <Flex className='flex-col items-center justify-center pb-[48px] lg:pb-[80px]'>
                    <h5 className='text-[16px] leading-[24px] font-soraSemiBold' >Simplify</h5>
                    <h2 className='text-center lg:text-start text-[32px] lg:text-[48px] leading-[38.4px] lg:leading-[57.6px] font-soraBold pt-[12px] lg:pt-[16px] pb-[20px] lg:pb-[24px] ' >Streamline Your Property <br className='hidden lg:block' /> Buying or Selling Process</h2>
                    <p className='text-[16px] lg:text-[18px] lg:w-[58.53%] m-auto text-center leading-[24px] lg:leading-[27px] font-soraRegular' >Our website provides a step-by-step guide to help you seamlessly navigate the process of buying or selling property. From finding the perfect property to closing the deal, we&#39;ve got you covered.</p>
                </Flex>
                <Content />
            </Box>
        </section>
    )
}

export default Simplify