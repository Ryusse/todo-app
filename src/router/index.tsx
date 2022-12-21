import { createBrowserRouter } from 'react-router-dom';

import LayoutPublic from '@/Layout/LayoutPublic';
import NotFound404 from '@/pages/404';
import Home from '@/pages/Home';
import Important from '@/pages/Important';
import Tasks from '@/pages/Tasks';

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
        path: '/important',
        element: <Important />,
      },
      {
        path: '/tasks',
        element: <Tasks />,
      },
    ],
  },
]);
