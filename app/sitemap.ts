export default function sitemap() {
    return [
      {
        url: 'https://ay-estate-two.vercel.app/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
          url: 'https://ay-estate-two.vercel.app/listings',
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
        {
            url: 'https://ay-estate-two.vercel.app/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://ay-estate-two.vercel.app/blog/recent-articles',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
          url: 'https://ay-estate-two.vercel.app/about-ayestate-creative-team',
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
        {
          url: 'https://ay-estate-two.vercel.app/contact-us',
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
    ]
  }