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
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "AyEstate",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4140 Parker Rd.",
                "addressLocality": "Allentown",
                "addressRegion": "New Mexico",
                "postalCode": "31134",
                "addressCountry": "US"
              },
              "telephone": "+1 2345 6789",
              "email": "hello.ayestate@example.com",
              "url": "https://ay-estate-two.vercel.app",
              "sameAs": [
                "https://www.facebook.com/ay-estate",
                "https://www.twitter.com/ay-estate",
                "https://www.instagram.com/ay-estate"
              ],
              "openingHours": "Mo-Sa 08:00-18:00",
              "priceRange": "$$$",
              "image": "https://ay-estate-two.vercel.app/png/heroImage.png"
            }
          `}
        </script>
      </head>
      <body >
        <QueryProvider>
          <MantineProvider theme={theme} defaultColorScheme={'light'}>
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
