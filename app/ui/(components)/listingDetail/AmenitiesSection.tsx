import { Box, Flex, Group, Button } from '@mantine/core'
import Image from 'next/image'
import imageOne from '@/public/png/blog/popular/two.png'
import ChevronRightIcon from '@/public/svg/chevron-right.svg'

const AmenitiesSection = () => {
    return (
        <section className='bg-White overflow-hidden' >
            <Box className='px-[20px] xl:px-[64px] py-[50px] xl:py-[112px]'>
                <Flex className='items-center gap-[48px] md:gap-[80px] justify-between flex-wrap'>
                    <div className='lg:w-[47.8%]' >
                        <h2 className='capitalize pb-[12px] lg:pb-[16px] text-[16px] leading-[24px] font-soraSemiBold text-Black' >Luxury</h2>
                        <h3 className='text-[36px] lg:text-[48px] leading-[43.2px] lg:leading-[57.6px] text-Black font-soraBold'>Experience the Perfect Blend of Comfort and Style</h3>
                        <p className='text-[16px] lg:text-[18px] text-Black leading-[24px] lg:leading-[27px] font-soraRegular my-[20px] lg:my-[24px]'>Welcome to our stunning property! With a beautiful image gallery, immersive virtual tour, and outstanding features, this is the perfect place to call home. Explore the spacious rooms, modern amenities, and convenient location that make this property truly exceptional.</p>
                        <Group className='gap-[24px]'>
                            <Button className='h-[48px] px-[24px] md:px-[34px] text-[16px] font-soraSemiBold leading-[24px]' >
                                Learn More
                            </Button>
                            <Button rightSection={<ChevronRightIcon />} variant="default" className='text-[16px] py-[12px] px-0 !border-none font-robotoRegular lg:font-[300] leading-[24px]'>
                                Contact
                            </Button>
                        </Group>
                    </div>
                    <Flex className="flex-1 flex-col" >
                        <Image src={imageOne} className="object-contain" alt='gallery-one' />
                    </Flex>
                </Flex>
            </Box>
        </section>
    )
}

export default AmenitiesSection