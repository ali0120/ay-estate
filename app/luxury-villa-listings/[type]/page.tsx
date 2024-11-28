import { Metadata } from 'next';
import DetailsHeader from '@/app/ui/(components)/listingDetail/DetailsHeader'
import ImageGallery from '@/app/ui/(components)/listingDetail/ImageGallery'
import AmenitiesSection from '@/app/ui/(components)/listingDetail/AmenitiesSection'
import { properties } from '@/app/ui/(components)/listings/data/properties';

export const revalidate = 60

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

  const imageUrl = '/webp/details.webp';

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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Luxury Beach Villa - AyEstate",
    "description": "Experience the ultimate in beachfront luxury with breathtaking ocean views in this luxury beach villa located in Bali, Indonesia.",
    "publisher": {
      "@type": "Organization",
      "name": "AyEstate",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`,
        "width": 250,
        "height": 60
      }
    },
    "mainEntity": {
      "@type": "LodgingBusiness",
      "name": "Luxury Beach Villa",
      "description": "Stunning property with luxurious amenities and breathtaking views. The perfect blend of comfort and style, located in Bali, Indonesia.",
      "image": [
        {
          "@type": "ImageObject",
          "url": `${baseUrl}/images/villa-main.jpg`,
          "caption": "Luxury Beach Villa with stunning ocean view"
        },
        {
          "@type": "ImageObject",
          "url": `${baseUrl}/images/villa-pool.jpg`,
          "caption": "Beautiful pool area with beachfront access"
        },
        {
          "@type": "ImageObject",
          "url": `${baseUrl}/images/villa-interior.jpg`,
          "caption": "Spacious and modern interior"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bali",
        "addressCountry": "Indonesia"
      },
      "priceRange": "$3,000,000",
      "amenities": ["Beachfront", "Modern", "Spacious"],
      "telephone": "+123456789",
      "email": "hello.ayestate@example.com",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "53"
      },
      "location": {
        "@type": "Place",
        "name": "Luxury Beach Villa",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -8.3405,
          "longitude": 115.092
        }
      },
      "potentialAction": {
        "@type": "ReserveAction",
        "target": `${baseUrl}/contact`,
        "actionStatus": "PotentialActionStatus"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
        { "@type": "ListItem", "position": 2, "name": "Listings", "item": `${baseUrl}/listings` },
        { "@type": "ListItem", "position": 3, "name": "Luxury Beach Villa", "item": `${baseUrl}/listings/luxury-beach-villa` }
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+123456789",
      "contactType": "Customer Service",
      "areaServed": "Worldwide",
      "availableLanguage": "English"
    }
  };


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DetailsHeader />
      <ImageGallery />
      <AmenitiesSection />
    </>
  )
}

export default page