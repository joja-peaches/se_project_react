import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./DeleteItemModal.css";
import useModalClose from "../../hooks/useModalClose";

function DeleteItemModal({ isOpen, onClose, onDelete }) {
    useModalClose(isOpen, onClose);
    const { isLoggedIn } = useContext(CurrentUserContext);

  return (
    <div className={`modal ${isOpen && isLoggedIn ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        />
        <div className="modal__warning">
          <h2 className="modal__text">
            Are you sure you want to delete this item?
          </h2>
          <p className="modal__text">This action is irreversible.</p>
        </div>
        <button className="modal__delete-button" onClick={onDelete}>
          Yes, delete item
        </button>
        <p className="modal__text modal__text-cancel" onClick={onClose}>
          Cancel
        </p>
      </div>
    </div>
  );
}

export default DeleteItemModal;
