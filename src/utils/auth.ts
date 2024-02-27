// utils/auth.ts

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/redux/store';

export const useRequireAuth = () => {
  const router = useRouter();
  const isLoggedIn = useAppSelector((state) => state.authReducer.value.isLoggedIn)

  useEffect(() => {
    const accessToken = sessionStorage.getItem('access_token');

    if (!accessToken && !['/login', '/register', '/confirm-password'].includes(router.pathname)) {
      router.push('/login');
    }
  }, [router, isLoggedIn]);
};
