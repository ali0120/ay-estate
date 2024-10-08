import { Metadata } from "next";

export const homePageMetadata: Metadata = {
  title: "AyEstate - Discover Your Dream Home and Ideal Property",
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
    title: "AyEstate - Discover Your Dream Home and Ideal Property",
    description:
      "At AyEstate, we provide top real estate services to help you find, buy, or invest in your dream property with ease and confidence.",
    images: "/webp/heroImage.webp",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    type: "website",
    siteName: "AyEstate",
  },
  twitter: {
    card: "summary",
    title: "AyEstate - Discover Your Dream Home and Ideal Property",
    description:
      "At AyEstate, we provide top real estate services to help you find, buy, or invest in your dream property with ease and confidence.",
    images: "/webp/heroImage.webp",
    site: "@AyEstate",
  },
};

export const villaListingsMetadata: Metadata = {
  title: "AyEstate - Villa Listings | Discover Luxury Villas and Homes",
  description:
    "Explore the finest luxury villas at AyEstate. Whether you're looking to rent or buy, our curated listings offer you the best properties in prime locations.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords:
    "Villa Listings, Luxury Villas, Real Estate, Property Rentals, Dream Villas, Modern Villas, High-End Villas, Property Investment, Villa for Sale, Villa for Rent",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/listings`,
    languages: {
      en: `${process.env.NEXT_PUBLIC_BASE_URL}/listings`,
      "x-default": `${process.env.NEXT_PUBLIC_BASE_URL}/listings`,
    },
  },
  openGraph: {
    title: "AyEstate - Villa Listings | Discover Luxury Villas and Homes",
    description:
      "Explore the finest luxury villas at AyEstate. Whether you're looking to rent or buy, our curated listings offer you the best properties in prime locations.",
    images: "/png/product-7.png",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/listings`,
    type: "website",
    siteName: "AyEstate",
  },
  twitter: {
    card: "summary",
    title: "AyEstate - Villa Listings | Discover Luxury Villas and Homes",
    description:
      "Explore the finest luxury villas at AyEstate. Whether you're looking to rent or buy, our curated listings offer you the best properties in prime locations.",
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
    "AyEstate, About AyEstate, Real Estate Team, Our Mission, Property Experts, Award-Winning Company, Real Estate Services, Trusted Agents, Company Achievements",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
    languages: {
      en: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
      "x-default": `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
    },
  },
  openGraph: {
    title: "About AyEstate: Your Trusted Experts in Real Estate Solutions",
    description:
      "Learn about AyEstate, our dedicated team, and our mission to help you find your dream home. Explore our achievements and industry-leading services.",
    images: "/png/about_hero.png",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
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
  title: "Contact AyEstate: Expert Support & Real Estate Inquiries",
  description:
    "Contact AyEstate for inquiries, support, or sales assistance. Our team is ready to help. Visit us or reach out through the contact details provided.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords:
    "Contact AyEstate, Customer Support, Real Estate Inquiries, Office Location, Sales Team, Real Estate Assistance, Get in Touch",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
    languages: {
      en: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
      "x-default": `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
    },
  },
  openGraph: {
    title: "Contact AyEstate: Expert Support & Real Estate Inquiries",
    description:
      "Contact AyEstate for inquiries, support, or sales assistance. Our team is ready to help. Visit us or reach out through the contact details provided.",
    images: "/png/map.png",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
    type: "website",
    siteName: "AyEstate",
  },
  twitter: {
    card: "summary",
    title: "Contact AyEstate: Expert Support & Real Estate Inquiries",
    description:
      "Contact AyEstate for inquiries, support, or sales assistance. Our team is ready to help. Visit us or reach out through the contact details provided.",
    images: "/png/map.png",
    site: "@AyEstate",
  },
};

export const blogPageMetadata: Metadata = {
  title: "AyEstate Blog - Real Estate Tips & Market Trends",
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
    title: "AyEstate Blog - Real Estate Tips, Market Trends & Success Stories",
    description:
      "Stay updated with AyEstate's blog for real estate tips, market trends, investment strategies, and success stories to guide your property journey.",
    images: "/png/blog/one.png",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    type: "website",
    siteName: "AyEstate",
  },
  twitter: {
    card: "summary",
    title: "AyEstate Blog - Real Estate Tips, Market Trends & Success Stories",
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
