import { Metadata } from 'next'
import { villaListingsMetadata } from '../metaDataConfig'
import PageContent from '../ui/(components)/listings/PageContent';

export const metadata: Metadata = villaListingsMetadata;

const Page = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Luxury Villas and Homes Listings - AyEstate",
        "description": "Discover our selection of luxury villas and homes for sale or lease. Browse exclusive properties with detailed information on pricing, location, and features.",
        "url": "https://www.ayestate.com/listings/villa",
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.ayestate.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Real Estate",
                    "item": "https://www.ayestate.com/real-estate"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Villa",
                    "item": "https://www.ayestate.com/listings/villa"
                }
            ]
        },
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "House",
                        "name": "Villa Cozy Cottage",
                        "description": "A cozy cottage villa located in Bali, Indonesia.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Bali",
                            "addressCountry": "Indonesia"
                        },
                        "numberOfRooms": 5,
                        "numberOfBathroomsTotal": 4,
                        "floorSize": {
                            "@type": "QuantitativeValue",
                            "value": 3600,
                            "unitText": "m²"
                        },
                        "additionalType": "Villa"
                    },
                    "priceCurrency": "USD",
                    "price": "300000000",
                    "priceSpecification": {
                        "@type": "Lease",
                        "duration": "P1Y"
                    },
                    "url": "https://www.ayestate.com/listings/villa-cozy-cottage"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "House",
                        "name": "Modern Luxury Villa",
                        "description": "A modern luxury villa in Bali, Indonesia with stylish interiors.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Bali",
                            "addressCountry": "Indonesia"
                        },
                        "numberOfRooms": 6,
                        "numberOfBathroomsTotal": 5,
                        "floorSize": {
                            "@type": "QuantitativeValue",
                            "value": 4500,
                            "unitText": "m²"
                        },
                        "additionalType": "Villa"
                    },
                    "priceCurrency": "USD",
                    "price": "400000000",
                    "priceSpecification": {
                        "@type": "Lease",
                        "duration": "P1Y"
                    },
                    "url": "https://www.ayestate.com/listings/modern-luxury-villa"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "House",
                        "name": "Charming Villa with Ocean View",
                        "description": "A charming villa in Bali with ocean views and modern amenities.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Bali",
                            "addressCountry": "Indonesia"
                        },
                        "numberOfRooms": 4,
                        "numberOfBathroomsTotal": 3,
                        "floorSize": {
                            "@type": "QuantitativeValue",
                            "value": 3200,
                            "unitText": "m²"
                        },
                        "additionalType": "Villa"
                    },
                    "priceCurrency": "USD",
                    "price": "200000000",
                    "priceSpecification": {
                        "@type": "Lease",
                        "duration": "P1Y"
                    },
                    "url": "https://www.ayestate.com/listings/charming-villa-ocean-view"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "House",
                        "name": "Spacious Family House",
                        "description": "A spacious family house in Bali, Indonesia perfect for large gatherings.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Bali",
                            "addressCountry": "Indonesia"
                        },
                        "numberOfRooms": 5,
                        "numberOfBathroomsTotal": 6,
                        "floorSize": {
                            "@type": "QuantitativeValue",
                            "value": 5500,
                            "unitText": "m²"
                        },
                        "additionalType": "House"
                    },
                    "priceCurrency": "USD",
                    "price": "500000000",
                    "priceSpecification": {
                        "@type": "Lease",
                        "duration": "P1Y"
                    },
                    "url": "https://www.ayestate.com/listings/spacious-family-house"
                }
            ]
        },
        "organization": {
            "@type": "Organization",
            "name": "AyEstate",
            "url": "https://www.ayestate.com",
            "logo": "https://www.ayestate.com/logo.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1 2345 6789",
                "contactType": "Customer Service",
                "email": "hello.ayestate@example.com"
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "4140 Parker Rd. Allentown",
                "addressLocality": "New Mexico",
                "postalCode": "31134",
                "addressCountry": "US"
            }
        }
    };
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PageContent />
        </>
    )
}

export default Page
