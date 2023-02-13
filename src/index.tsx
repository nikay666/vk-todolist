import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  AdaptivityProvider,
  ConfigProvider,
  SizeType,
  WebviewType,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import App from './app';
import RequireAuth from './components/RequireAuth';
import './index.css';
import ListPage from './pages/List';
import Login from './pages/Login';
import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <RequireAuth>
            <ListPage />
          </RequireAuth>
        ),
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
    <Provider store={store}>
      <ConfigProvider appearance="dark" webviewType={WebviewType.INTERNAL}>
        <AdaptivityProvider sizeY={SizeType.REGULAR}>
          <RouterProvider router={router} />
        </AdaptivityProvider>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
