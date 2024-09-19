import { Box, Flex } from '@mantine/core'
import UserIcon from '@/public/svg/user.svg'
import SmsIcon from '@/public/svg/sms.svg'
import TeacherIcon from '@/public/svg/teacher.svg'

const FaqsInfoSection = () => {
    return (
        <section className='bg-White text-YankeesBlue relative'>
            <Box py={{ base: 50, md: 100 }} px={{ base: 20, md: 100 }} >
                <div className="grid md:grid-cols-3 gap-[48px] md:gap-[18px] lg:gap-[48px]">
                    <Flex direction={'column'} className='text-center'>
                        <Box className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
                            <UserIcon color="#F9F9F9" className='mx-auto mobile_color' />
                        </Box>
                        <h4 className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >My Account</h4>
                        <p className='px-[20px] lg:px-0 text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>From how to setup your account to how to apply for a job</p>
                    </Flex>
                    <Flex direction={'column'} className='text-center'>
                        <Box className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
                            <SmsIcon color="#F9F9F9" className='mx-auto mobile_color' />
                        </Box>
                        <h4 className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >Email Campaigns</h4>
                        <p className='px-[20px] lg:px-0 text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>Engage your contacts using th ebest mobile- friendly email design tools</p>
                    </Flex>
                    <Flex direction={'column'} className='text-center'>
                        <Box className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
                            <TeacherIcon color="#F9F9F9" className='mx-auto mobile_color' />
                        </Box>
                        <h4 className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >Jobify Academy</h4>
                        <p className='px-[20px] lg:px-0 text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>Learn everything about client declaration and partner management</p>
                    </Flex>
                </div>
            </Box>
        </section>
    )
}

export default FaqsInfoSection