import { useMemo, useContext, createContext } from 'react';
import { useTasks } from './useTasks';

export const todoListContext = createContext();
export const todoListMethodsContext = createContext();

export function TodoListContextWr({ children }) {
  const {
    tasks, addNewTask, deleteTask, changeTaskStatus, clearTodoList,
  } = useTasks();

  const methodsContext = useMemo(() => ({
    addNewTask, deleteTask, changeTaskStatus, clearTodoList,
  }), []);

  return (
    <todoListContext.Provider value={tasks}>
      <todoListMethodsContext.Provider value={methodsContext}>

        {children}

      </todoListMethodsContext.Provider>
    </todoListContext.Provider>
  );
}

export const useTodoListContext = () => useContext(todoListContext);
export const useTodoListMethodsContext = () => useContext(todoListMethodsContext);
