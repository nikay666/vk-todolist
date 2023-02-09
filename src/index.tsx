import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  AdaptivityProvider,
  ConfigProvider,
  SizeType,
  WebviewType,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import './index.css';
import App from './app';
import ListPage from './pages/List';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ListPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ConfigProvider appearance="dark" webviewType={WebviewType.INTERNAL}>
      <AdaptivityProvider sizeY={SizeType.REGULAR}>
        <RouterProvider router={router} />
      </AdaptivityProvider>
    </ConfigProvider>
    ,
  </React.StrictMode>,
);
