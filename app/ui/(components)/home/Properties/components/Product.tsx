import { Button, Flex, NumberFormatter } from '@mantine/core'
import React from 'react'
import { productData } from '../data/productData'
import Image from 'next/image'

const Product = () => {
    return (
        <>
            <Flex className='flex-wrap gap-x-[24px] md:gap-x-[32px] gap-y-[32px] md:gap-y-[64px] justify-center'>
                {productData.map((item, index) => {
                    return (
                        <div key={index} className='text-center w-[46%] md:w-auto' >
                            <Image src={item.image} alt={item.title} />
                            <h3 className='text-[16px] lg:text-[18px] font-soraSemiBold leading-[24px] lg:leading-[27px] mt-[16px] text-nowrap'>{item.title}</h3>
                            <span className='text-[14px] leading-[21px] font-soraRegular text-center' >{item.description}</span>
                            <h4 className='pt-[8px] pb-[16px] text-[20px] font-soraSemiBold leading-[30px]'>
                                <NumberFormatter prefix="$ " value={item.price} thousandSeparator />
                            </h4>
                            <Button variant='default' className='h-[37px] md:h-[40px] py-[8px] px-[32px] md:px-[101px] text-[16px] leading-[24px] font-soraRegular !border-YellowGreen md:!border-Black ' >
                                View Details
                            </Button>
                        </div>
                    )
                })}
            </Flex>
            <Button hiddenFrom="sm" className='h-[48px] block m-auto md:h-[56px] py-[12px] px-[18.5px] text-[16px] leading-[24px] font-soraSemiBold mt-[40px]' >
                View All
            </Button>
        </>
    )
}

export default Product