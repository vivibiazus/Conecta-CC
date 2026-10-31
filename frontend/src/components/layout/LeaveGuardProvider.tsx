import { useCallback, useMemo, useRef, type ReactNode } from 'react';
import { LeaveGuardContext, type LeaveCheck } from './leaveGuard';

// ações que não são navegação (o Sair faz logout antes de navegar) perguntam aqui se podem descartar alterações
export function LeaveGuardProvider({ children }: { children: ReactNode }) {
  const check = useRef<LeaveCheck | null>(null);
  const setLeaveCheck = useCallback((next: LeaveCheck | null) => {
    check.current = next;
  }, []);
  const confirmLeave = useCallback(() => (check.current ? check.current() : Promise.resolve(true)), []);
  const value = useMemo(() => ({ setLeaveCheck, confirmLeave }), [setLeaveCheck, confirmLeave]);

  return <LeaveGuardContext.Provider value={value}>{children}</LeaveGuardContext.Provider>;
}
