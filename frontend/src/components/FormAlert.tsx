import { CircleAlert, CircleCheck, TriangleAlert, X } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const styles = {
  danger: 'border-danger-border bg-danger-bg text-danger',
  success: 'border-success-border bg-success-bg text-success',
  warning: 'border-warning-border bg-warning-bg text-warning',
};
const icons = { danger: CircleAlert, success: CircleCheck, warning: TriangleAlert };

export function FormAlert({
  variant,
  children,
  action,
  onDismiss,
}: {
  variant: keyof typeof styles;
  children: ReactNode;
  action?: ReactNode;
  onDismiss?: () => void;
}) {
  const Icon = icons[variant];
  return (
    <div
      role={variant === 'success' ? 'status' : 'alert'}
      className={cn('flex gap-3 rounded-lg border px-4 py-3 text-[15px] leading-relaxed', styles[variant])}
    >
      <Icon className="mt-0.5 size-5 shrink-0" aria-hidden />
      <div className="flex-1 space-y-2">
        <p>{children}</p>
        {action}
      </div>
      {onDismiss && (
        <button type="button" onClick={onDismiss} aria-label="Fechar aviso" className="-my-1 -mr-1 grid size-8 shrink-0 place-items-center rounded-md hover:bg-black/5">
          <X className="size-4" aria-hidden />
        </button>
      )}
    </div>
  );
}
