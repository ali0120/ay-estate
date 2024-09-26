import { Metadata } from 'next'
import FaqsHeader from '../ui/(components)/faqs/FaqsHeader'
import FaqsInfoSection from '../ui/(components)/faqs/FaqsInfoSection'
import FaqsQuestions from '../ui/(components)/faqs/FaqQuestions'
import AdditionalQuestions from '../ui/(components)/faqs/AdditionalQuestions'
import { faqPageMetadata } from '../metaDataConfig'

export const metadata: Metadata = faqPageMetadata;

const page = () => {
  return (
    <>
      <FaqsHeader />  
      <FaqsInfoSection />
      <FaqsQuestions />
      <AdditionalQuestions />
    </>
  )
}

export default page