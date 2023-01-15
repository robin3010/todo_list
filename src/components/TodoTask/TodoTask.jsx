import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useTodoListMethodsContext } from '../../contexts/TodoListContext';
import styles from './TodoTask.module.css';

export function TodoTask({ title, id, done }) {
  const { changeTaskStatus } = useTodoListMethodsContext();

  const changeStatusHandler = (e) => {
    e.preventDefault();
    changeTaskStatus(id);
  };

  return (
    <Link to={`./${id}`}>
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
        </span>
      </li>
    </Link>
  );
}
