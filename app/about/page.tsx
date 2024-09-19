import OurTeam from '../ui/(components)/about/OurTeam'
import AboutHeader from '../ui/(components)/about/AboutHeader'
import Achievement from '../ui/(components)/about/Achievement'
import OurClients from '../ui/(components)/about/OurClients'
import CTASection from '../ui/(components)/home/CTASection'

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