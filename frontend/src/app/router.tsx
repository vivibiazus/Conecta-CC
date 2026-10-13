import { createBrowserRouter } from 'react-router';
import { GuestOnly, RootRedirect } from '@/features/auth/guards';
import { LoginPage } from '@/features/auth/LoginPage';

export const router = createBrowserRouter([
  { element: <GuestOnly />, children: [{ path: '/login', element: <LoginPage /> }] },
  { path: '*', element: <RootRedirect /> },
]);
