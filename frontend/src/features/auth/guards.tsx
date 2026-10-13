import { Navigate, Outlet } from 'react-router';
import { useMe } from './hooks';
import { canModerate } from './roles';

export function RequireAuth() {
  const me = useMe();
  if (me.data === null) return <Navigate to="/login" replace />;
  return <Outlet />; // carregando ou com erro: o AppLayout mostra skeleton ou aviso
}

export function GuestOnly() {
  const me = useMe();
  if (me.data) return <Navigate to="/home" replace />;
  return <Outlet />;
}

export function RequireModeration() {
  const me = useMe();
  if (me.data && !canModerate(me.data.role)) return <Navigate to="/home" replace />;
  return <Outlet />;
}

export function RootRedirect() {
  const me = useMe();
  if (me.isPending) return null;
  return <Navigate to={me.data ? '/home' : '/login'} replace />;
}
