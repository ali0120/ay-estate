import { Box, Button, Flex } from '@mantine/core'
import SmsIcon from '@/public/svg/sms.svg'
import LocationIcon from '@/public/svg/white-location.svg'
import SupportIcon from '@/public/svg/24-support.svg'

const ContactInfoSection = () => {
  return (
    <section className='bg-White text-YankeesBlue relative'>
      <Box pb={{ base: '20px', md: '100px' }} px={{ base: '20px', md: '100px' }} >
        <div className="grid md:grid-cols-3 gap-[20px] md:gap-[18px] lg:gap-[48px]">
          <Flex direction={'column'} className='text-center py-[16px] lg:py-[34px] px-[24px] md:px-[0] lg:px-[24px] '>
            <Box className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
              <SmsIcon color="#F9F9F9" className='mx-auto mobile_YellowGreen' />
            </Box>
            <h4 className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >Email Us</h4>
            <p className='px-[20px] md:px-0 text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>Ask us a question by email and we will respond within a few days.</p>
            <Button className='text-[16px] font-soraBold leading-[20.8px] capitalize pt-[24px] !text-YellowGreen lg:!text-ChineseBlack !bg-transparent'>
              Leave a Messages
            </Button>
          </Flex>
          <Flex direction={'column'} className='text-center py-[16px] lg:py-[34px] px-[24px] md:px-[0] lg:px-[24px] '>
          <Box className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
            <LocationIcon color="#F9F9F9" className='mx-auto mobile_YellowGreen' />
          </Box>
            <h4 className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >Official Office</h4>
            <p className='px-[20px] md:px-0 text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>You can meet us at our office and discuss the details of your question.</p>
            <Button className='text-[16px] font-soraBold leading-[20.8px] capitalize pt-[24px] !text-YellowGreen lg:!text-ChineseBlack !bg-transparent'>
              Get Directions
            </Button>
          </Flex>
          <Flex direction={'column'} className='text-center py-[16px] lg:py-[34px] px-[24px] md:px-[0] lg:px-[24px] '>
            <Box className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
              <SupportIcon color="#F9F9F9" className='mx-auto mobile_YellowGreen' />
            </Box>
            <h4 className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >Customer Support</h4>
            <p className='px-[20px] md:px-0 text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>Call us if your question requires an immediate response.</p>
            <Button className='text-[16px] font-soraBold leading-[20.8px] capitalize pt-[24px] !text-YellowGreen lg:!text-ChineseBlack !bg-transparent'>
              +(632) 3892402
            </Button>
          </Flex>
        </div>
      </Box>
    </section>
  )
}

export default ContactInfoSection