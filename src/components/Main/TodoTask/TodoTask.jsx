import clsx from 'clsx';
import { useState } from 'react';
import { useTodoListMethodsContext } from '../../../contexts/TodoListContext';
import { DeleteTaskModal } from './Modals/DeleteTaskModal/DeleteTaskModal';
import styles from './TodoTask.module.css';

export function TodoTask({ title, id, done }) {
  const { changeTaskStatus } = useTodoListMethodsContext();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModalHandler = () => {
    setIsDeleteModalOpen(true);
  };
  };

  const changeStatusHandler = () => {
    changeTaskStatus(id);
  };

  return (
    <li className={clsx(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center',
      [styles.todoList],
      // 'bg-transparent',
      { [styles.done]: done },
      { 'bg-transparent': !done },
      { 'list-group-item': done },
      { 'list-group-item-secondary': done },
    )}
    >
      <div className="me-auto">
        &nbsp;
        {title}
      </div>
      <span>
        <button
          onClick={changeStatusHandler}
          type="button"
          className={clsx(
            'mx-2',
            'btn',
            { 'btn-secondary': done },
            { 'btn-success': !done },
          )}
        >
          <i className={clsx(
            'fa-solid',
            { 'fa-xmark': done },
            { 'fa-check': !done },
          )}
          />
        </button>
        <button
          onClick={openDeleteModalHandler}
          type="button"
          className="btn btn-danger"
        >
          <i className="fa-solid fa-trash" />
        </button>
      </span>
      <DeleteTaskModal
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        title={title}
        id={id}
      />
    </li>
  );
}
