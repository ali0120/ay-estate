import { Metadata } from "next";

export const homePageMetadata: Metadata = {
  title: "AyEstate - Discover Your Dream Home",
  description:
    "At AyEstate, we offer exceptional real estate services to help you find, buy, or invest in your dream property with ease and confidence.",
  metadataBase: new URL("https://ay-estate-two.vercel.app/"),
  keywords:
    "Real Estate, Property Buying, Property Valuation, Real Estate Investment, Dream Home, Luxury Homes, Modern Apartments, Trusted Agents, Real Estate Deals, Property Listings",
  alternates: {
    canonical: "https://ay-estate-two.vercel.app/",
  },
  openGraph: {
    title: "AyEstate - Discover Your Dream Home",
    description:
      "Explore luxury properties and connect with trusted real estate agents to streamline the process of buying, selling, and investing in real estate.",
    images: "/public/png/heroImage.png",
    url: "https://ay-estate-two.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AyEstate - Discover Your Dream Home",
    description:
      "Find your dream property with AyEstate's trusted agents, featuring luxury villas, modern apartments, and more.",
    images: "/public/png/heroImage.png",
  },
};
