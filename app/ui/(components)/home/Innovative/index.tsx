import { Box, Button, Flex } from '@mantine/core'
import React from 'react'
import Stats from './components/Stats'

const Innovative = () => {
    return (
        <section className='bg-ChineseBlack text-White'>
            <Box px={{ base: 20, md: 64 }} py={{ base: 50, md: 80 }}>
                <Flex direction={{ base: 'column', sm: 'row' }} gap={{ base: 20, sm: 80 }} pb={{ base: 48, md: 80 }} justify={'space-between'} >
                    <div className='md:w-[50%]'>
                        <h3 className='capitalize pb-[12px] lg:pb-[16px] text-[16px] leading-[24px] font-soraSemiBold' >Innovative</h3>
                        <h2 className='font-soraBold text-[32px] lg:text-[48px] leading-[38.4px] lg:leading-[58px]' >Transforming the Real Estate Industry with Excellence</h2>
                    </div>
                    <div className='md:w-[50%]' >
                        <p className='text-[16px] lg:text-[18px] font-soraRegular leading-[24px] lg:leading-[27px]' >
                            At our company, we take pride in our exceptional success rate, having listed thousands of properties, and ensuring client satisfaction is our top priority.
                        </p>
                        <Flex justify={{ base: 'center', sm: 'start' }}>
                            <Button h={{base:48,md:56}} py={{ base: 13, md: 17 }} px={'34px'} mt={32} className='text-[16px] font-soraSemiBold leading-[21px]' >
                                Learn More
                            </Button>
                        </Flex>
                    </div>
                </Flex>
                <Stats />
            </Box>
        </section>
    )
}

export default Innovative