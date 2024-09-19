import { Box, Divider, Flex } from '@mantine/core'
import FaceBookIcon from '@/public/svg/Facebook-Logo.wine.svg'
import NetflixIcon from '@/public/svg/Netflix-Logo.wine.svg'
import AmazonIcon from '@/public/svg/Amazon_(company)-Logo.wine.svg'
import YoutubeIcon from '@/public/svg/YouTube-Logo.wine.svg'
import GoogleIcon from '@/public/svg/Google-Logo.wine 1.svg'

import PhoneFaceBookIcon from '@/public/svg/facebook-icon.svg'
import PhoneNetflixIcon from '@/public/svg/netflix-icon.svg'
import PhoneAmazonIcon from '@/public/svg/amazon-icon.svg'
import PhoneYoutubeIcon from '@/public/svg/youtube-icon.svg'
import PhoneGoogleIcon from '@/public/svg/google-icon.svg'

const OurClients = () => {
    return (
        <section className='bg-EerieBlack text-White relative'>
            <Box pb={{ base: '20px', md: '80px' }} px={{ base: '20px', md: '120px' }} >
                <Divider pb={{ base: 16, md: 60 }} color='rgba(255, 255, 255, 0.1)' />
                <p className=' w-[80%] m-auto lg:w-full text-center text-[12px] lg:text-[18px] leading-[18px] lg:leading-[28px] font-soraRegular text-Vodka mb-[24px]' >We’ve built with the most growth company around the world</p>
                <Flex
                    visibleFrom='sm'
                    gap={{ base: 19, md: 50 }}
                    wrap={'wrap'}
                    align="center"
                    justify="center"
                >
                    <FaceBookIcon />
                    <NetflixIcon />
                    <AmazonIcon />
                    <YoutubeIcon />
                    <GoogleIcon />

                </Flex>
                <Flex
                    hiddenFrom='sm'
                    gap={{ base: 19, md: 50 }}
                    rowGap={0}
                    wrap={'wrap'}
                    align="center"
                    justify={"center"}
                >
                    <Box py={{ base: 24, md: 40 }} px={{ base: 10, md: 23 }}>
                        <PhoneFaceBookIcon />
                    </Box>
                    <Box py={{ base: 24, md: 40 }} px={{ base: 10, md: 23 }}>
                        <PhoneNetflixIcon />

                    </Box>
                    <Box py={{ base: 24, md: 40 }} px={{ base: 10, md: 23 }}>
                        <PhoneAmazonIcon />

                    </Box>
                    <Box py={{ base: 24, md: 40 }} px={{ base: 10, md: 23 }}>
                        <PhoneYoutubeIcon />

                    </Box>
                    <Box py={{ base: 24, md: 40 }} px={{ base: 10, md: 23 }}>
                        <PhoneGoogleIcon />
                    </Box>
                </Flex>
            </Box>
        </section>
    )
}

export default OurClients
