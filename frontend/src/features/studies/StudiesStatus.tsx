import { FormAlert } from '@/components/FormAlert';
import { Skeleton } from '@/components/Skeleton';

export function StudiesLoading() {
  return (
    <div className="space-y-6" aria-busy="true">
      <Skeleton className="h-7 w-56" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <Skeleton key={item} className="h-36 rounded-2xl" />
        ))}
      </div>
      <Skeleton className="h-7 w-56" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Skeleton key={item} className="h-36 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}

export function StudiesError({ onRetry }: { onRetry: () => void }) {
  return (
    <FormAlert
      variant="warning"
      action={
        <button type="button" onClick={onRetry} className="font-semibold underline underline-offset-2">
          Tentar novamente
        </button>
      }
    >
      Não foi possível carregar as disciplinas agora.
    </FormAlert>
  );
}
