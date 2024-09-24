import { Box } from '@mantine/core'
import React from 'react'

const RecentArticlesHeader = () => {
    return (
        <section className='bg-White' >
            <Box className='px-[20px] md:px-[100px] pt-[30px] md:pt-[40px]'>
                    <h2 className='text-[32px] text-DarkJungleGreentwo font-soraBold'>Recent Articles</h2>
                    <p className='text-[18px] text-RomanSilver font-soraRegular mt-[12px]' >Newest update article from AyEstate</p>
            </Box>
        </section>
    )
}

export default RecentArticlesHeader