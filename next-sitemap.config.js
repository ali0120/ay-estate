module.exports = {
    siteUrl: "https://ay-estate-two.vercel.app",
    generateRobotsTxt: true,
    exclude: ["/server-sitemap-index.xml"], // <= exclude here
    robotsTxtOptions: {
        additionalSitemaps: [
            "https://ay-estate-two.vercel.app/server-sitemap-index.xml", // <==== Add here
        ],
    },
};