import * as Sentry from '@sentry/react';

const dsn = import.meta.env.VITE_SENTRY_DSN;

// sem DSN (desenvolvimento e CI) o Sentry fica desligado
if (dsn) {
  Sentry.init({
    dsn,
    environment: import.meta.env.MODE,
    // decisão 8: sem dados pessoais nem corpos; o usuário é identificado só pelo ID (AppLayout)
    dataCollection: { userInfo: false, cookies: false, httpHeaders: false, httpBodies: [], urlQueryParams: false },
  });
}
