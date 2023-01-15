import { useState } from 'react';
import { useTodoListMethodsContext } from '../../../contexts/TodoListContext';

export function Form() {
  console.log('Render Form');

  const { addNewTask } = useTodoListMethodsContext();

  const [title, setTitle] = useState('');

  const inputHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (title.length) {
      addNewTask(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={submitHandler} style={{ minWidth: '40vw', maxWidth: '95vw' }}>
      <div className="d-flex my-3 mx-auto gap-2">
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={inputHandler}
          placeholder="new task"
        />
        <button type="submit" className="btn btn-secondary">
          <i className="fa-solid fa-plus" />
        </button>
      </div>
    </form>
  );
}
