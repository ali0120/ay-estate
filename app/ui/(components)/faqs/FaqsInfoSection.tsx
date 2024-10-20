import { Flex } from '@mantine/core'
import UserIcon from '@/public/svg/user.svg'
import SmsIcon from '@/public/svg/sms.svg'
import TeacherIcon from '@/public/svg/teacher.svg'

const FaqsInfoSection = () => {
    return (
        <section className='bg-White text-YankeesBlue relative'>
            <div className='px-[20px] xl:px-[100px] py-[50px] lg:py-[100px]'>
                <div className="grid md:grid-cols-3 gap-[48px] md:gap-[18px] lg:gap-[48px]">
                    <Flex className='text-center flex-col md:px-[12px]'>
                        <div className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
                            <UserIcon color="#F9F9F9" className='mx-auto mobile_color' />
                        </div>
                        <p className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >My Account</p>
                        <p className='text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>From how to setup your account to how to apply for a job</p>
                    </Flex>
                    <Flex className='text-center flex-col md:px-[12px]'>
                        <div className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
                            <SmsIcon color="#F9F9F9" className='mx-auto mobile_color' />
                        </div>
                        <p className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >Email Campaigns</p>
                        <p className='text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>Engage your contacts using th ebest mobile- friendly email design tools</p>
                    </Flex>
                    <Flex className='text-center flex-col md:px-[12px]'>
                        <div className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
                            <TeacherIcon color="#F9F9F9" className='mx-auto mobile_color' />
                        </div>
                        <p className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >Jobify Academy</p>
                        <p className='text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>Learn everything about client declaration and partner management</p>
                    </Flex>
                </div>
            </div>
        </section>
    )
}

export default FaqsInfoSection