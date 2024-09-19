import React from 'react'
import ContactUsHeader from '../ui/(components)/contactUs/ContactUsHeader'
import ContactInfoSection from '../ui/(components)/contactUs/ContactInfoSection'
import ContactUsForm from '../ui/(components)/contactUs/ContactUsForm'

const page = () => {
    return (
        <>
            <ContactUsHeader />
            <ContactInfoSection />
            <ContactUsForm />
        </>
    )
}

export default page