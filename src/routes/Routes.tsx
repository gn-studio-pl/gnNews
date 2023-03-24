import { createBrowserRouter } from 'react-router-dom';
import { MainView } from '../views/MainView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainView />,
    children: [
      {
        path: '/country/:name',
        element: <MainView />,
      },
    ],
  },
]);
