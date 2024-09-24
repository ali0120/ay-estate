import { Box, Button } from '@mantine/core'
import AccordingComponent from './components/AccordingComponent'

const FAQ = () => {
    return (
        <section className='bg-White'>
            <Box className='p-[20px] md:p-[100px]'>
                <div className="text-center pt-[30px] md:pt-0">
                    <h3 className='text-LightSalmon text-[18px] leading-[23.4px] font-soraSemiBold' >F A Q</h3>
                    <h2 className='capitalize pt-[20px] pb-[16px] lg:pb-[30px] text-[24px] lg:text-[44px] text-DarkJungleGreentwo font-soraBold leading-[31.2px] lg:leading-[57.2px]'>frequently asked question</h2>
                    <p className='text-[18px] text-RomanSilver leading-[28.8px] font-soraRegular' >Did you find the question as you expected?</p>
                </div>
                <AccordingComponent />
                <Box className='mt-[50px] flex justify-center pb-[30px] md:pb-0' >
                    <Button className='h-[48px] md:h-[56px] w-full md:w-auto py-[15.5px] px-[35px] text-[12px] md:text-[18px] leading-[15.6px] md:leading-[23.4px] font-soraBold md:font-soraSemiBold text-ChineseBlack capitalize'>
                        Give a Quote
                    </Button>
                </Box>
            </Box>
        </section>
    )
}

export default FAQ