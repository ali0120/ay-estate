"use client"
import { Flex } from '@mantine/core'
import imageOneLarge from '@/public/webp/gallery-one.webp';
import imageOneSmall from '@/public/webp/sm_gallery-one.webp';
import imageTwoLarge from '@/public/webp/gallery-two.webp';
import imageTwoSmall from '@/public/webp/sm_gallery-two.webp';
import imageThreeLarge from '@/public/webp/gallery-three.webp';
import imageThreeSmall from '@/public/webp/sm_gallery-three.webp';
import Image from 'next/image'
import { useMediaQuery } from '@mantine/hooks';

const ImageGallery = () => {
    const isLargeScreen = useMediaQuery('(min-width: 768px)');
    return (
        <section className='bg-White overflow-hidden' >
            <div className='px-[20px] xl:px-[64px] py-[50px] xl:py-[112px]'>
                <Flex className='items-start justify-between flex-wrap gap-[48px] md:gap-[80px]'>
                    <div className='xl:w-[35.4%]' >
                        <h2 className='text-[36px] lg:text-[48px] leading-[43.2px] lg:leading-[57.6px] text-Black font-soraBold'>Stunning Property with Luxurious Amenities</h2>
                        <ul className='text-[16px]text-Black leading-[24px] font-soraRegular mt-[12px] lg:mt-[24px] flex flex-col gap-[16px]'>
                            <li>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</li>
                            <li>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</li>
                            <li>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</li>
                        </ul>
                    </div>
                    <Flex className="flex-1 flex-col gap-[24px] md:gap-[32px]" >
                        <Image src={isLargeScreen ? imageOneLarge : imageOneSmall} className="lg:w-[768px] lg:h-[768px] object-contain" alt='gallery-one' />
                        <Image src={isLargeScreen ? imageTwoLarge : imageTwoSmall} className="lg:w-[768px] lg:h-[768px] object-contain" alt='gallery-two' />
                        <Image src={isLargeScreen ? imageThreeLarge : imageThreeSmall} className="lg:w-[768px] lg:h-[768px] object-contain" alt='gallery-three' />
                    </Flex>
                </Flex>
            </div>
        </section>
    )
}

export default ImageGallery