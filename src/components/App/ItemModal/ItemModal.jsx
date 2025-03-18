import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card, onDelete }) {
  return (
    <div
      className={`modal modal_type_image ${isOpen ? "modal_opened" : ""}`}
    >
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-item-modal"
        ></button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__info-container">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button onClick={onDelete} className="modal__delete-btn">Delete item</button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
