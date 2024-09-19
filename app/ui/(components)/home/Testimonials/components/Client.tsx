import React from 'react';
import { Box, Flex } from '@mantine/core';
import AvatarImage from '@/public/svg/avatar-image.svg'
import Stars from './Stars';

type Author = {
    name: string;
    title: string;
};

type TestimonialProps = {
    review: string;
    rating: number;
    author: Author;
};

const Client: React.FC<TestimonialProps> = ({ review, rating, author }) => {

    return (
        <React.Fragment>
            <Flex justify={'center'} gap={4} >
                <Stars rating={rating} />
            </Flex>
            <Box px={{ base: 20, md: 0 }}>
                <h5 className="py-[32px] md:w-[53.333%] m-auto text-[20px] lg:text-[24px] font-soraBold leading-[28px] lg:leading-[33.6px]">{review}</h5>
                <Flex gap={20} direction={{ base: 'column', lg: 'row' }} align={'center'} justify={'center'}>
                    <AvatarImage className='avatar' />
                    <div className='text-[16px] leading-[24px]'>
                        <p className="font-semibold"><strong>{author.name}</strong></p>
                        <p className="font-soraRegular">{author.title}</p>
                    </div>
                </Flex>
            </Box>
        </React.Fragment>
    )
}

export default Client