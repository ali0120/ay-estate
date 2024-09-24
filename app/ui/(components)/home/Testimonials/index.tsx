"use client"
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import Client from './components/Client';
import { clientsData } from './data/clients';

const Testimonials = () => {
    const autoplay = useRef(Autoplay({ delay: 3000 }));
    return (
        <section className='pb-[50px] text-center bg-Seashell'>
            <h2 className='text-[24px] lg:text-[48px] font-soraBold leading-[28.8px] lg:leading-[57.6px] pb-[24px] pt-[50px] lg:py-[50px]' >Customer Testimonials</h2>
            <Carousel
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                classNames={{
                    controls: 'opacity-0'
                }}
            >
                {clientsData.map((item, index) => {
                    return (
                        <Carousel.Slide key={index}>
                            <Client review={item.review} Avatar={item.avatar} author={item.author} rating={item.rating} />
                        </Carousel.Slide>
                    )
                })}

            </Carousel>
        </section>
    )
}

export default Testimonials