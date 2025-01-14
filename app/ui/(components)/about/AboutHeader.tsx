import { Flex } from '@mantine/core'
import Image from 'next/image'
import Aboutheder from '@/public/png/about_hero.png'
import { statsData } from './data/stats'

const AboutHeader = () => {
    return (
        <section className='bg-White' >
            <div>
                <Image src={Aboutheder} alt='herp-image' priority className='w-full h-[240px] lg:h-full object-cover' />
            </div>
            <div className='px-[20px] xl:px-[120px] pt-[20px] lg:pt-[100px] pb-[40px] lg:pb-[80px]'>
                <Flex className='flex-col lg:flex-row justify-between gap-[20px] lg:gap-[180px]'>
                    <Flex className='w-full lg:w-[48%] gap-[16px] md:gap-[40px] justify-between'>
                        {statsData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h4 className='text-[16px] md:text-[28px] leading-[24px] lg:leading-[36px] font-soraBold pb-[6px] lg:pb-[12px] text-EerieBlack'>{item.count}+</h4>
                                    <p className='text-[12px] md:text-[18px] leading-[18px] lg:leading-[28px] font-soraRegular text-Independence text-nowrap'>{item.title}</p>
                                </div>
                            )
                        })}
                    </Flex>
                    <div className='w-full lg:w-[48%]'>
                        <p className='text-[14px] lg:text-[18px] lg:tracking-[-1px] leading-[20px] lg:leading-[28px] font-soraRegular text-Independence'>We’re a diverse group of real estate agent with different skills who make things people love to use. We help the world’s most solve problems and generate growth real estate.</p>
                    </div>
                </Flex>
            </div>
        </section>
    )
}

export default AboutHeader