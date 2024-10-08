import { Badge, Box, Button, Flex } from '@mantine/core'
import Medalicon from '@/public/svg/medal-star.svg'
import ArrowUpIcon from '@/public/svg/white-arrow-up-right.svg'
import '@mantine/core/styles/Badge.css';

const Achievement = () => {
    return (
        <section className='bg-EerieBlack text-White relative'>
            <Box className='px-[20px] lg:px-[60px] xl:px-[120px] pt-[40px] md:pt-[80px] pb-[40px] lg:pb-[60px]'>
                <Badge size='xl' color="#2D2843" className='h-[48px] px-[16px] text-[16px] leading-[24px]  text-White font-soraSemiBold uppercase' >
                    Achievement
                </Badge>
                <Flex className='justify-between gap-[16x] md:gap-[60px] flex-wrap py-[16px] lg:py-[60px]'>
                    <h2 className='uppercase md:w-[45%] text-[28px] md:text-[36px] font-soraBold leading-[36px] md:leading-[54px] tracking-[-1px]' >Our award this year</h2>
                    <p className='text-[14px] md:text-[18px] md:w-[45%] leading-[20px] md:leading-[28px] font-soraRegular text-Vodka'>
                    Our creative team has helped us achieve awards in various categories, including Best Small Companies and Fast Company Growth. Our teamwork and creative solutions drive our success.
                    </p>
                </Flex>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[48px] md:gap-[28px] lg:gap-[48px] px-[20px] py-[24px]">
                    <Flex className='flex-col'>
                        <Medalicon />
                        <h4 className='text-[20px] md:text-[28px] pt-[24px] pb-[12px] lg:pb-[16px] leading-[36px] font-soraBold' >Best Small Companies</h4>
                        <p className='text-[14px] leading-[20px] font-soraRegular text-Vodka '>Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend risus pretium consectetur eros.</p>
                    </Flex>
                    <Flex className='flex-col'>
                        <Medalicon />
                        <h4 className='text-[20px] md:text-[28px] pt-[24px] pb-[12px] lg:pb-[16px] leading-[36px] font-soraBold' >Fast Company Growth</h4>
                        <p className='text-[14px] leading-[20px] font-soraRegular text-Vodka '>Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend risus pretium consectetur eros.</p>
                    </Flex>
                    <Flex className='flex-col'>
                        <Medalicon />
                        <h4 className='text-[20px] md:text-[28px] pt-[24px] pb-[12px] lg:pb-[16px] leading-[36px] font-soraBold' >Best Developer Team</h4>
                        <p className='text-[14px] leading-[20px] font-soraRegular text-Vodka '>Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend risus pretium consectetur eros.</p>
                    </Flex>
                </div>
                <Box className='flex justify-center mt-[16px] lg:mt-[46px]' >
                    <Button variant='light' rightSection={<ArrowUpIcon />} className='h-[44px] md:h-[48px] py-[13px] px-[21px] w-full md:w-auto text-White capitalize rounded-[40px] text-[14px] leading-[20px] font-soraSemiBold '>
                        View All Project
                    </Button>
                </Box>
            </Box>
        </section>
    )
}

export default Achievement