import { Box, Flex } from '@mantine/core'
import Image from 'next/image'
import Aboutheder from '@/public/png/about_hero.png'
import { statsData } from './data/stats'

const AboutHeader = () => {
    return (
        <section className='bg-White' >
            <Box>
                <Image src={Aboutheder} alt='herp-image' className='w-full h-[240px] lg:h-full object-cover' />
            </Box>
            <Box pt={{ base: 20, md: 100 }} pb={{ base: 40, md: 80 }} px={{ base: 20, md: 40 ,lg:120 }}>
                <Flex direction={{ base: 'column', md: 'row' }} justify={'space-between'} gap={{ base: 20, md: 180 }}>
                    <Flex w={{ bsee: '100%', md: '48%' }} gap={{ base: 16, md: 40 }} justify={'space-between'} >
                        {statsData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h4 className='text-[16px] md:text-[28px] leading-[24px] lg:leading-[36px] font-soraBold pb-[6px] lg:pb-[12px] text-EerieBlack'>{item.count}+</h4>
                                    <p className='text-[12px] md:text-[18px] leading-[18px] lg:leading-[28px] font-soraRegular text-Independence text-nowrap'>{item.title}</p>
                                </div>
                            )
                        })}
                    </Flex>
                    <Box w={{ bsee: '100%', md: '48%' }}>
                        <p className='text-[14px] lg:text-[18px] leading-[20px] lg:leading-[28px] font-soraRegular text-Independence'>We’re a diverse group of real estate agent with different skills who make things people love to use. We help the world’s most solve problems and generate growth real estate.</p>
                    </Box>
                </Flex>
            </Box>
        </section>
    )
}

export default AboutHeader