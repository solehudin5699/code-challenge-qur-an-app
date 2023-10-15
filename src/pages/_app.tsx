import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Modals } from '@generouted/react-router/lazy';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootLayout } from '@/components/layouts';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <Outlet />
        <Modals />
        <ScrollRestoration />
      </RootLayout>
    </QueryClientProvider>
  );
}
