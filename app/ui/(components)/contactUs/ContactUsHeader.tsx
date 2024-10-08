import Image from 'next/image'
import MapImage from '@/public/png/map.png'
import LocationIcon from '@/public/svg/location.svg'
import CenteredTextBlock from '../CenteredTextBlock'

const ContactUsHeader = () => {
    return (
        <section className='bg-White' >
            <div className='px-[20px] xl:px-[100px] pt-[30px] lg:pt-[120px] pb-[16px] lg:pb-[100px]'>
                <CenteredTextBlock
                    heading="Contact AyEstate for Expert Real Estate Support"
                    paragraph="If you have any questions or need support, don’t hesitate to contact us. We specialize in delivering exceptional service tailored to your real estate needs."
                />
                <div className='relative pt-[20px]'>
                    <Image src={MapImage} priority alt='map-image' className='w-full h-[400px] lg:h-full object-cover' />
                    <LocationIcon color="#B7E08A" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                </div>
            </div>
        </section>
    )
}

export default ContactUsHeader