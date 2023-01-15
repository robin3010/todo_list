import { useMemo, useContext, createContext } from 'react';
import { useTasks } from './useTasks';

export const todoListContext = createContext();
export const todoListMethodsContext = createContext();

export function TodoListContextWr({ children }) {
  const { tasks, ...methods } = useTasks();

  const methodsContext = useMemo(() => methods, [tasks]);

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
