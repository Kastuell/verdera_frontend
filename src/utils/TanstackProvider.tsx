"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export function TanstackProvider({ children }: { children: React.ReactNode }) {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                staleTime: 1000000
            }
        }
    })

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
