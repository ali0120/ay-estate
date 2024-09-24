import { Box, Button, Flex, Group } from '@mantine/core'
import React from 'react'
import Services from './components/Services'
import ChevronRightIcon from '@/public/svg/chevron-right.svg'

const Discover = () => {
    return (
        <section className='bg-White' >
            <Box className='px-[20px] md:px-[64px] pt-[50px] md:pt-[80px] pb-[50px] md:pb-0'>
                <Flex className='pb-[48px] lg:pb-[80px] flex-col md:flex-row gap-[20px] md:gap-[80px] justify-between' >
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
                <Group className='gap-[24px] py-[50px] lg:py-[44px]' >
                    <Button className='h-[48px] md:h-[56px] px-[24px] md:px-[34px] text-[16px] font-soraSemiBold leading-[24px]' >
                        Learn More
                    </Button>
                    <Button rightSection={<ChevronRightIcon />} variant="default" className='h-[48px] md:h-[56px] px-[0] text-[16px] !border-none font-robotoRegular lg:font-[300] leading-[24px]'>
                        Contact
                    </Button>
                </Group>
            </Box>
        </section>
    )
}

export default Discover