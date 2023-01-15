import { useCallback, useEffect, useState } from 'react';

const LS_TODO_LIST = 'LS_TODO_LIST';

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const getStoredTasks = localStorage.getItem(LS_TODO_LIST);
    const fillTodoList = getStoredTasks ? JSON.parse(getStoredTasks) : [];

    return fillTodoList;
  });

  useEffect(() => {
    localStorage.setItem(LS_TODO_LIST, JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask = useCallback((title) => {
    const newTask = {
      id: crypto.randomUUID(),
      done: false,
      title,
    };

    setTasks((prev) => [newTask, ...prev]);
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const changeTaskStatus = useCallback((id) => {
    setTasks((prev) => prev.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    }));
  }, []);

  const editTask = useCallback((id, editedTask) => {
    setTasks((prev) => prev.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          ...editedTask,
        };
      }
      return task;
    }));
  }, []);

  const clearTodoList = useCallback(() => {
    setTasks([]);
  }, []);

  return {
    tasks,
    addNewTask,
    deleteTask,
    changeTaskStatus,
    editTask,
    clearTodoList,
  };
};
