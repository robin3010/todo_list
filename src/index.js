import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoListContextWr } from './contexts/TodoListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoListContextWr>
      <App />
    </TodoListContextWr>
  </React.StrictMode>,
);
