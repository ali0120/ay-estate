import { Box, Flex } from '@mantine/core'
import UserIcon from '@/public/svg/user.svg'
import SmsIcon from '@/public/svg/sms.svg'
import TeacherIcon from '@/public/svg/teacher.svg'

const FaqsInfoSection = () => {
    return (
        <section className='bg-White text-YankeesBlue relative'>
            <Box className='px-[20px] md:px-[100px] py-[50px] md:py-[100px]'>
                <div className="grid md:grid-cols-3 gap-[48px] md:gap-[18px] lg:gap-[48px]">
                    <Flex className='text-center flex-col'>
                        <Box className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
                            <UserIcon color="#F9F9F9" className='mx-auto mobile_color' />
                        </Box>
                        <h4 className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >My Account</h4>
                        <p className='px-[20px] lg:px-0 text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>From how to setup your account to how to apply for a job</p>
                    </Flex>
                    <Flex className='text-center flex-col'>
                        <Box className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
                            <SmsIcon color="#F9F9F9" className='mx-auto mobile_color' />
                        </Box>
                        <h4 className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >Email Campaigns</h4>
                        <p className='px-[20px] lg:px-0 text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>Engage your contacts using th ebest mobile- friendly email design tools</p>
                    </Flex>
                    <Flex className='text-center flex-col'>
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