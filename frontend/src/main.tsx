import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="grid min-h-dvh place-items-center bg-navy-950 font-display text-5xl font-bold text-white">
      <span>
        Conecta<span className="text-glow">CC</span>
      </span>
    </main>
  </StrictMode>,
);
