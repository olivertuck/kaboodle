import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root, CreateEvent, Events, Event } from './routes';

const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '',
          element: <CreateEvent />,
        },
        {
          path: 'events',
          element: <Events />,
        },
        {
          path: 'events/:id',
          element: <Event />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
