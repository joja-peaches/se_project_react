import { useState } from "react";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LoginModal({
  isOpen,
  onClose,
  onLoginSubmit,
  handleRegisterClick,
  setIsLoggedIn,
}) {
  const { values, handleChange, isValid } = useFormAndValidation();

  const [nonExistantEmail, setNonExistantEmail] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // onLoginSubmit(email, password)
    console.log(values);
    onLoginSubmit(values)
      .then(() => {
        setIsLoggedIn(true);
        setIncorrectPassword(false);
        setNonExistantEmail(false);
      })
      .catch((err) => {
        console.log("Error status: ", err.status);
        if (err.status === 401) {
          setIncorrectPassword(true);
        } else if (err.status === 404) {
          setNonExistantEmail(true);
        }
      });
  };

  return (
    <ModalWithForm
      title="Login"
      name="login"
      buttonText={"Log In"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleLoginSubmit}
      loginText="or Register"
      handleRegisterClick={handleRegisterClick}
      isFormValid={isValid}
    >
      <label htmlFor="email" className="modal__label">
        Email* <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className={`modal__input ${
            nonExistantEmail ? "modal__input-error" : ""
          }`}
          minLength="2"
          maxLength="40"
          required
          onChange={handleChange}
          value={values.email}
        />
      </label>
      <label
        htmlFor="password"
        className={`modal__label ${
          incorrectPassword ? "modal__input-error" : ""
        }`}
      >
        {incorrectPassword ? "Incorrect password" : "Password*"}
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className={`modal__input ${
            incorrectPassword ? "modal__input-error" : ""
          }`}
          minLength="2"
          maxLength="40"
          required
          onChange={handleChange}
          value={values.password}
        />
      </label>
    </ModalWithForm>
  );
}
