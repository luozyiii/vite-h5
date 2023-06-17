import { createBrowserRouter } from 'react-router-dom';
import Demo from '@/pages/demo';
import Home from '@/pages/home';
import LazyDemo from '@/pages/lazy';
import NotFound from '@/pages/not-found';
import { withLoadingComponent } from './utils';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'demo',
        element: <Demo />,
      },
      {
        path: 'lazy',
        element: withLoadingComponent(<LazyDemo />),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
