import { Badge, Box, Flex } from '@mantine/core'
import React from 'react'
import { ourTeamData, ourTeamMobileData } from './data/ourTeam'
import Image from 'next/image'
import LinkedInIcon from '@/public/svg/LinkedIn.svg'
import XIcon from '@/public/svg/X.svg'
import DribbleIcon from '@/public/svg/Dribble.svg'
import Link from 'next/link'
import '@mantine/core/styles/Badge.css';

const OurTeam = () => {
    return (
        <section className='bg-White' >
            <Box className='px-[20px] xl:px-[64px] lg:pt-[100px] pb-[20px] lg:pb-[112px]'>
                <Flex className='text-center flex-col items-center justify-center pb-[15px] lg:pb-[80px]' >
                    <Badge size='xl' color="#F4F2FF" className='h-[48px] px-[16px] text-[16px] leading-[24px] text-ChineseBlack font-soraSemiBold uppercase' >
                        Our team
                    </Badge>
                    <h1 className='text-[28px] lg:text-[36px] text-EerieBlack leading-[36px] lg:leading-[54px] font-soraBold py-[16px] uppercase w-[80%] lg:w-full' >meet our creative team</h1>
                    <p className='text-[14px] lg:text-[18px] leading-[20px] text-Independence lg:leading-[28px] font-soraRegular' >Meet our diverse and talented creative team, who work together to deliver innovative real estate solutions. Our team of experts is dedicated to providing you with creative strategies and personalized solutions for your real estate needs.</p>
                </Flex>
                <Flex className='flex-wrap gap-[32px]' visibleFrom='md'>
                    {ourTeamData?.map((item, index) => {
                        return (
                            <Flex key={index} className="flex-col items-center text-center md:w-[45%] lg:w-[21%]">
                                <Image src={item.avatar} alt={item.name} />
                                <h2 className='text-[20px] leading-[30px] font-soraSemiBold mt-[24px]' >{item.name}</h2>
                                <h3 className='text-[18px] leading-[27px] font-soraRegular '>{item.title}</h3>
                                <p className='text-[16px] pt-[16px] pb-[24px] leading-[24px] font-soraRegular '>{item.description}</p>
                                <Flex className='items-center gap-[14px]'>
                                    <Link href={item.links.linkedin} title="Follow us on LinkedIn">
                                        <LinkedInIcon />
                                    </Link>
                                    <Link href={item.links.twitter} title="Follow us on Twitter">
                                        <XIcon />
                                    </Link>
                                    <Link href={item.links.dribble} title="Follow us on Dribbble">
                                        <DribbleIcon />
                                    </Link>
                                </Flex>
                            </Flex>
                        )
                    })}
                </Flex>
                <Flex className='flex-wrap gap-[32px]' hiddenFrom='md'>
                    {ourTeamMobileData?.map((item, index) => {
                        return (
                            <Flex key={index} className='flex-col items-start'>
                                <Image src={item.avatar} alt={item.name} className='rounded-[12px]' />
                                <h2 className='text-[16px] leading-[24px] font-soraSemiBold mt-[16px]' >{item.name}</h2>
                                <h3 className='text-[14px] leading-[20px] text-[#534F69] font-soraRegular '>{item.title}</h3>
                            </Flex>
                        )
                    })}
                </Flex>
            </Box>
        </section>
    )
}

export default OurTeam