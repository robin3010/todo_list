import { memo } from 'react';
import { Form } from './Form/Form';
import './Header.module.css';

export const Header = memo(() => {
  console.log('Render Header');

  return (
    <header className="d-flex p-2 flex-column align-items-center">
      <h2 className="m-0 py-0">My Todo List</h2>
      <Form />
    </header>
  );
});
