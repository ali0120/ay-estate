import type { Metadata } from "next";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { Suspense } from "react";
import Layout from "./ui/layout/Index";
import { theme } from './../theme';
import QueryProvider from "./lib/QueryProvider";
import { homePageMetadata } from "./metaDataConfig";

export const metadata: Metadata = homePageMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AyEstate",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4140 Parker Rd.",
      "addressLocality": "Allentown",
      "addressRegion": "New Mexico",
      "postalCode": "31134",
      "addressCountry": "US",
    },
    "telephone": "+1 2345 6789",
    "email": "hello.ayestate@example.com",
    "url": process.env.NEXT_PUBLIC_BASE_URL,
    "sameAs": [
      "https://www.linkedin.com/ay-estate",
      "https://www.youtube.com/ay-estate",
      "https://www.facebook.com/ay-estate",
      "https://www.twitter.com/ay-estate",
      "https://www.instagram.com/ay-estate",
      "https://www.x.com/ay-estate",
    ],
    "urlLinks": [
      "https://ay-estate-two.vercel.app/luxury-villa-listings",
      "https://ay-estate-two.vercel.app/blog",
      "https://ay-estate-two.vercel.app/about-ayestate-creative-team",
      "https://ay-estate-two.vercel.app/contact-ayestate-excellent-customer-service",
      "https://www.zillow.com/", // External link
      "https://www.realtor.com/" // External link
    ],
    "openingHours": "Mo-Sa 08:00-18:00",
    "priceRange": "$$$",
    "image": `${process.env.NEXT_PUBLIC_BASE_URL}/webp/heroImage.webp`,
  };
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="qAoUOPqAKJ57RcqjhgsS18uRfsCXB2kFAk1_nJKdaaM" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body >
        <QueryProvider>
          <MantineProvider withGlobalClasses={false} theme={theme} defaultColorScheme={'light'}>
            <Suspense fallback={<h2>loading...</h2>}>
              <Layout>
                {children}
              </Layout>
            </Suspense>
          </MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
