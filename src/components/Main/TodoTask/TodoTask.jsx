import clsx from 'clsx';
import { useTodoListMethodsContext } from '../../../contexts/TodoListContext';
import styles from './TodoTask.module.css';

export function TodoTask({
  title, id, done,
}) {
  const { deleteTask, changeTaskStatus } = useTodoListMethodsContext();

  const deleteHandler = () => {
    deleteTask(id);
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
      // 'bg-transparent',
      { [styles.done]: done },
      { 'bg-transparent': !done },
      { 'list-group-item': done },
      { 'list-group-item-secondary': done },
    )}
    >
      <div className="me-auto">
        &nbsp;
        { title}
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
          onClick={deleteHandler}
          type="button"
          className="btn btn-danger"
        >
          <i className="fa-solid fa-trash" />
        </button>
      </span>
    </li>
  );
}
