import { createBrowserRouter } from 'react-router-dom';

import LayoutPublic from '@/Layout/LayoutPublic';
import NotFound404 from '@/pages/404';
import About from '@/pages/About';
import Home from '@/pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
