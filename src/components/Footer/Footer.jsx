import { memo } from 'react';
import { useTodoListMethodsContext } from '../../contexts/TodoListContext';
import './Footer.module.css';

export const Footer = memo(() => {
  const { clearTodoList } = useTodoListMethodsContext();

  const clearTodoListHandler = () => {
    clearTodoList();
  };

  return (
    <footer className="py-3 d-flex justify-content-center align-items-center">
      <button
        onClick={clearTodoListHandler}
        type="button"
        className="btn btn-outline-danger border border-2 border-danger border-opacity-75"
        style={{ fontWeight: 500 }}
      >
        <span>clear Todo List </span>
        <i className="fa-solid fa-trash" />
      </button>
    </footer>
  );
});
