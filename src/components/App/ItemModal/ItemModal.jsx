import { useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import "./ItemModal.css";
import useModalClose from "../../../hooks/useModalClose";

function ItemModal({ isOpen, onClose, card, onDelete }) {
  
    useModalClose(isOpen, onClose);
  
    const isLoggedIn = useContext(CurrentUserContext);
  return (
    <div className={`modal modal_type_image ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-item-modal"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__info-container">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          {isLoggedIn ? (
            <button onClick={onDelete} className="modal__delete-btn">
              Delete item
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
