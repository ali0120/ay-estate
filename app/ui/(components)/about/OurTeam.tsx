import { Badge, Box, Flex } from '@mantine/core'
import React from 'react'
import { ourTeamData, ourTeamMobileData } from './data/ourTeam'
import Image from 'next/image'
import LinkedInIcon from '@/public/svg/LinkedIn.svg'
import XIcon from '@/public/svg/X.svg'
import DribbleIcon from '@/public/svg/Dribble.svg'
import Link from 'next/link'

const OurTeam = () => {
    return (
        <section className='bg-White' >
            <Box px={{ base: '20px', md: '64px' }} pt={{ base: 0, md: 100 }} pb={{ base: '20px', md: 112 }}>
                <Flex direction={'column'} align={'center'} justify={'center'} pb={{ base: 15, md: 80 }} className='text-center' >
                    <Badge h={48} px={16} size='xl' color="#F4F2FF" className='text-[16px] leading-[24px]  text-ChineseBlack font-soraSemiBold uppercase' >
                        Our team
                    </Badge>
                    <h2 className='text-[28px] lg:text-[36px] text-EerieBlack leading-[36px] lg:leading-[54px] font-soraBold py-[16px] uppercase w-[80%] lg:w-full' >meet our creative team</h2>
                    <p className='text-[18px] leading-[28px] font-soraRegular' >Magna metus, adipiscing dictumst magna fringilla metus fermentum tristique. Enim vitae purus lectus augue maecenas</p>
                </Flex>
                <Flex wrap={'wrap'} gap={32} visibleFrom='md'>
                    {ourTeamData?.map((item, index) => {
                        return (
                            <Flex direction={'column'} align={'center'} key={index} className="text-center md:w-[45%] lg:w-[21%]">
                                <Image src={item.avatar} alt={item.name} />
                                <h3 className='text-[20px] leading-[30px] font-soraSemiBold mt-[24px]' >{item.name}</h3>
                                <h4 className='text-[18px] leading-[27px] font-soraRegular '>{item.title}</h4>
                                <p className='text-[16px] pt-[16px] pb-[24px] leading-[24px] font-soraRegular '>{item.description}</p>
                                <Flex align={'center'} gap={14}>
                                    <Link href={item.links.linkedin}>
                                        <LinkedInIcon />
                                    </Link>
                                    <Link href={item.links.twitter}>
                                        <XIcon />
                                    </Link>
                                    <Link href={item.links.dribble}>
                                        <DribbleIcon />
                                    </Link>
                                </Flex>
                            </Flex>
                        )
                    })}
                </Flex>
                <Flex wrap={'wrap'} gap={32} hiddenFrom='md'>
                    {ourTeamMobileData?.map((item, index) => {
                        return (
                            <Flex direction={'column'} align={'start'} key={index}>
                                <Image src={item.avatar} alt={item.name} className='rounded-[12px]' />
                                <h3 className='text-[16px] leading-[24px] font-soraSemiBold mt-[16px]' >{item.name}</h3>
                                <h4 className='text-[14px] leading-[20px] text-[#534F69] font-soraRegular '>{item.title}</h4>
                            </Flex>
                        )
                    })}
                </Flex>
            </Box>
        </section>
    )
}

export default OurTeam