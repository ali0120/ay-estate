import { Badge, Box, Flex } from '@mantine/core'
import heroImage from '@/public/png/details.png'
import Image from 'next/image'

const DetailsHeader = () => {
    return (
        <section className='bg-White overflow-hidden' >
            <Box className='px-[20px] xl:px-[64px] py-[50px] xl:py-[112px]'>
                <Flex className='gap-[48px] md:gap-[20px] flex-col lg:flex-row justify-between mb-[30px] md:mb-[80px]'>
                    <div className='lg:w-[70%] ' >
                        <h2 className='text-[40px] lg:text-[56px] leading-[48px] lg:leading-[67.2px] font-soraBold'>Luxury Beach Villa</h2>
                        <p className='text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] text-Black font-soraRegular mt-[20px] mb-[24px]' >Experience the ultimate in beachfront luxury with breathtaking ocean views.</p>
                        <Flex className='gap-[8px]'>
                            <Badge className='text-Black h-[29px] rounded-none' color="#EEEEEE">Beachfront</Badge>
                            <Badge className='text-Black h-[29px] rounded-none' color="#EEEEEE">Modern</Badge>
                            <Badge className='text-Black h-[29px] rounded-none' color="#EEEEEE">Spacious</Badge>
                        </Flex>
                    </div>
                    <div className="grid grid-cols-2 justify-between gap-[32px]">
                        <Flex className='gap-[8px] flex-col w-[216px]' >
                            <h6 className='text-[18px] lg:text-[20px] leading-[28px] font-soraBold' >Client</h6>
                            <p className='text-[16px] leading-[24px] font-soraRegular' >John Doe</p>
                        </Flex>
                        <Flex className='gap-[8px] flex-col w-[216px]' >
                            <h6 className='text-[18px] lg:text-[20px] leading-[28px] font-soraBold' >Date</h6>
                            <p className='text-[16px] leading-[24px] font-soraRegular' >March 2023</p>
                        </Flex>
                        <Flex className='gap-[8px] flex-col w-[216px]' >
                            <h6 className='text-[18px] lg:text-[20px] leading-[28px] font-soraBold' >Location</h6>
                            <p className='text-[16px] leading-[24px] font-soraRegular' >Bali, Indonesia</p>
                        </Flex>
                        <Flex className='gap-[8px] flex-col w-[216px]' >
                            <h6 className='text-[18px] lg:text-[20px] leading-[28px] font-soraBold' >Price</h6>
                            <p className='text-[16px] leading-[24px] font-soraRegular' >$3,000,000</p>
                        </Flex>
                    </div>
                </Flex>
                <Image src={heroImage} alt='hero-image' />
            </Box>
        </section>
    )
}

export default DetailsHeader