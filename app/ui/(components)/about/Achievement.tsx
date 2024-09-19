import { Badge, Box, Button, Flex } from '@mantine/core'
import Medalicon from '@/public/svg/medal-star.svg'
import ArrowUpIcon from '@/public/svg/white-arrow-up-right.svg'

const Achievement = () => {
    return (
        <section className='bg-EerieBlack text-White relative border-b border-EerieBlack'>
            <Box pt={{ base: 40, md: 80 }} pb={{ base: 40, md: 60 }} px={{ base: 20, md: 60, lg: 120 }} >
                <Badge h={48} px={16} size='xl' color="#2D2843" className='text-[16px] leading-[24px]  text-White font-soraSemiBold uppercase' >
                    Achievement
                </Badge>
                <Flex py={{ base: 16, md: 60 }} justify={'space-between'} gap={{ base: 16, md: 60 }} wrap={'wrap'} >
                    <h3 className='uppercase md:w-[45%] text-[28px] md:text-[36px] font-soraBold leading-[36px] md:leading-[54px] tracking-[-1px]' >Our award this year</h3>
                    <p className='text-[14px] md:text-[18px] md:w-[45%] leading-[20px] md:leading-[28px] font-soraRegular text-Vodka'>
                        We’re happy to receive this award so that it motivates us to grow and provide the best service for you.
                    </p>
                </Flex>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[48px] md:gap-[28px] lg:gap-[48px] px-[20px] py-[24px]">
                    <Flex direction={'column'}>
                        <Medalicon />
                        <h4 className='text-[20px] md:text-[28px] pt-[24px] pb-[12px] md:pb-[16px] leading-[36px] font-soraBold' >Best Small Companies</h4>
                        <p className='text-[14px] leading-[20px] font-soraRegular text-Vodka '>Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend risus pretium consectetur eros.</p>
                    </Flex>
                    <Flex direction={'column'}>
                        <Medalicon />
                        <h4 className='text-[20px] md:text-[28px] pt-[24px] pb-[12px] md:pb-[16px] leading-[36px] font-soraBold' >Fast Company Growth</h4>
                        <p className='text-[14px] leading-[20px] font-soraRegular text-Vodka '>Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend risus pretium consectetur eros.</p>
                    </Flex>
                    <Flex direction={'column'}>
                        <Medalicon />
                        <h4 className='text-[20px] md:text-[28px] pt-[24px] pb-[12px] md:pb-[16px] leading-[36px] font-soraBold' >Best Developer Team</h4>
                        <p className='text-[14px] leading-[20px] font-soraRegular text-Vodka '>Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend risus pretium consectetur eros.</p>
                    </Flex>
                </div>
                <Box className='flex justify-center mt-[16px] lg:mt-[46px]' >
                    <Button h={{ base: 44, sm: 48 }} variant='light' rightSection={<ArrowUpIcon />} className='py-[13px] px-[21px] w-full md:w-auto text-White capitalize rounded-[40px] text-[14px] leading-[20px] font-soraSemiBold '>
                        View All Project
                    </Button>
                </Box>
            </Box>
        </section>
    )
}

export default Achievement