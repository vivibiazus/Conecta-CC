import { Link } from 'react-router';

export function UnderConstructionPage({ title }: { title: string }) {
  return (
    <>
      <h1 className="font-display text-4xl font-bold text-foreground">{title}</h1>
      <div className="mt-8 rounded-2xl border border-blue-200/70 bg-white p-8">
        <p className="text-lg text-muted-foreground">Esta área ainda está em construção.</p>
        <Link to="/home" className="mt-4 inline-block font-semibold text-action hover:underline">
          Voltar para a Home
        </Link>
      </div>
    </>
  );
}
