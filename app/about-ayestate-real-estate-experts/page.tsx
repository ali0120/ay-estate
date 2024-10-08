import { Metadata } from 'next'
import AboutHeader from '../ui/(components)/about/AboutHeader'
import OurTeam from '../ui/(components)/about/OurTeam'
import Achievement from '../ui/(components)/about/Achievement'
import OurClients from '../ui/(components)/about/OurClients'
import CTASection from '../ui/(components)/home/CTASection'
import { aboutPageMetadata } from '../metaDataConfig'

export const metadata: Metadata = aboutPageMetadata;

const About = () => {
    return (
        <>
            <AboutHeader />
            <OurTeam />
            <Achievement />
            <OurClients />
            <CTASection />
        </>
    )
}

export default About