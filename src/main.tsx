import React from 'react';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './styles/index.scss';
import { GeneralProvider } from '@/context/GeneralContext';
import { router } from '@/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GeneralProvider>
      <RouterProvider router={router} />
    </GeneralProvider>
  </React.StrictMode>
);
