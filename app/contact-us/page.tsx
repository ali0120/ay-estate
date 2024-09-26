import { Metadata } from 'next';
import ContactUsHeader from '../ui/(components)/contactUs/ContactUsHeader'
import ContactInfoSection from '../ui/(components)/contactUs/ContactInfoSection'
import ContactUsForm from '../ui/(components)/contactUs/ContactUsForm'
import { contactPageMetadata } from '../metaDataConfig';

export const metadata: Metadata = contactPageMetadata;

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