import { MainLayout } from '@/components/layouts';
import { Outlet } from 'react-router-dom';

function _layout() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default _layout;
