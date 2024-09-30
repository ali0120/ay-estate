import { Metadata } from "next";

export const homePageMetadata: Metadata = {
  title: "AyEstate - Discover Your Dream Home and Ideal Property",
  description:
    "At AyEstate, we provide exceptional real estate services to help you find, buy, or invest in your dream property with confidence, making the process easy and seamless.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords:
    "Real Estate, Property Buying, Property Valuation, Real Estate Investment, Dream Home, Luxury Homes, Modern Apartments, Trusted Agents, Real Estate Deals, Property Listings",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
  openGraph: {
    title: "AyEstate - Discover Your Dream Home and Ideal Property",
    description:
      "Explore luxury properties and connect with trusted real estate agents to streamline the process of buying, selling, and investing in real estate.",
    images: "/png/heroImage.png",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AyEstate - Discover Your Dream Home and Ideal Property",
    description:
      "Find your dream property with AyEstate's trusted agents, featuring luxury villas, modern apartments, and more.",
    images: "/png/heroImage.png",
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
  },
  openGraph: {
    title: "AyEstate - Villa Listings | Discover Luxury Villas and Homes",
    description:
      "Find your dream villa with AyEstate. From modern architecture to serene getaways, we provide a wide range of luxury villa options.",
    images: "/png/product-7.png",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/listings`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AyEstate - Villa Listings | Discover Luxury Villas and Homes",
    description:
      "Browse our exclusive collection of luxury villas. Ideal for property buyers and investors looking for high-end homes.",
    images: "/png/product-7.png",
  },
};

export const aboutPageMetadata: Metadata = {
  title: "About AyEstate: Our Mission & Team",
  description:
    "Learn about AyEstate, our dedicated team of professionals, and our mission to help you find your dream home. Discover our achievements and industry-leading services.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords:
  "AyEstate, About AyEstate, Real Estate Team, Our Mission, Property Experts, Award-Winning Company, Real Estate Services, Trusted Agents, Company Achievements",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
  },
  openGraph: {
    title: "About AyEstate: Our Mission & Team",
    description:
      "At AyEstate, we pride ourselves on offering exceptional real estate services. Meet our creative team and learn about our industry awards and achievements.",
    images: "/png/about_hero.png", 
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About AyEstate: Our Mission & Team",
    description:
      "Meet AyEstate's professional team and discover our award-winning real estate services. Learn more about our mission and achievements.",
    images: "/png/about_hero.png", 
  },
};

export const contactPageMetadata: Metadata = {
  title: "Contact AyEstate: Expert Support",
  description:
    "Contact AyEstate for inquiries, customer support, or sales assistance. Our dedicated team is ready to help you. Visit our office locations or reach out through the contact information provided.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords:
    "Contact AyEstate, Customer Support, Real Estate Inquiries, Office Location, Sales Team, Real Estate Assistance, Get in Touch",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
  },
  openGraph: {
    title: "Contact AyEstate: Expert Support",
    description:
      "Need help with real estate inquiries? Contact AyEstate's team or visit our office locations for personalized assistance.",
    images: "/png/map.png", 
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact AyEstate: Expert Support",
    description:
      "Reach out to AyEstate's sales team, find customer support, or get help with any real estate inquiries. Contact us today for assistance.",
    images: "/png/map.png", 
  },
};

export const blogPageMetadata: Metadata = {
  title: "AyEstate Blog - Real Estate Tips & Market Trends",
  description:
    "Stay updated with AyEstate's blog, where we share real estate tips, market trends, investment strategies, and inspiring success stories to guide your property journey.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords:
    "Real Estate Blog, Property Investment, Market Trends, Real Estate Tips, Success Stories, Property Listings, Luxury Homes, Real Estate News, Buying Homes, Selling Homes",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
  },
  openGraph: {
    title: "AyEstate Blog - Real Estate Tips, Market Trends & Success Stories",
    description:
      "Explore AyEstate's blog for expert real estate tips, the latest market trends, and success stories that inspire your real estate investment decisions.",
    images: "/png/blog/one.png", 
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AyEstate Blog - Real Estate Tips, Market Trends & Success Stories",
    description:
      "Follow AyEstate's blog for the latest real estate market insights, property investment tips, and motivational success stories.",
    images: "/png/blog/one.png",
  },
};

export const recentArticlePageMetadata: Metadata = {
  title: "Recent Articles - AyEstate Blog | Real Estate Insights",
  description:
    "Discover the latest articles and insights on real estate trends, investment strategies, and expert advice at AyEstate. Stay informed and make better property decisions.",
  keywords:
    "Real Estate, Property Investment, Recent Articles, Real Estate Tips, Property Listings, Investment Advice",
  openGraph: {
    title: "Recent Articles - AyEstate Blog | Real Estate Insights",
    description:
      "Stay updated with AyEstate's most recent blog posts and articles covering real estate trends, property investment, and more.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/recent-articles`,
    type: "website",
    images: "/png/blog/recent/one.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recent Articles - AyEstate Blog | Real Estate Insights",
    description:
      "Discover recent articles on real estate trends, tips, and investment opportunities on AyEstate's blog.",
    images: "/png/blog/recent/one.png",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/recent-articles`,
  },
};

export const faqPageMetadata: Metadata = {
  title: "AyEstate FAQ: Common Questions Answered",
  description:
    "Explore AyEstate's FAQ section for comprehensive answers to your real estate questions, including services, property listings, and investment opportunities. Get the insights you need for your real estate journey.",
  keywords:
    "AyEstate FAQ, Real Estate FAQ, Property Buying Questions, Real Estate Services, Property Investment FAQs, Real Estate Answers",
  openGraph: {
    title: "FAQ - AyEstate | Frequently Asked Questions and Support",
    description:
      "Explore AyEstate's FAQ section for comprehensive answers to your real estate questions, including services, property listings, and investment opportunities. Get the insights you need for your real estate journey.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/faqs`,
    type: "website",
    images: "/png/heroImage.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - AyEstate | Frequently Asked Questions and Support",
    description:
      "Explore AyEstate's FAQ section for comprehensive answers to your real estate questions, including services, property listings, and investment opportunities. Get the insights you need for your real estate journey.",
    images: "/png/heroImage.png",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/faqs`,
  },
};