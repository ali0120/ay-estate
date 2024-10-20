import { Metadata } from "next";

export const homePageMetadata: Metadata = {
  title: "Discover Your Dream Home Today | AyEstate",
  description:
    "At AyEstate, we provide top real estate services to help you find, buy, or invest in your dream property with ease and confidence.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords:
    "Real Estate, Property Buying, Property Valuation, Real Estate Investment, Dream Home, Luxury Homes, Modern Apartments, Trusted Agents, Real Estate Deals, Property Listings",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
    languages: {
      en: process.env.NEXT_PUBLIC_BASE_URL,
      "x-default": process.env.NEXT_PUBLIC_BASE_URL,
    },
  },
  openGraph: {
    title: "Discover Your Dream Home Today | AyEstate",
    description:
      "At AyEstate, we provide top real estate services to help you find, buy, or invest in your dream property with ease and confidence.",
    images: "/webp/heroImage.webp",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    type: "website",
    siteName: "AyEstate",
  },
  twitter: {
    card: "summary",
    title: "Discover Your Dream Home Today | AyEstate",
    description:
      "At AyEstate, we provide top real estate services to help you find, buy, or invest in your dream property with ease and confidence.",
    images: "/webp/heroImage.webp",
    site: "@AyEstate",
  },
};

export const villaListingsMetadata: Metadata = {
  title: "AyEstate | Luxury Villas and Homes Listings - Explore Exclusive Properties",
  description:
    "Discover luxury villas and homes with AyEstate. Browse our extensive villa listings to find your dream property.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords:
    "Villa Listings, Luxury Villas, Real Estate, Property Rentals, Dream Villas, Modern Villas, High-End Villas, Property Investment, Villa for Sale, Villa for Rent",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/luxury-villa-listings`,
    languages: {
      en: `${process.env.NEXT_PUBLIC_BASE_URL}/luxury-villa-listings`,
      "x-default": `${process.env.NEXT_PUBLIC_BASE_URL}/luxury-villa-listings`,
    },
  },
  openGraph: {
    title: "AyEstate | Luxury Villas and Homes Listings - Explore Exclusive Properties",
    description:
      "Discover luxury villas and homes with AyEstate. Browse our extensive villa listings to find your dream property.",
    images: "/png/product-7.png",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/luxury-villa-listings`,
    type: "website",
    siteName: "AyEstate",
  },
  twitter: {
    card: "summary",
    title: "AyEstate | Luxury Villas and Homes Listings - Explore Exclusive Properties",
    description:
      "Discover luxury villas and homes with AyEstate. Browse our extensive villa listings to find your dream property.",
    images: "/png/product-7.png",
    site: "@AyEstate",
  },
};

export const aboutPageMetadata: Metadata = {
  title: "About AyEstate: Your Trusted Experts in Real Estate Solutions",
  description:
    "Learn about AyEstate, our dedicated team, and our mission to help you find your dream home. Explore our achievements and industry-leading services.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords:
    "AyEstate, real estate, trusted experts, About AyEstate, Real Estate Team, Our Mission, Property Experts, Award-Winning Company, Real Estate Services, Trusted Agents, Company Achievements",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/about-ayestate-creative-team`,
    languages: {
      en: `${process.env.NEXT_PUBLIC_BASE_URL}/about-ayestate-creative-team`,
      "x-default": `${process.env.NEXT_PUBLIC_BASE_URL}/about-ayestate-creative-team`,
    },
  },
  openGraph: {
    title: "About AyEstate: Your Trusted Experts in Real Estate Solutions",
    description:
      "Learn about AyEstate, our dedicated team, and our mission to help you find your dream home. Explore our achievements and industry-leading services.",
    images: "/png/about_hero.png",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-ayestate-creative-team`,
    type: "website",
    siteName: "AyEstate",
  },
  twitter: {
    card: "summary",
    title: "About AyEstate: Your Trusted Experts in Real Estate Solutions",
    description:
      "Learn about AyEstate, our dedicated team, and our mission to help you find your dream home. Explore our achievements and industry-leading services.",
    images: "/png/about_hero.png",
    site: "@AyEstate",
  },
};

