import { Metadata } from 'next';
import DetailsHeader from '@/app/ui/(components)/listingDetail/DetailsHeader'
import ImageGallery from '@/app/ui/(components)/listingDetail/ImageGallery'
import AmenitiesSection from '@/app/ui/(components)/listingDetail/AmenitiesSection'
import { properties } from '@/app/ui/(components)/listings/data/properties';

export async function generateStaticParams() {
  return properties?.map((property) => ({
    type: property.details.type
  }));
}

export async function generateMetadata({ params }: { params: { type: string } }): Promise<Metadata> {
  const { type } = params;

  const title = `${capitalize(type)} - AyEstate | Beachfront Property in Bali and More`;
  const description =
    `Explore this luxury ${type} in Bali. Spacious, modern, and equipped with top amenities, this property offers stunning ocean views and ultimate comfort.`;
  const keywords =
    `${capitalize(type)}, Bali Property, Beachfront Villa, Bali Real Estate, Modern Villa, Spacious Villa, Ocean View Property, Bali Luxury Homes`;

  const imageUrl = '/png/details.png';

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description:
        `Discover this luxurious ${type} in Bali featuring modern design, spacious rooms, and breathtaking ocean views. Perfect for your dream vacation or investment opportunity that you won’t want to miss.`,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/luxury-villa-listings/${type}`,
      type: 'website',
      images: imageUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description:
        `Explore this luxury ${type} in Bali. Enjoy modern amenities, spacious living areas, and stunning ocean views. A perfect vacation home or investment opportunity that you won’t want to miss.`,
      images: imageUrl,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/luxury-villa-listings/${type}`,
      languages: {
        en: `${process.env.NEXT_PUBLIC_BASE_URL}/luxury-villa-listings/${type}`,
        "x-default": `${process.env.NEXT_PUBLIC_BASE_URL}/luxury-villa-listings/${type}`,
      },
    },
  };
}

// Utility function to capitalize the first letter of the type for formatting
function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

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