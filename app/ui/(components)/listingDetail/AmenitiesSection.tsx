import { Box, Flex, Group, Button } from '@mantine/core'
import Image from 'next/image'
import imageOne from '@/public/png/blog/popular/two.png'
import ChevronRightIcon from '@/public/svg/chevron-right.svg'

const AmenitiesSection = () => {
    return (
        <section className='bg-White overflow-hidden' >
            <Box px={{ base: 20, md: 64 }} py={{ base: 60, md: 112 }}>
                <Flex align={'start'} gap={{ base: 48, md: 80 }} mb={{ base: 30, md: 50 }} justify={'space-between'} wrap={'wrap'} >
                    <div className='lg:w-[47.8%]' >
                        <h3 className='capitalize pb-[12px] lg:pb-[16px] text-[16px] leading-[24px] font-soraSemiBold text-Black' >Luxury</h3>
                        <h2 className='text-[36px] lg:text-[48px] leading-[43.2px] lg:leading-[57.6px] text-Black font-soraBold'>Experience the Perfect Blend of Comfort and Style</h2>
                        <p className='text-[16px] lg:text-[18px] text-Black leading-[24px] lg:leading-[27px] font-soraRegular my-[20px] lg:my-[24px]'>Welcome to our stunning property! With a beautiful image gallery, immersive virtual tour, and outstanding features, this is the perfect place to call home. Explore the spacious rooms, modern amenities, and convenient location that make this property truly exceptional.</p>
                        <Group gap={24}>
                            <Button h={48} py={{ base: 11, md: 17 }} px={{ base: 24, md: 34 }} className='text-[16px] font-soraSemiBold leading-[24px]' >
                                Learn More
                            </Button>
                            <Button py={12} px={0} rightSection={<ChevronRightIcon />} variant="default" className='text-[16px] !border-none font-robotoRegular lg:font-[300] leading-[24px]'>
                                Contact
                            </Button>
                        </Group>
                    </div>
                    <Flex direction={'column'} gap={32} className="flex-1" >
                        <Image src={imageOne} className="lg:w-[605x] lg:h-[605px] object-contain" alt='gallery-one' />
                    </Flex>
                </Flex>
            </Box>
        </section>
    )
}

export default AmenitiesSection