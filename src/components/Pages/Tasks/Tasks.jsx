import { Link, Outlet } from 'react-router-dom';
import { TodoList } from '../../TodoList/TodoList';

export function Tasks() {
  return (
    <>
      <Link to="./new" className="text-center my-3">
        <button type="submit" className="btn btn-secondary">
          <i className="fa-solid fa-plus" />
        </button>
      </Link>
      <TodoList />
      <Outlet />
    </>
  );
}
