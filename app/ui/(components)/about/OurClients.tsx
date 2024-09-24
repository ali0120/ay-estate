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
            <Box className='px-[20px] md:px-[120px] pb-[20px] md:pb-[80px]'>
                <Divider color='rgba(255, 255, 255, 0.1)' className='pb-[16px] md:pb-[60px]' />
                <h2 className=' w-[80%] m-auto lg:w-full text-center text-[12px] lg:text-[18px] leading-[18px] lg:leading-[28px] font-soraRegular text-Vodka mb-[24px]' >We’ve built with the most growth company around the world</h2>
                <Flex
                    visibleFrom='sm'
                    className='flex-wrap items-center gap-[19px] md:gap-[50px] justify-center'
                >
                    <FaceBookIcon />
                    <NetflixIcon />
                    <AmazonIcon />
                    <YoutubeIcon />
                    <GoogleIcon />

                </Flex>
                <Flex
                    hiddenFrom='sm'
                    className='flex-wrap items-center justify-center gap-[19px] md:gap-[50px] gap-y-0'
                >
                    <Box className='py-[24px] md:py-[40px] px-[10px] md:px-[23px]'>
                        <PhoneFaceBookIcon />
                    </Box>
                    <Box className='py-[24px] md:py-[40px] px-[10px] md:px-[23px]'>
                        <PhoneNetflixIcon />

                    </Box>
                    <Box className='py-[24px] md:py-[40px] px-[10px] md:px-[23px]'>
                        <PhoneAmazonIcon />

                    </Box>
                    <Box className='py-[24px] md:py-[40px] px-[10px] md:px-[23px]'>
                        <PhoneYoutubeIcon />

                    </Box>
                    <Box className='py-[24px] md:py-[40px] px-[10px] md:px-[23px]'>
                        <PhoneGoogleIcon />
                    </Box>
                </Flex>
            </Box>
        </section>
    )
}

export default OurClients
