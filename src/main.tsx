import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';
import './styles/index.scss';
import { GeneralProvider } from '@/context/GeneralContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </React.StrictMode>
);
