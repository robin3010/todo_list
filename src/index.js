import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { TodoListContextWr } from './contexts/TodoListContext';
import { Contacts } from './components/Pages/Contacts/Contacts';
import { ErrorPage } from './components/Pages/Error/Error';
import { Main } from './components/Main/Main';
import { Tasks } from './components/Pages/Tasks/Tasks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'tasks',
        element: <Tasks />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoListContextWr>
      <RouterProvider router={router} />
    </TodoListContextWr>
  </React.StrictMode>,
);
