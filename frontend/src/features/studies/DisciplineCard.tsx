import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Chip } from '@/components/Chip';
import type { Discipline } from '@/features/profile/hooks';

export function DisciplineCard({ discipline, mine }: { discipline: Discipline; mine: boolean }) {
  return (
    <Link
      to={`/estudos/${discipline.slug}`}
      className="flex h-full flex-col gap-4 rounded-2xl border border-blue-200/70 bg-white p-6 transition-colors hover:border-blue-300 hover:bg-[#f5f9fe]"
    >
      <span className="flex items-start justify-between gap-3">
        <span className="min-w-0 font-display text-lg font-bold leading-snug text-foreground break-words">{discipline.name}</span>
        {mine && (
          <span className="shrink-0 whitespace-nowrap">
            <Chip>Minha disciplina</Chip>
          </span>
        )}
      </span>
      <span className="mt-auto inline-flex items-center gap-2 font-semibold text-action">
        Ver disciplina
        <ArrowRight className="size-4" aria-hidden />
      </span>
    </Link>
  );
}
