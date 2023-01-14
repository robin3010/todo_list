import { useTodoListContext } from '../../../contexts/TodoListContext';
import { TodoTask } from '../TodoTask/TodoTask';

export function TodoList() {
  console.log('Render TodoList');

  const tasks = useTodoListContext();

  if (!tasks.length) {
    return <p className="py-3 text-center m-0 flex-grow-1">No tasks here...</p>;
  }

  return (
    <ol className="list-group list-group-numbered list-group-flush flex-grow-1 .bg-body-tertiary">
      {tasks.map((task) => (
        <TodoTask
          key={task.id}
          title={task.title}
          id={task.id}
          done={task.done}
        />
      ))}
    </ol>
  );
}
