import { Outlet } from 'react-router-dom';
import { Modals } from '@generouted/react-router/lazy';
import { MainLayout } from '@/components/layouts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Outlet />
        <Modals />
      </MainLayout>
    </QueryClientProvider>
  );
}
