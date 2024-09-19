import { Box, Button, Flex, Group } from '@mantine/core'
import React from 'react'
import Services from './components/Services'
import ChevronRightIcon from '@/public/svg/chevron-right.svg'

const Discover = () => {
    return (
        <section className='bg-White' >
            <Box px={{ base: 20, md: 64 }} pt={{ base: 50, md: 80 }} pb={{ base: 50, md: 0 }}>
                <Flex pb={{ base: 48, lg: 80 }} direction={{ base: 'column', sm: 'row' }} gap={{ base: 20, sm: 80 }} justify={'space-between'} >
                    <div className='md:w-[50%]'>
                        <h3 className='capitalize pb-[12px] lg:pb-[16px] text-[16px] leading-[24px] font-soraSemiBold text-Black' >discover</h3>
                        <h2 className='font-soraBold text-[32px] lg:text-[48px] text-Black leading-[38.4px] lg:leading-[58px]' >Find Your Dream Property with Us</h2>
                    </div>
                    <p className='md:w-[50%] text-[14px] md:text-[18px] text-Black font-soraRegular leading-[21px] md:leading-[27px]' >
                        At our real estate agency, we offer a range of services to help you with your property needs.
                        Whether you&#39;re looking to buy, sell, or get a valuation, our experienced team is here to assist you every step of the way.
                    </p>
                </Flex>
                <Services />
                <Group gap={24} py={{ base: 50, lg: 44 }} >
                    <Button h={{base:48,md:56}} py={{ base: 11, md: 15 }} px={{ base: 24, md: 34 }} className='text-[16px] font-soraSemiBold leading-[24px]' >
                        Learn More
                    </Button>
                    <Button h={{base:48,md:56}} py={12} px={0} rightSection={<ChevronRightIcon />} variant="default" className='text-[16px] !border-none font-robotoRegular lg:font-[300] leading-[24px]'>
                        Contact
                    </Button>
                </Group>
            </Box>
        </section>
    )
}

export default Discover