import { Eye } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function ProfileSection({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-blue-200/70 bg-white p-6 sm:p-7">
      <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
      {description && <p className="mt-1 text-muted-foreground">{description}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function VisibilityNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('flex items-start gap-2 text-sm text-muted-foreground', className)}>
      <Eye className="mt-0.5 size-4 shrink-0" aria-hidden />
      <span>{children}</span>
    </p>
  );
}
