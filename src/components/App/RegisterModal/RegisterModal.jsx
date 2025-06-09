import { useFormAndValidation } from "../../../hooks/useFormAndValidation";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function RegisterModal({
  isOpen,
  onClose,
  onRegisterSubmit,
  handleLoginClick,
}) {
  const { values, handleChange, isValid, resetForm } = useFormAndValidation();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    onRegisterSubmit(values);
    resetForm();
  };

  return (
    <ModalWithForm
      title="Sign Up"
      name="register"
      buttonText="Next"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleRegisterSubmit}
      loginText="or Log in"
      handleLoginClick={handleLoginClick}
      isFormValid={isValid}
    >
      <label className="modal__label">
        Email* <br />
        <input
          type="email"
          id="registerEmail"
          name="email"
          placeholder="Email"
          className="modal__input"
          minLength="2"
          maxLength="40"
          required
          onChange={handleChange}
          value={values.email}
        />
      </label>
      <label className="modal__label">
        Password* <br />
        <input
          type="password"
          id="registerPassword"
          name="password"
          placeholder="Password"
          className="modal__input"
          minLength="2"
          maxLength="40"
          required
          onChange={handleChange}
          value={values.password}
        />
      </label>
      <label className="modal__label">
        Name <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="modal__input"
          minLength="2"
          maxLength="40"
          onChange={handleChange}
          value={values.name}
        />
      </label>
      <label className="modal__label">
        Avatar URL <br />
        <input
          type="url"
          id="registerAvatarUrl"
          name="avatar"
          placeholder="Avatar URL"
          className="modal__input"
          minLength="2"
          maxLength="100"
          onChange={handleChange}
          value={values.avatar}
        />
      </label>
    </ModalWithForm>
  );
}
