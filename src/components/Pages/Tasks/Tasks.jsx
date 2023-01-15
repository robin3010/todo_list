import { Outlet } from 'react-router-dom';
import { Form } from '../../Form/Form';
import { TodoList } from '../../TodoList/TodoList';

export function Tasks() {
  return (
    <>
      <Form />
      <TodoList />
      <Outlet />
    </>
  );
}
