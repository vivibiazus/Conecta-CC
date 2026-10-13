export type FieldErrors = Record<string, string[]>;

export class ApiError extends Error {
  readonly status: number;
  readonly fieldErrors: FieldErrors;

  constructor(status: number, message: string, fieldErrors: FieldErrors = {}) {
    super(message);
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

export class NetworkError extends Error {}

type FetchResult<T> = { data?: T; error?: unknown; response: Response };

export async function call<T>(request: Promise<FetchResult<T>>): Promise<T> {
  let result: FetchResult<T>;
  try {
    result = await request;
  } catch {
    throw new NetworkError('network');
  }
  if (result.response.ok) return result.data as T;
  const body = (result.error ?? {}) as { message?: string; errors?: FieldErrors };
  throw new ApiError(result.response.status, body.message ?? '', body.errors ?? {});
}
