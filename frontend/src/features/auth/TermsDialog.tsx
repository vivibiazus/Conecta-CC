import { Loader2 } from 'lucide-react';
import { useId, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useTerms } from './hooks';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: (version: string) => void;
  submitting: boolean;
  onCloseAutoFocus?: (event: Event) => void;
};

export function TermsDialog({ open, onOpenChange, onCloseAutoFocus, ...props }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent onCloseAutoFocus={onCloseAutoFocus} className="flex max-h-[92dvh] w-[calc(100%-2rem)] max-w-2xl flex-col gap-0 overflow-hidden p-0 sm:max-w-2xl">
        <TermsContent onClose={() => onOpenChange(false)} {...props} />
      </DialogContent>
    </Dialog>
  );
}

// montado só com o modal aberto: o aceite começa desmarcado a cada abertura
function TermsContent({ onClose, onAccept, submitting }: Pick<Props, 'onAccept' | 'submitting'> & { onClose: () => void }) {
  const terms = useTerms();
  const [accepted, setAccepted] = useState(false);
  const checkboxId = useId();
  // enquanto busca uma versão nova dos Termos, o texto em cache pode estar desatualizado
  const ready = Boolean(terms.data) && !terms.isFetching;

  return (
    <>
        <DialogHeader className="space-y-4 border-b border-slate-200 px-6 pb-5 pt-7 text-left sm:px-9">
          <DialogTitle className="pr-8 font-display text-2xl font-bold leading-snug text-foreground">
            {terms.data?.title ?? 'Termos de participação na versão de testes'}
          </DialogTitle>
          <DialogDescription className="w-fit rounded-full border border-blue-200 bg-ice px-4 py-1 text-sm text-muted-foreground">
            Versão {terms.data?.version ?? '…'} do termo
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6 text-[17px] leading-relaxed sm:px-9">
          {terms.isPending && <p className="text-muted-foreground">Carregando os Termos…</p>}
          {terms.isError && (
            <div role="alert" className="space-y-2 text-danger">
              <p>Não foi possível carregar os Termos agora.</p>
              <button type="button" onClick={() => terms.refetch()} className="font-semibold underline underline-offset-2">
                Tentar novamente
              </button>
            </div>
          )}
          {terms.data?.sections.map((section) => (
            <section key={section.title}>
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <p className="mt-1 text-foreground/90">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="space-y-5 border-t border-slate-200 px-6 py-5 sm:px-9">
          <div className="flex items-start gap-3">
            <Checkbox
              id={checkboxId}
              checked={accepted}
              onCheckedChange={(value) => setAccepted(value === true)}
              disabled={!ready}
              className="mt-1 size-5"
            />
            <Label htmlFor={checkboxId} className="text-base font-normal leading-relaxed text-foreground">
              {terms.data?.acceptance_label}
            </Label>
          </div>
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button type="button" variant="outline" onClick={onClose} className="h-12 border-action px-8 text-base text-action">
              Voltar
            </Button>
            <Button
              type="button"
              disabled={!accepted || submitting || !ready}
              onClick={() => ready && terms.data && onAccept(terms.data.version)}
              className="h-12 px-8 text-base font-semibold disabled:bg-slate-300 disabled:text-slate-600 disabled:opacity-100"
            >
              {submitting ? (
                <>
                  <Loader2 className="size-5 animate-spin" aria-hidden />
                  Criando conta...
                </>
              ) : (
                'Concordar e criar conta'
              )}
            </Button>
          </div>
        </div>
    </>
  );
}
