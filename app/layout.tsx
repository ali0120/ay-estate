import type { Metadata } from "next";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { Suspense } from "react";
import Layout from "./ui/layout/Index";
import { theme } from './../theme';
import QueryProvider from "./lib/QueryProvider";
import { homePageMetadata } from "./metaDataConfig";

export const metadata: Metadata = homePageMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <QueryProvider>
          <MantineProvider theme={theme} defaultColorScheme={'light'}>
            <Suspense fallback={<h2>loading...</h2>}>
              <Layout>
                {children}
              </Layout>
            </Suspense>
          </MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
