import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTodoListMethodsContext } from '../../../contexts/TodoListContext';
import { DeleteTaskModal } from './Modals/DeleteTaskModal/DeleteTaskModal';
import { EditTaskModal } from './Modals/EditTaskModal/EditTaskModal';
import styles from './TodoTaskDetail.module.css';

export function TodoTaskDetail() {
  const { getTaskById } = useTodoListMethodsContext();
  const { taskId } = useParams();

  const navigate = useNavigate();

  const currentTask = getTaskById(taskId);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openDeleteModalHandler = () => {
    setIsDeleteModalOpen(true);
  };

  const openEditModalHandler = () => {
    setIsEditModalOpen(true);
  };

  const returnHandler = () => {
    navigate('..', {
      relative: 'path',
    });
  };

  return (
    <>
      <div className="vh-100">
        <div
          className={clsx(
            'bg-body-tertiary',
            'p-4',
            'mx-auto',
            'd-flex',
            'flex-column',
            'align-items-center',
          )}
        >
          <div>
            <p>{currentTask.title}</p>
          </div>
          <div className={`gap-4 ${styles.task__buttons}`}>
            <button
              onClick={returnHandler}
              type="button"
              className="btn btn-success"
            >
              <i className="fa-solid fa-left-long" />
            </button>
            <button
              onClick={openEditModalHandler}
              type="button"
              className="btn btn-outline-dark"
            >
              <i className="fa-solid fa-pen" />
            </button>
            <button
              onClick={openDeleteModalHandler}
              type="button"
              className="btn btn-danger"
            >
              <i className="fa-solid fa-trash" />
            </button>
          </div>
        </div>
      </div>
      <DeleteTaskModal
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        title={currentTask.title}
        id={currentTask.id}
      />
      <EditTaskModal
        isOpen={isEditModalOpen}
        setIsOpen={setIsEditModalOpen}
        title={currentTask.title}
        id={currentTask.id}
      />
    </>
  );
}
