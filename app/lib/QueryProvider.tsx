"use client"
import React, { ReactNode, useMemo } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
interface ChildrenProps {
    children: ReactNode;
}
const QueryProvider = ({ children }: ChildrenProps) => {
    const router = useRouter();

    const queryClient = useMemo(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        retry: false,
                        staleTime: 6 * 1000,
                        // refetchInterval: 6 * 1000,
                    },
                }
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router]
    );
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider