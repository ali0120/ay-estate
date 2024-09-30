import { Box, Button } from '@mantine/core'
import AccordingComponent from './components/AccordingComponent'

const FaqsQuestions = () => {
    return (
        <section className='bg-White text-YankeesBlue relative'>
            <Box className='px-[20px] xl:px-[100px] py-[50px] lg:py-[100px]'>
                    <div className="text-center mx-auto">
                    <h2 className='text-[24px] lg:text-[44px] font-soraBold text-YankeesBlue leading-[31.2px] lg:leading-[57.2px] capitalize'>
                    Our Website
                    </h2>
                    <p className='text-[14px] lg:text-[18px] font-soraRegular text-RomanSilver leading-[22.4px] lg:leading-[28.8px] lg:w-[62%] lg:m-auto pt-[16px] lg:pt-[30px] pb-[30px]'>
                    Frequently asked question about our website
                    </p>
                </div>
                <AccordingComponent />
                <Box className='mt-[20px] md:mt-[50px] flex justify-center' >
                    <Button className='w-full h-[48px] md:h-[56px] md:w-auto py-[16px] px-[35px] text-[12px] md:text-[18px] leading-[15.6px] md:leading-[23.4px] font-soraBold md:font-soraSemiBold text-ChineseBlack capitalize'>
                        Give a Quote
                    </Button>
                </Box>
            </Box>
        </section>
    )
}

export default FaqsQuestions