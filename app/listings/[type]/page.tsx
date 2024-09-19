import DetailsHeader from '@/app/ui/(components)/listingDetail/DetailsHeader'
import ImageGallery from '@/app/ui/(components)/listingDetail/ImageGallery'
import AmenitiesSection from '@/app/ui/(components)/listingDetail/AmenitiesSection'

const page = () => {
  return (
    <>
      <DetailsHeader />
      <ImageGallery />
      <AmenitiesSection />
    </>
  )
}

export default page