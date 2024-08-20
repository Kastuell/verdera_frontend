"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: false,
    },
  },
});

export function TanstackProvider({ children }: { children: React.ReactNode }) {
  

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
