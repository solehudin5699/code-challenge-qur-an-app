import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface RootProps {
  children: React.ReactNode;
}
function Root({ children }: RootProps) {
  const { pathname } = useLocation();
  const isLogin = JSON.parse(localStorage.getItem('login') || 'false');

  useEffect(() => {
    if (pathname === '/login' && isLogin) {
      window.location.href = '/';
    } else if (pathname.startsWith('/surah') && !isLogin) {
      window.location.href = '/login';
    }
  }, [pathname, isLogin]);

  return <>{children}</>;
}

export default Root;
