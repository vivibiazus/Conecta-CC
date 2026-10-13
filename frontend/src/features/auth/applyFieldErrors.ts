import type { FieldValues, Path, UseFormSetError } from 'react-hook-form';
import type { FieldErrors } from '@/lib/api/errors';

// coloca os erros 422 do servidor nos campos do formulário; devolve os que não têm campo
export function applyFieldErrors<T extends FieldValues>(
  setError: UseFormSetError<T>,
  fieldErrors: FieldErrors,
  fields: readonly Path<T>[],
): FieldErrors {
  const rest: FieldErrors = {};
  let focused = false;
  for (const [key, messages] of Object.entries(fieldErrors)) {
    if ((fields as readonly string[]).includes(key)) {
      setError(key as Path<T>, { type: 'server', message: messages[0] }, { shouldFocus: !focused });
      focused = true;
    } else {
      rest[key] = messages;
    }
  }
  return rest;
}
