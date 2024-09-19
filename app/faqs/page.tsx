import React from 'react'
import FaqsHeader from '../ui/(components)/faqs/FaqsHeader'
import FaqsInfoSection from '../ui/(components)/faqs/FaqsInfoSection'
import FaqsQuestions from '../ui/(components)/faqs/FaqQuestions'
import AdditionalQuestions from '../ui/(components)/faqs/AdditionalQuestions'

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