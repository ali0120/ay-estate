import { Box, Button } from '@mantine/core'
import AccordingComponent from './components/AccordingComponent'
import CenteredTextBlock from '../../CenteredTextBlock'

const FaqsQuestions = () => {
    return (
        <section className='bg-White text-YankeesBlue relative'>
            <Box className='px-[20px] xl:px-[100px] py-[50px] lg:py-[100px]'>
                <CenteredTextBlock
                    heading="Our Website"
                    paragraph="Frequently asked question about our website"
                />
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