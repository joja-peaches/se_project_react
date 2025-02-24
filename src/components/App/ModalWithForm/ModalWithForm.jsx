import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, activeModal, onClose, isOpen }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <form className="modal__form">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        />
        {children}
        <button type="submit" className="modal__submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default ModalWithForm;
