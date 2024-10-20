"use client"
import React from 'react'
import { Button } from '@mantine/core';
import ArrowUpIcon from '@/public/svg/arrow-up-right.svg'
import Abstract from "@/public/svg/Abstract.svg"
import AbstractRight from "@/public/svg/Abstract-right.svg"
const CTASection = () => {
    return (
        <section className='bg-ChineseBlack text-White relative overflow-hidden'>
            <div className='px-[20px] xl:px-[60px] py-[40px] lg:py-[60px]'>
                <div className="text-center">
                    <h2 className='uppercase text-[20px] lg:text-[36px] leading-[30px] lg:leading-[54px] font-soraBold' >Let’s start a <br /> successful project</h2>
                    <p className='text-[12px] lg:text-[18px] m-auto md:w-[53%] text-center leading-[18px] lg:leading-[28px] font-soraRegular py-[12px] lg:py-[24px]' >Meet with our creative team today and start a successful real estate project. Our expert team is here to bring your ideas to life with innovative solutions.</p>
                </div>
                <div className='flex justify-center' >
                    <Button rightSection={<ArrowUpIcon />} className='relative z-10 h-[44px] md:h-[56px] w-full md:w-auto py-[9.2px] lg:py-[13px] px-[21px] text-EerieBlack capitalize rounded-[40px] text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] font-soraSemiBold '>
                        Start A Project
                    </Button>
                </div>
            </div>
            <div className="absolute w-full h-full top-0 left-0">
                <Abstract />
            </div>
            <div className="absolute w-full h-full bottom-0 right-0 rotate-[180deg]">
                <AbstractRight />
            </div>
        </section>
    )
}

export default CTASection