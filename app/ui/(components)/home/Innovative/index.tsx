import { Button, Flex } from '@mantine/core'
import React from 'react'
import Stats from './components/Stats'

const Innovative = () => {
    return (
        <section className='bg-ChineseBlack text-White'>
            <div className='px-[20px] xl:px-[64px] py-[50px] lg:py-[80px]'>
                <Flex className='flex-col md:flex-row gap-[20px] lg:gap-[80px] pb-[48px] lg:pb-[80px] justify-between'>
                    <div className='md:w-[50%]'>
                        <h2 className='capitalize pb-[12px] lg:pb-[16px] text-[16px] leading-[24px] font-soraSemiBold' >Innovative</h2>
                        <h3 className='font-soraBold text-[32px] lg:text-[48px] leading-[38.4px] lg:leading-[58px]' >Transforming the Real Estate Industry with Excellence</h3>
                    </div>
                    <div className='md:w-[50%]' >
                        <p className='text-[16px] lg:text-[18px] font-soraRegular leading-[24px] lg:leading-[27px]' >
                            At our company, we take pride in our exceptional success rate, having listed thousands of properties, and ensuring client satisfaction is our top priority.
                        </p>
                        <Flex className='justify-center md:justify-start'>
                            <Button className='h-[48px] w-[140px] md:h-[56px] md:w-[160px] mt-[24px] md:mt-[32px] text-[16px] font-soraSemiBold leading-[21px]' >
                                Learn More
                            </Button>
                        </Flex>
                    </div>
                </Flex>
                <Stats />
            </div>
        </section>
    )
}

export default Innovative