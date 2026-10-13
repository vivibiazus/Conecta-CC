import type { ReactNode } from 'react';
import { Brand } from '@/components/Brand';
import { cn } from '@/lib/utils';

const pillars = ['Conexão', 'Conhecimento', 'Oportunidades', 'Comunidade'];

function Arcs() {
  return (
    <svg aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 size-[640px] text-white/10" viewBox="0 0 640 640" fill="none">
      <circle cx="640" cy="640" r="560" stroke="currentColor" />
      <circle cx="640" cy="640" r="420" stroke="currentColor" />
      <circle cx="640" cy="640" r="280" stroke="currentColor" />
    </svg>
  );
}

function InstitutionFooter({ className }: { className?: string }) {
  return (
    <p className={cn('text-[15px] leading-relaxed', className)}>
      Ciência da Computação
      <br />
      IFSul | Câmpus Passo Fundo
    </p>
  );
}

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-ice lg:grid lg:grid-cols-[45%_55%]">
      <aside className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-[#12306a] px-6 pb-10 pt-8 text-white sm:px-12 lg:flex lg:min-h-dvh lg:flex-col lg:px-[8%] lg:py-20">
        <Arcs />
        <Brand tone="dark" className="relative text-[32px] lg:text-5xl" />
        <div className="relative mt-8 lg:mt-auto">
          <span aria-hidden className="mb-10 hidden h-0.5 w-16 bg-functional lg:block" />
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-glow sm:text-sm">
            Rede de apoio, oportunidades e conhecimento
          </p>
          <p className="mt-4 font-display text-[22px] font-bold uppercase leading-tight lg:mt-10 lg:text-5xl lg:leading-[1.15] 2xl:text-6xl">
            Conhecimento, conexões e <span className="text-glow">oportunidades.</span>
          </p>
          <p className="mt-8 hidden max-w-xl text-xl leading-relaxed text-white/85 lg:block">
            Um espaço digital construído para e pela comunidade de Ciência da Computação.
          </p>
        </div>
        <InstitutionFooter className="relative mt-auto hidden pt-16 text-glow lg:block" />
      </aside>

      <main className="relative flex flex-col px-4 pb-10 pt-10 sm:px-12 lg:min-h-dvh lg:justify-center lg:px-[12%] lg:pb-16 lg:pt-44">
        <ul aria-hidden className="absolute right-10 top-12 hidden space-y-2 border-l border-slate-300 pl-5 text-sm uppercase tracking-[0.25em] text-muted-foreground lg:block">
          {pillars.map((pillar) => (
            <li key={pillar}>{pillar}</li>
          ))}
        </ul>
        <div className="mx-auto w-full max-w-[600px]">{children}</div>
        <InstitutionFooter className="mt-auto pt-16 text-center text-muted-foreground lg:hidden" />
      </main>
    </div>
  );
}
