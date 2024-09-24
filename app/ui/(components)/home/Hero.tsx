import { Box, Button, Flex } from '@mantine/core'
import Image from 'next/image'
import HeroImage from '@/public/png/heroImage.png'

const Hero = () => {
    return (
        <section className='bg-Cultured ' >
            <Box className='px-20px md:px-[80px] pt-[50px] lg:pt-[30px] pb-[50px] lg:pb-[70px]'>
                <Flex className='gap-[48px] lg:gap-[58px] flex-col md:flex-row'>
                    <Box className='md:pt-[56px] w-full md:w-1/2'>
                        <h1 className=' text-center md:text-start text-[36px] lg:text-[56px] font-soraBold leading-[43.2px] lg:leading-[67.2px]' >Discover Your Dream <br className='hidden lg:block' /> Home Today</h1>
                        <p className='pt-[20px] lg:pt-[40px] pb-[24px] lg:pb-[64px] text-center md:text-start text-[14px] lg:text-[18px] font-soraRegular leading-[22.4px] lg:leading-[28.8px] ' >Find the perfect property that suits your lifestyle. Our real estate service offers unique selling propositions that set us apart from the competition. Find your perfect home today!</p>
                        <Flex className='gap-[16px] justify-center md:justify-start'>
                            <Button className='text-[16px] h-[48px] py-[12px] px-[24px] font-soraSemiBold leading-[23px]' >
                                Explore Now
                            </Button>
                            <Button variant="default" className='h-[48px] py-[12px] px-[24px] text-[16px] font-robotoRegular lg:font-[300] leading-[23px]'>
                                Learn More
                            </Button>
                        </Flex>
                    </Box>
                    <Box className='w-full md:w-1/2'>
                        <Image className='w-full h-[348px] lg:h-[500px]  object-contain' src={HeroImage} alt='hero image' />
                    </Box>
                </Flex>
            </Box>
        </section>
    )
}

export default Hero