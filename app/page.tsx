'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Advice from './components/Advice';

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Advice />
    </QueryClientProvider>
  );
}
