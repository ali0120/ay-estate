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
    images: "/png/heroImage.png",
    url: "https://ay-estate-two.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AyEstate - Discover Your Dream Home",
    description:
      "Find your dream property with AyEstate's trusted agents, featuring luxury villas, modern apartments, and more.",
    images: "/png/heroImage.png",
  },
};

export const villaListingsMetadata: Metadata = {
  title: "AyEstate - Villa Listings | Discover Luxury Villas",
  description:
    "Explore the finest luxury villas at AyEstate. Whether you're looking to rent or buy, our curated listings offer you the best properties in prime locations.",
  metadataBase: new URL("https://ay-estate-two.vercel.app/"),
  keywords:
    "Villa Listings, Luxury Villas, Real Estate, Property Rentals, Dream Villas, Modern Villas, High-End Villas, Property Investment, Villa for Sale, Villa for Rent",
  alternates: {
    canonical: "https://ay-estate-two.vercel.app/listings",
  },
  openGraph: {
    title: "AyEstate - Villa Listings | Discover Luxury Villas",
    description:
      "Find your dream villa with AyEstate. From modern architecture to serene getaways, we provide a wide range of luxury villa options.",
    images: "/png/product-7.png",
    url: "https://ay-estate-two.vercel.app/listings",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AyEstate - Villa Listings | Discover Luxury Villas",
    description:
      "Browse our exclusive collection of luxury villas. Ideal for property buyers and investors looking for high-end homes.",
    images: "/png/product-7.png",
  },
};

export const aboutPageMetadata: Metadata = {
  title: "About AyEstate - Our Mission, Team & Achievements",
  description:
    "Learn about AyEstate, our dedicated team of professionals, and our mission to help you find your dream home. Discover our achievements and industry-leading services.",
  metadataBase: new URL("https://ay-estate-two.vercel.app/"),
  keywords:
    "About AyEstate, Real Estate Team, Our Mission, Property Experts, Award-Winning Company, Real Estate Services, Trusted Agents, Company Achievements",
  alternates: {
    canonical: "https://ay-estate-two.vercel.app/about-us",
  },
  openGraph: {
    title: "About AyEstate - Our Mission, Team & Achievements",
    description:
      "At AyEstate, we pride ourselves on offering exceptional real estate services. Meet our creative team and learn about our industry awards and achievements.",
    images: "/png/about_hero.png", // Adjust the image path accordingly
    url: "https://ay-estate-two.vercel.app/about-us",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About AyEstate - Our Mission, Team & Achievements",
    description:
      "Meet AyEstate's professional team and discover our award-winning real estate services. Learn more about our mission and achievements.",
    images: "/png/about_hero.png", // Adjust the image path accordingly
  },
};

export const contactPageMetadata: Metadata = {
  title: "Contact AyEstate - Reach Our Team & Customer Support",
  description:
    "Get in touch with AyEstate's team for inquiries, customer support, or sales assistance. Find our office locations and contact information here.",
  metadataBase: new URL("https://ay-estate-two.vercel.app/"),
  keywords:
    "Contact AyEstate, Customer Support, Real Estate Inquiries, Office Location, Sales Team, Real Estate Assistance, Get in Touch",
  alternates: {
    canonical: "https://ay-estate-two.vercel.app/contact-us",
  },
  openGraph: {
    title: "Contact AyEstate - Reach Our Team & Customer Support",
    description:
      "Need help with real estate inquiries? Contact AyEstate's team or visit our office locations for personalized assistance.",
    images: "/png/map.png", // Adjust the image path accordingly
    url: "https://ay-estate-two.vercel.app/contact-us",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact AyEstate - Reach Our Team & Customer Support",
    description:
      "Reach out to AyEstate's sales team, find customer support, or get help with any real estate inquiries. Contact us today for assistance.",
    images: "/png/map.png", // Adjust the image path accordingly
  },
};

export const blogPageMetadata: Metadata = {
  title: "AyEstate Blog - Real Estate Tips, Market Trends & Success Stories",
  description:
    "Stay updated with AyEstate's blog, where we share real estate tips, market trends, investment strategies, and inspiring success stories to guide your property journey.",
  metadataBase: new URL("https://ay-estate-two.vercel.app/"),
  keywords:
    "Real Estate Blog, Property Investment, Market Trends, Real Estate Tips, Success Stories, Property Listings, Luxury Homes, Real Estate News, Buying Homes, Selling Homes",
  alternates: {
    canonical: "https://ay-estate-two.vercel.app/blog",
  },
  openGraph: {
    title: "AyEstate Blog - Real Estate Tips, Market Trends & Success Stories",
    description:
      "Explore AyEstate's blog for expert real estate tips, the latest market trends, and success stories that inspire your real estate investment decisions.",
    images: "/png/blog/one.png", // Adjust the image path accordingly
    url: "https://ay-estate-two.vercel.app/blog",
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
  title: "Recent Articles - AyEstate Blog",
  description:
    "Explore the latest articles and insights on real estate, investment strategies, and property trends at AyEstate.",
  keywords:
    "Real Estate, Property Investment, Recent Articles, Real Estate Tips, Property Listings, Investment Advice",
  openGraph: {
    title: "Recent Articles - AyEstate Blog",
    description:
      "Stay updated with AyEstate's most recent blog posts and articles covering real estate trends, property investment, and more.",
    url: "https://ay-estate-two.vercel.app/blog/recent-articles",
    type: "website",
    images: "/png/blog/recent/one.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recent Articles - AyEstate Blog",
    description:
      "Discover recent articles on real estate trends, tips, and investment opportunities on AyEstate's blog.",
    images: "/png/blog/recent/one.png",
  },
  alternates: {
    canonical: "https://ay-estate-two.vercel.app/blog/recent-articles",
  },
};

export const faqPageMetadata: Metadata = {
  title: "FAQ - AyEstate | Frequently Asked Questions",
  description:
    "Find answers to frequently asked questions about AyEstate's real estate services, property listings, and investment opportunities.",
  keywords:
    "AyEstate FAQ, Real Estate FAQ, Property Buying Questions, Real Estate Services, Property Investment FAQs, Real Estate Answers",
  openGraph: {
    title: "FAQ - AyEstate | Frequently Asked Questions",
    description:
      "Get answers to common questions about real estate, property investments, buying, selling, and more with AyEstate.",
    url: "https://ay-estate-two.vercel.app/faqs",
    type: "website",
    images: "/png/heroImage.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - AyEstate | Frequently Asked Questions",
    description:
      "Explore AyEstate's FAQ section for insights on real estate services, property listings, and investment advice.",
    images: "/png/heroImage.png",
  },
  alternates: {
    canonical: "https://ay-estate-two.vercel.app/faqs",
  },
};