export const contactPageMetadata: Metadata = {
  title: "Contact Ayestate | Expert Real Estate Support",
  description:
    "Get expert support for your real estate inquiries with AyEstate. Reach out for assistance with sales and services.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords: "Contact AyEstate, Real Estate Support, Inquiries, Customer Service, Sales Assistance",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-ayestate-excellent-customer-service`,
    languages: {
      en: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-ayestate-excellent-customer-service`,
      "x-default": `${process.env.NEXT_PUBLIC_BASE_URL}/contact-ayestate-excellent-customer-service`,
    },
  },
  openGraph: {
    title: "Contact Ayestate | Expert Real Estate Support",
    description:
      "Get expert support for your real estate inquiries with AyEstate. Reach out for assistance with sales and services.",
    images: "/png/map.png",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-ayestate-excellent-customer-service`,
    type: "website",
    siteName: "AyEstate",
  },
  twitter: {
    card: "summary",
    title: "Contact Ayestate | Expert Real Estate Support",
    description:
      "Get expert support for your real estate inquiries with AyEstate. Reach out for assistance with sales and services.",
    images: "/png/map.png",
    site: "@AyEstate",
  },
};

export const blogPageMetadata: Metadata = {
  title: "AyEstate Blog: Real Estate Tips, Market Trends, and Insights",
  description:
    "Stay updated with AyEstate's blog for real estate tips, market trends, investment strategies, and success stories to guide your property journey.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords:
    "Real Estate Blog, Property Investment, Market Trends, Real Estate Tips, Success Stories, Property Listings, Luxury Homes, Real Estate News, Buying Homes, Selling Homes",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    languages: {
      en: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      "x-default": `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    },
  },
  openGraph: {
    title: "AyEstate Blog: Real Estate Tips, Market Trends, and Insights",
    description:
      "Stay updated with AyEstate's blog for real estate tips, market trends, investment strategies, and success stories to guide your property journey.",
    images: "/png/blog/one.png",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    type: "website",
    siteName: "AyEstate",
  },
  twitter: {
    card: "summary",
    title: "AyEstate Blog: Real Estate Tips, Market Trends, and Insights",
    description:
      "Stay updated with AyEstate's blog for real estate tips, market trends, investment strategies, and success stories to guide your property journey.",
    images: "/png/blog/one.png",
    site: "@AyEstate",
  },
};

export const recentArticlePageMetadata: Metadata = {
  title: "Recent Articles - AyEstate Blog | Real Estate Insights",
  description:
    "Discover real estate trends, investment strategies, and expert advice at AyEstate. Stay informed and make smarter property decisions.",
  keywords:
    "Real Estate, Property Investment, Recent Articles, Real Estate Tips, Property Listings, Investment Advice",
  openGraph: {
    title: "Recent Articles - AyEstate Blog | Real Estate Insights",
    description:
      "Discover real estate trends, investment strategies, and expert advice at AyEstate. Stay informed and make smarter property decisions.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/recent-articles`,
    type: "website",
    siteName: "AyEstate",
    images: "/png/blog/recent/one.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recent Articles - AyEstate Blog | Real Estate Insights",
    description:
      "Discover real estate trends, investment strategies, and expert advice at AyEstate. Stay informed and make smarter property decisions.",
    images: "/png/blog/recent/one.webp",
    site: "@AyEstate",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/recent-articles`,
    languages: {
      en: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/recent-articles`,
      "x-default": `${process.env.NEXT_PUBLIC_BASE_URL}/blog/recent-articles`,
    },
  },
};

export const faqPageMetadata: Metadata = {
  title: "AyEstate FAQ: Real Estate Services & Investment Answers",
  description:
    "Explore AyEstate's FAQ section for answers to your real estate questions, including services, listings, and investment opportunities.",
  keywords:
    "AyEstate FAQ, Real Estate FAQ, Property Buying Questions, Real Estate Services, Property Investment FAQs, Real Estate Answers",
  openGraph: {
    title: "AyEstate FAQ: Real Estate Services & Investment Answers",
    description:
      "Explore AyEstate's FAQ section for answers to your real estate questions, including services, listings, and investment opportunities.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/faqs`,
    type: "website",
    siteName: "AyEstate",
    images: "/webp/heroImage.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "AyEstate FAQ: Real Estate Services & Investment Answers",
    description:
      "Explore AyEstate's FAQ section for answers to your real estate questions, including services, listings, and investment opportunities.",
    images: "/webp/heroImage.webp",
    site: "@AyEstate",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/faqs`,
    languages: {
      en: `${process.env.NEXT_PUBLIC_BASE_URL}/faqs`,
      "x-default": `${process.env.NEXT_PUBLIC_BASE_URL}/faqs`,
    },
  },
};
