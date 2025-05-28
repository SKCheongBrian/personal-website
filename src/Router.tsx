import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { ContactPage } from '@/pages/Contact.page';
import { Ay2425S1Page } from '@/pages/Ay2425-s1.page';
import { Ay2425S2Page } from '@/pages/Ay2425-s2.page';
import { Ay2526S1Page } from '@/pages/Ay2526-s1.page';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/contact',
      element: <ContactPage />,
    },
    {
      path: '/ay2425-s1',
      element: <Ay2425S1Page />,
    },
    {
      path: '/ay2425-s2',
      element: <Ay2425S2Page />
    },
    {
      path: '/ay2526-s1',
      element: <Ay2526S1Page />
    },
  ],
  {
    basename: '/~bskch',
  }
);

export function Router() {
  return <RouterProvider router={router} />;
}
