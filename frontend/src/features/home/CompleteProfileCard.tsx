import { UserCheck } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

export function CompleteProfileCard() {
  return (
    <section aria-labelledby="complete-seu-perfil" className="flex flex-col rounded-2xl border border-blue-300 bg-white p-7">
      <span className="grid size-14 place-items-center rounded-full bg-[#d6e4f7] text-navy-900">
        <UserCheck className="size-6" aria-hidden />
      </span>
      <h2 id="complete-seu-perfil" className="mt-5 font-display text-xl font-bold text-foreground">
        Complete seu perfil
      </h2>
      <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">
        Selecione pelo menos uma disciplina atual para personalizar sua experiência no ConectaCC.
      </p>
      <Button asChild className="mt-6 h-12 w-full text-base font-semibold">
        <Link to="/perfil?editar=disciplinas">Completar perfil</Link>
      </Button>
    </section>
  );
}
