import { createContext, useContext } from 'react';

export type LeaveCheck = () => Promise<boolean>;

export type LeaveGuard = {
  setLeaveCheck: (check: LeaveCheck | null) => void;
  confirmLeave: () => Promise<boolean>;
};

export const LeaveGuardContext = createContext<LeaveGuard | null>(null);

export function useLeaveGuard(): LeaveGuard {
  const guard = useContext(LeaveGuardContext);
  if (!guard) throw new Error('useLeaveGuard fora do LeaveGuardProvider');
  return guard;
}
