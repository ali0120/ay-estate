"use client"
import React, { ReactNode, useEffect, useState } from "react";
import { AppShell, Box, Group } from '@mantine/core';
import { useMediaQuery } from "@mantine/hooks";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { Header } from './header';
import { Footer } from './footer';
import LoadingPartially from "../loading";
import { usePathname } from "next/navigation";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const pathname = usePathname()

    const [isPartiallyLoading, setIsPartiallyLoading] = useState(false);
    const activeQueries = useIsFetching({ stale: false });
    const activeMutations = useIsMutating();
    useEffect(() => {
        setIsPartiallyLoading(activeQueries > 0 || activeMutations > 0);
    }, [activeQueries, activeMutations]);

    // Check if on the homepage
    const isHomePage = pathname === "/";

    // Check if the screen size is equal to or larger than md
    const isMdScreen = useMediaQuery('(min-width: 992px)');

    // Set background color based on the current page and screen size
    const headerBgColor = isHomePage && isMdScreen ? "#F6F3F3" : "#FFFFFF";

    return (
        <AppShell
            header={{ height: { base: 74, lg: 100 } }}
        >
            <AppShell.Header bg={headerBgColor} withBorder={false} >
                <Group h="100%" px={{ base: '20px', md: '50px', lg: '100px' }}>
                    <Header />
                </Group>
            </AppShell.Header>

            <AppShell.Main>
                {isPartiallyLoading ? <LoadingPartially /> : children}
            </AppShell.Main>
            <AppShell.Footer pos={"relative"} bg={"#111111"} className='border-none' >
                <Box px={{ base: '20px', md: '50px', lg: '100px' }}>
                    <Footer />
                </Box>
            </AppShell.Footer>
        </AppShell>
    );
}
