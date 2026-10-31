import { initialsOf } from './initials';
import { VisibilityNote } from './ProfileSection';

export function ProfileSummaryCard({ displayName }: { displayName: string }) {
  const initials = initialsOf(displayName);

  return (
    <section className="flex flex-col gap-5 rounded-2xl border border-blue-200/70 bg-white p-6 sm:flex-row sm:items-center sm:p-7">
      <span aria-hidden className="grid size-20 shrink-0 place-items-center rounded-full bg-[#d6e4f7] font-display text-3xl font-bold text-navy-900">
        {initials || '?'}
      </span>
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground">{displayName.trim() || 'Nome de exibição'}</h2>
        <p className="mt-1 text-muted-foreground">Ciência da Computação</p>
        <VisibilityNote className="mt-3">
          As informações públicas do seu perfil podem ser vistas apenas por estudantes autenticados no ConectaCC. Seu e-mail não é exibido.
        </VisibilityNote>
      </div>
    </section>
  );
}
