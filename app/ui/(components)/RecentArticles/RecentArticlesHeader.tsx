import { Box } from '@mantine/core'
import React from 'react'

const RecentArticlesHeader = () => {
    return (
        <section className='bg-White' >
            <Box px={{ base: 20, md: 100 }} pt={{ base: 30, md: 40 }}>
                    <h2 className='text-[32px] text-DarkJungleGreentwo font-soraBold'>Recent Articles</h2>
                    <p className='text-[18px] text-RomanSilver font-soraRegular mt-[12px]' >Newest update article from AyEstate</p>
            </Box>
        </section>
    )
}

export default RecentArticlesHeader