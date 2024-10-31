"use client"
import React, { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from './get-query-client';
interface ChildrenProps {
    children: ReactNode;
}
const QueryProvider = ({ children }: ChildrenProps) => {
    const queryClient = getQueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider