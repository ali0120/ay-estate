import { Box, Button } from '@mantine/core'
import AccordingComponent from './components/AccordingComponent'
import CenteredTextBlock from '../../CenteredTextBlock'

const FaqsQuestions = () => {
    return (
        <section className='bg-White text-YankeesBlue relative'>
            <Box py={{ base: 50, md: 100 }} px={{ base: 20, md: 100 }} >
                <CenteredTextBlock
                    heading="Our Website"
                    paragraph="Frequently asked question about our website"
                />
                <AccordingComponent />
                <Box className='mt-[20px] flex justify-center' >
                    <Button h={{ base: 48, sm: 56 }} className='w-full md:w-auto py-[16px] px-[35px] text-[12px] md:text-[18px] leading-[15.6px] md:leading-[23.4px] font-soraBold md:font-soraSemiBold text-ChineseBlack capitalize'>
                        Give a Quote
                    </Button>
                </Box>
            </Box>
        </section>
    )
}

export default FaqsQuestions