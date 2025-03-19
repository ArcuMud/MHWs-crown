import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { TooltipProvider } from '@/components/ui/tooltip';

import App from './App.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </BrowserRouter>
  </>
);
