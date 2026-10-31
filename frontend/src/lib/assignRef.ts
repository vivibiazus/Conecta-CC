import type { Ref } from 'react';

// repassa o elemento a um ref recebido por prop (o do React Hook Form é uma função)
export function assignRef<T>(ref: Ref<T> | undefined, value: T | null): void {
  if (typeof ref === 'function') ref(value);
  else if (ref) ref.current = value;
}
