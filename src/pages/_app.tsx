import { Outlet } from 'react-router-dom';
import { Modals } from '@generouted/react-router';
import { MainLayout } from '@/components/layouts';

export default function App() {
  return (
    <MainLayout>
      <Outlet />
      <Modals />
    </MainLayout>
  );
}
