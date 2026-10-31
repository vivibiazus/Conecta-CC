import { useState } from 'react';
import { Link } from 'react-router';
import { TextField } from '@/components/TextField';
import { Button } from '@/components/ui/button';
import { DisciplineCard } from './DisciplineCard';
import { normalizeSearch } from './normalize';
import { StudiesError, StudiesLoading } from './StudiesStatus';
import { useStudies } from './useStudies';

const SEMESTERS = [1, 2, 3, 4, 5, 6, 7, 8];
const GRID = 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3';

export function StudiesPage() {
  const { disciplines, mineIds, ready, failed, retry } = useStudies();
  const [query, setQuery] = useState('');

  const term = normalizeSearch(query);
  const found = (disciplines ?? []).filter((discipline) => normalizeSearch(discipline.name).includes(term));
  const mine = (disciplines ?? []).filter((discipline) => mineIds.has(discipline.id));

  return (
    <div>
      <header>
        <h1 className="font-display text-4xl font-bold text-foreground">Estudos</h1>
        <p className="mt-2 text-lg text-muted-foreground">Acesse suas disciplinas e materiais compartilhados pela comunidade.</p>
      </header>

      <div className="mt-8 space-y-10">
        {failed && <StudiesError onRetry={retry} />}
        {!ready && !failed && <StudiesLoading />}

        {ready && (
          <>
            <section aria-labelledby="minhas-disciplinas">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 id="minhas-disciplinas" className="font-display text-2xl font-bold text-foreground">
                  Minhas disciplinas
                </h2>
                <Link to="/perfil?editar=disciplinas" className="font-semibold text-action hover:underline">
                  Alterar no Perfil
                </Link>
              </div>
              {mine.length > 0 ? (
                <ul className={`mt-5 ${GRID}`}>
                  {mine.map((discipline) => (
                    <li key={discipline.id}>
                      <DisciplineCard discipline={discipline} mine />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-5 rounded-2xl border border-blue-200/70 bg-white p-7">
                  <h3 className="font-display text-xl font-bold text-foreground">Você ainda não selecionou suas disciplinas</h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    Adicione as disciplinas que está cursando para encontrá-las rapidamente aqui.
                  </p>
                  <Button asChild className="mt-5 h-12 px-5 text-base font-semibold">
                    <Link to="/perfil?editar=disciplinas">Completar perfil</Link>
                  </Button>
                </div>
              )}
            </section>

            <section aria-labelledby="todas-disciplinas">
              <h2 id="todas-disciplinas" className="font-display text-2xl font-bold text-foreground">
                Todas as disciplinas
              </h2>
              <div className="mt-5 max-w-md">
                <TextField label="Buscar disciplina" type="search" value={query} onChange={(event) => setQuery(event.target.value)} />
              </div>
              <p aria-live="polite" className="mt-4 text-[15px] text-muted-foreground">
                {found.length === 1 ? '1 disciplina' : `${found.length} disciplinas`}
              </p>

              {found.length === 0 ? (
                <p className="mt-4 text-base text-foreground">Nenhuma disciplina encontrada para “{query.trim()}”.</p>
              ) : (
                SEMESTERS.map((semester) => {
                  const group = found.filter((discipline) => discipline.semester === semester);
                  if (group.length === 0) return null;
                  return (
                    <div key={semester} className="mt-8">
                      <h3 className="font-display text-xl font-bold text-foreground">{semester}º semestre</h3>
                      <ul className={`mt-4 ${GRID}`}>
                        {group.map((discipline) => (
                          <li key={discipline.id}>
                            <DisciplineCard discipline={discipline} mine={mineIds.has(discipline.id)} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
}
