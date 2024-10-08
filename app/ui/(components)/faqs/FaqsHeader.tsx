'use client'
import { useMediaQuery } from '@mantine/hooks';
import {  Button, Paper, TextInput } from '@mantine/core'
import IconSearch from '@/public/svg/search-normal.svg'

const FaqsHeader = () => {
    const isDesktop = useMediaQuery('(min-width: 56.25em)');
    return (
        <section className='bg-White' >
            <div className='px-[20px] xl:px-[100px] pt-[30px] lg:pt-[120px]'>
                <div className="text-center mx-auto">
                    <h1 className='text-[24px] lg:text-[44px] font-soraBold text-YankeesBlue leading-[31.2px] lg:leading-[57.2px] capitalize' >Helping you is our priority</h1>
                    <Paper shadow="xs" className='lg:max-w-[70%] m-auto mt-[16px] md:mt-[50px] rounded-[16px] '>
                        <TextInput
                            placeholder="Search question"
                            radius={16}
                            leftSection={<IconSearch stroke={1.5} />}
                            leftSectionWidth={80}
                            rightSectionWidth={170}
                            rightSection={isDesktop ? <Button className=' h-[56px] px-[53px] text-ChineseBlack font-soraSemiBold mr-[6px]' >Search</Button> : null}
                            classNames={{
                                input: '!px-[65px] h-[52px] lg:h-[68px] font-soraSemiBold !bg-White lg:!pr-[180px]',
                            }}
                        />
                    </Paper>
                    <p className='text-RomanSilver font-soraSemiBold text-center mt-[12px] lg:mt-[24px]'>*We are collect your searching keywords to improve our FAQ</p>
                </div>
            </div>
        </section>
    )
}

export default FaqsHeader