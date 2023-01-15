import { useState } from 'react';
import { useTodoListMethodsContext } from '../../../../contexts/TodoListContext';
import { ModalContainer } from '../../../ModalContainer/ModalContainer';

export function EditTaskModal({
  isOpen, setIsOpen, title, id,
}) {
  const { editTask } = useTodoListMethodsContext();
  const [taskTitle, setTaskTitle] = useState(title);

  // eslint-disable-next-line consistent-return
  const closeEditModal = (save = false) => {
    setIsOpen(false);
    if (!save) {
      return setTaskTitle(title);
    }
  };

  const saveEdit = () => {
    editTask(id, {
      title: taskTitle,
    });
    closeEditModal(true);
  };

  return (
    <ModalContainer isOpen={isOpen} closeHandler={closeEditModal}>
      <div className="input-group my-3 p-2">
        <input
          onChange={(e) => setTaskTitle(e.target.value)}
          value={taskTitle}
          type="text"
          className="form-control"
          placeholder="type task title..."
        />
      </div>
      <div className="d-flex justify-content-center gap-2">
        <button
          disabled={!taskTitle || taskTitle === title}
          onClick={saveEdit}
          type="button"
          className="btn btn-success"
        >
          Confirm
        </button>
        <button
          onClick={closeEditModal}
          type="button"
          className="btn btn-secondary"
        >
          Cancel
        </button>
      </div>
    </ModalContainer>
  );
}
