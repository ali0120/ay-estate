import { Button, Flex, NumberFormatter } from '@mantine/core'
import React from 'react'
import { productData } from '../data/productData'
import Image from 'next/image'

const Product = () => {
    return (
        <Flex wrap={'wrap'} columnGap={{ base: 24, md: 32 }} rowGap={{ base: 32, md: 64 }} justify={'center'}>
            {productData.map((item, index) => {
                return (
                    <div key={index} className='text-center w-[46%] md:w-auto' >
                        <Image src={item.image} alt={item.title} />
                        <h3 className='text-[16px] lg:text-[18px] font-soraSemiBold leading-[24px] lg:leading-[27px] mt-[16px] text-nowrap'>{item.title}</h3>
                        <span className='text-[14px] leading-[21px] font-soraRegular text-center' >{item.description}</span>
                        <h2 className='pt-[8px] pb-[16px] text-[20px] font-soraSemiBold leading-[30px]'>
                            <NumberFormatter prefix="$ " value={item.price} thousandSeparator />
                        </h2>
                        <Button variant='default' py={8} px={{ base: 32, md: 101 }} className='text-[16px] leading-[24px] font-soraRegular !border-YellowGreen md:!border-Black ' >
                            View Details
                        </Button>
                    </div>
                )
            })}
            <Button h={{base:48,md:56}} hiddenFrom="sm" py={12} px={18.5} className='text-[16px] leading-[24px] font-soraSemiBold mt-[16px]' >
                View All
            </Button>
        </Flex>
    )
}

export default Product