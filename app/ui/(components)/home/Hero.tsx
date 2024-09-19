import { Box, Button, Flex } from '@mantine/core'
import Image from 'next/image'
import HeroImage from '@/public/png/heroImage.png'

const Hero = () => {
    return (
        <section className='bg-Cultured ' >
            <Box px={{ base: '20px', md: '80px' }} pt={{ base: 50, lg: 30 }} pb={{ base: 50, lg: 70 }} >
                <Flex gap={{ base: 48, lg: 58 }} direction={{ base: 'column', sm: 'row' }}>
                    <Box pt={{ base: 0, md: 56 }} w={{ base: '100%', md: '50%' }}>
                        <h1 className=' text-center md:text-start text-[36px] lg:text-[56px] font-soraBold leading-[43.2px] lg:leading-[67.2px]' >Discover Your Dream <br className='hidden lg:block' /> Home Today</h1>
                        <p className='pt-[20px] lg:pt-[40px] pb-[24px] lg:pb-[64px] text-center md:text-start text-[14px] lg:text-[18px] font-soraRegular leading-[22.4px] lg:leading-[28.8px] ' >Find the perfect property that suits your lifestyle. Our real estate service offers unique selling propositions that set us apart from the competition. Find your perfect home today!</p>
                        <Flex gap={16} justify={{ base: 'center', sm: 'start' }} >
                            <Button h={48} py={12} px={24} className='text-[16px] font-soraSemiBold leading-[23px]' >
                                Explore Now
                            </Button>
                            <Button h={48} variant="default" py={12} px={24} className='text-[16px] font-robotoRegular lg:font-[300] leading-[23px]'>
                                Learn More
                            </Button>
                        </Flex>
                    </Box>
                    <Box w={{ base: '100%', md: '50%' }}>
                        <Image className='w-full h-[348px] lg:h-[500px]  object-contain' src={HeroImage} alt='hero image' />
                    </Box>
                </Flex>
            </Box>
        </section>
    )
}

export default Hero