import React from 'react';
import { Box, Flex } from '@mantine/core';
import Stars from './Stars';

type Author = {
    name: string;
    title: string;
};

type TestimonialProps = {
    review: string;
    Avatar: React.ElementType; 
    rating: number;
    author: Author;
};

const Client: React.FC<TestimonialProps> = ({ review, rating, Avatar,author }) => {

    return (
        <React.Fragment>
            <Flex className='justify-center gap-[4px]'>
                <Stars rating={rating} />
            </Flex>
            <Box className='px-[20px] xl:px-0'>
                <h6 className="py-[32px] md:w-[53.333%] m-auto text-[20px] lg:text-[24px] font-soraBold leading-[28px] lg:leading-[33.6px]">{review}</h6>
                <Flex className='justify-center items-center gap-[20px] flex-col lg:flex-row'>
                    {<Avatar width={56} height={56} className='avatar'/>}
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