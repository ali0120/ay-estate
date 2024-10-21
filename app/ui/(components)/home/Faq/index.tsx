import { Button } from '@mantine/core'
import AccordingComponent from './components/AccordingComponent'

const FAQ = () => {
    return (
        <section className='bg-White'>
            <div className='p-[20px] xl:p-[100px]'>
                <div className="text-center pt-[24px] lg:pt-0">
                    <h3 className='hidden md:block text-LightSalmon text-[18px] leading-[23.4px] font-soraSemiBold' >F A Q</h3>
                    <h2 className='capitalize lg:pt-[20px] pb-[16px] lg:pb-[30px] text-[24px] lg:text-[44px] text-DarkJungleGreentwo font-soraBold leading-[31.2px] lg:leading-[57.2px]'>frequently asked question</h2>
                    <p className='text-[14px] md:text-[18px] text-RomanSilver leading-[22.4px] md:leading-[28.8px] font-soraRegular' >Did you find the question as you expected?</p>
                </div>
                <AccordingComponent />
                <div className='mt-[50px] flex justify-center pb-[30px] lg:pb-0' >
                    <Button className='h-[48px] md:h-[56px] md:w-[190px] w-full text-[12px] md:text-[18px] leading-[15.6px] md:leading-[23.4px] font-soraBold md:font-soraSemiBold text-ChineseBlack capitalize'>
                        Give a Quote
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default FAQ