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
            "axios", // Optimizing Axios
        ],
        modularizeImports: {
            // For Mantine
            "@mantine/core": {
                transform: "@mantine/core/{{member}}",
            },
            "@mantine/hooks": {
                transform: "@mantine/hooks/{{member}}",
            },
            // For React Query
            "react-query": {
                transform: "react-query/{{member}}",
            },
            // For React Hook Form
            "react-hook-form": {
                transform: "react-hook-form/{{member}}",
            },
        },
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