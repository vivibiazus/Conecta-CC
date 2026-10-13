import { ArrowRight, BookOpen, Briefcase, User as UserIcon, Users, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router';
import { Skeleton } from '@/components/Skeleton';
import { useMe } from '@/features/auth/hooks';
import { ConnectionGraph } from './ConnectionGraph';

type Shortcut = { to: string; title: string; description: string; cta: string; icon: LucideIcon };

const shortcuts: Shortcut[] = [
  { to: '/estudos', title: 'Estudos', description: 'Acesse suas disciplinas e materiais compartilhados pela comunidade.', cta: 'Ir para Estudos', icon: BookOpen },
  { to: '/oportunidade', title: 'Oportunidade', description: 'Descubra oportunidades acadêmicas e profissionais.', cta: 'Ver oportunidades', icon: Briefcase },
  { to: '/comunidade', title: 'Comunidade', description: 'Encontre estudantes, conteúdos e conexões dentro do curso.', cta: 'Explorar Comunidade', icon: Users },
  { to: '/perfil', title: 'Perfil', description: 'Atualize suas informações e disciplinas atuais.', cta: 'Ver perfil', icon: UserIcon },
];

export function HomePage() {
  const me = useMe();
  const firstName = me.data?.display_name.trim().split(/\s+/)[0];

  return (
    <>
      {me.isPending ? (
        <div className="space-y-4" aria-busy="true">
          <Skeleton className="h-10 w-72" />
          <Skeleton className="h-4 w-1/2 rounded-full" />
        </div>
      ) : (
        <header>
          <h1 className="font-display text-4xl font-bold text-foreground lg:text-5xl">
            {firstName ? `Olá, ${firstName}!` : 'Olá!'}{' '}
            <span role="img" aria-label="aceno">
              👋
            </span>
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">Boas-vindas ao ConectaCC.</p>
        </header>
      )}

      <section className="mt-10 flex items-center justify-between gap-8 rounded-2xl border border-blue-200/70 bg-gradient-to-r from-white to-[#d9e7f8] p-8 lg:p-11">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold leading-snug text-foreground lg:text-3xl">
            Conecte-se, aprenda e cresça junto com a comunidade.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Um espaço para compartilhar conhecimento, descobrir oportunidades e criar conexões entre estudantes de Ciência da
            Computação do IFSul – Câmpus Passo Fundo.
          </p>
        </div>
        <ConnectionGraph className="hidden w-60 shrink-0 md:block" />
      </section>

      <section aria-labelledby="acesso-rapido" className="mt-12">
        <h2 id="acesso-rapido" className="font-display text-2xl font-bold text-foreground">
          Acesso rápido
        </h2>
        <ul className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {shortcuts.map(({ to, title, description, cta, icon: Icon }) => (
            <li key={to} className="flex flex-col rounded-2xl border border-blue-200/70 bg-white p-7">
              <span className="grid size-14 place-items-center rounded-full bg-[#d6e4f7] text-navy-900">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">{description}</p>
              <Link to={to} className="mt-6 inline-flex items-center gap-2 font-semibold text-action hover:underline">
                {cta}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
