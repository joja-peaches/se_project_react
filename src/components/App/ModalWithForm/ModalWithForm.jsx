import "./ModalWithForm.css";
import useModalClose from "../../../hooks/useModalClose";

function ModalWithForm({
  children,
  buttonText,
  title,
  name,
  onClose,
  isOpen,
  onSubmit,
  loginText,
  handleRegisterClick,
  handleLoginClick,
  isFormValid,
}) {
  {
    useModalClose(isOpen, onClose);
  }

  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <form className="modal__form" onSubmit={onSubmit}>
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close" />
        {children}
        <div className="modal__submit-container">
          <button
            type="submit"
            className="modal__submit"
            disabled={!isFormValid}
          >
            {buttonText}
          </button>
          <button
            type="button"
            className="modal__login"
            onClick={
              loginText === "or Log in" ? handleLoginClick : handleRegisterClick
            }
          >
            {loginText}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalWithForm;
