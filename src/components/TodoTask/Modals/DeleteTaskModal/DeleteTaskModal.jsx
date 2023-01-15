import { useTodoListMethodsContext } from '../../../../contexts/TodoListContext';
import { ModalContainer } from '../../../ModalContainer/ModalContainer';

export function DeleteTaskModal({
  isOpen, setIsOpen, title, id,
}) {
  const { deleteTask } = useTodoListMethodsContext();

  const closeDeleteModal = () => {
    setIsOpen(false);
  };

  const deleteHandler = () => {
    deleteTask(id);
    closeDeleteModal();
  };

  return (

    <ModalContainer isOpen={isOpen} closeHandler={closeDeleteModal}>
      <p className="text-center text-danger">
        Delete
        {' '}
        <b>
          &quot;
          {title}
          &quot;?
        </b>
      </p>
      <div className="d-flex justify-content-center gap-2">
        <button
          onClick={deleteHandler}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
        <button
          onClick={closeDeleteModal}
          type="button"
          className="btn btn-secondary"
        >
          Cancel
        </button>
      </div>
    </ModalContainer>

  );
}
