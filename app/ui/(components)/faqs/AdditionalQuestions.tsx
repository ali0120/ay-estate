import { Flex } from '@mantine/core'
import UserIcon from '@/public/svg/user.svg'
import SmsIcon from '@/public/svg/sms.svg'
import WorldIcon from '@/public/svg/global.svg'

const AdditionalQuestions = () => {
    return (
        <section className='bg-White text-YankeesBlue relative'>
            <div className='px-[20px] xl:px-[100px] pb-[100px] lg:pb-[200px] pt-[3px] lg:pt-[100px]'>
                <div className="text-center mx-auto">
                    <h2 className='text-[24px] lg:text-[44px] font-soraBold text-YankeesBlue leading-[31.2px] lg:leading-[57.2px] capitalize'>
                        Still Have a question?
                    </h2>
                    <p className='text-[14px] lg:text-[18px] font-soraRegular text-RomanSilver leading-[22.4px] lg:leading-[28.8px] lg:w-[62%] lg:m-auto pt-[16px] lg:pt-[30px] pb-[30px]'>
                        If you cannot find answer to your question in our FAQ, you can always contact us. We wil answer to you shortly!
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-[20px] mt-[36px] lg:mt-[44px]">
                    <Flex className='text-center flex-col'>
                        <div className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
                            <UserIcon color="#F9F9F9" className='mx-auto yellow_path' />
                        </div>
                        <h4 className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >+(+1) 2345 6789</h4>
                        <p className='text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>Our 24/7 Customer Services</p>
                    </Flex>
                    <Flex className='text-center flex-col'>
                        <div className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
                            <SmsIcon color="#F9F9F9" className='mx-auto yellow_path' />
                        </div>
                        <h4 className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >support@ayestate.com</h4>
                        <p className='text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>Alternative way to get anwser faster.</p>
                    </Flex>
                    <Flex className='text-center flex-col'>
                        <div className='bg-GhostWhite w-fit my-0 m-auto rounded-full p-[12px] md:p-[25px]'>
                            <WorldIcon color="#F9F9F9" className='mx-auto yellow_path' />
                        </div>
                        <h4 className='text-[16px] lg:text-[24px] pt-[16px] lg:pt-[30px] pb-[8px] lg:pb-[16px] leading-[20.8px] lg:leading-[31.2px] font-soraBold' >Real Estate Management</h4>
                        <p className='text-[14px] lg:text-[18px] leading-[22.4px] lg:leading-[28.8px] font-soraRegular text-RomanSilver '>Our community ready to help you</p>
                    </Flex>
                </div>
            </div>
        </section>
    )
}

export default AdditionalQuestions