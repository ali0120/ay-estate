import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        optimizePackageImports: [
            "@mantine/core", // Optimizing Mantine core components
            "@mantine/hooks", // Optimizing Mantine hooks
            "react-query", // Optimizing React Query
            "react-hook-form", // Optimizing React Hook Form
        ]
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

export default withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
})(nextConfig);