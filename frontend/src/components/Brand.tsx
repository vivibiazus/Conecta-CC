import { cn } from '@/lib/utils';

export function Brand({ tone, className }: { tone: 'dark' | 'light'; className?: string }) {
  return (
    <span className={cn('font-display font-bold tracking-tight', tone === 'dark' ? 'text-white' : 'text-navy-900', className)}>
      Conecta<span className={tone === 'dark' ? 'text-glow' : 'text-action'}>CC</span>
    </span>
  );
}
