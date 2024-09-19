import { Box, Flex } from '@mantine/core'
import UserIcon from '@/public/svg/user.svg'
import SmsIcon from '@/public/svg/sms.svg'
import WorldIcon from '@/public/svg/global.svg'
import CenteredTextBlock from '../CenteredTextBlock'


const AdditionalQuestions = () => {
    return (
        <section className='bg-White text-YankeesBlue relative'>
            <Box pb={{ base: 100, md: 200 }} pt={{ base: 3, md: 100 }} px={{ base: 20, md: 100 }} >
                <CenteredTextBlock
                    heading="Still Have a question?"
                    paragraph="If you cannot find answer to your question in our FAQ, you can always contact us. We wil answer to you shortly!"
                />
                <div className="grid md:grid-cols-3 gap-[48px] md:gap-[18px] lg:gap-[48px] mt-[50px] lg:mt-0">
                    <Flex direction={'column'} className='text-center'>
                        <Box className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
                            <UserIcon color="#F9F9F9" className='mx-auto yellow_path' />
                        </Box>
                        <h4 className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >+(+1) 2345 6789</h4>
                        <p className='text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>Our 24/7 Customer Services</p>
                    </Flex>
                    <Flex direction={'column'} className='text-center'>
                        <Box className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
                            <SmsIcon color="#F9F9F9" className='mx-auto yellow_path' />
                        </Box>
                        <h4 className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >support@ayestate.com</h4>
                        <p className='text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>Alternative way to get anwser faster.</p>
                    </Flex>
                    <Flex direction={'column'} className='text-center'>
                        <Box className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
                            <WorldIcon color="#F9F9F9" className='mx-auto yellow_path' />
                        </Box>
                        <h4 className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >Real Estate Management</h4>
                        <p className='text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>Our community ready to help you</p>
                    </Flex>
                </div>
            </Box>
        </section>
    )
}

export default AdditionalQuestions