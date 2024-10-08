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
            "@mantine/core": {
                transform: "@mantine/core/esm/{{member}}/{{member}}.js",
                skipDefaultConversion: true,
                preventFullImport: true,
            },
            "@mantine/core/lib/AppShell": {
                transform: "@mantine/core/esm/AppShell/{{member}}/{{member}}.js",
                skipDefaultConversion: true,
                preventFullImport: true,
            },
            "@mantine/core/lib/Grid": {
                transform: "@mantine/core/esm/Grid/{{member}}/{{member}}.js",
                skipDefaultConversion: true,
                preventFullImport: true,
            },
            "@mantine/core/lib/Burger": {
                transform: "@mantine/core/esm/Burger/Burger.js",
                skipDefaultConversion: true,
                preventFullImport: true,
            },
            "@mantine/core/lib/Menu/MenuDivider/MenuDivider": {
                transform: "@mantine/core/esm/Menu/MenuDivider/MenuDivider.js",
                skipDefaultConversion: true,
                preventFullImport: true,
            },
            "@mantine/core/lib/Menu/MenuItem/MenuItem": {
                transform: "@mantine/core/esm/Menu/MenuItem/MenuItem.js",
                skipDefaultConversion: true,
                preventFullImport: true,
            },
            "@mantine/core/lib/Menu/MenuTarget/MenuTarget": {
                transform: "@mantine/core/esm/Menu/MenuTarget/MenuTarget.js",
                skipDefaultConversion: true,
            },
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