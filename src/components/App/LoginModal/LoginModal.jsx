import { useState } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LoginModal({
  isOpen,
  onClose,
  onLoginSubmit,
  handleRegisterClick,
  handleLoginClick,
  setIsLoggedIn,
}) {
  const [email, setEmail] = useState("");
  const [nonExistantEmail, setNonExistantEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [inputValidation, setInputValidation] = useState({
    email: false,
    password: false,
  });

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    const isValidEmail =
      emailValue.includes("@") &&
      emailValue.length > 6 &&
      emailValue.length < 20;
    setInputValidation((prev) => ({
      ...prev,
      email: isValidEmail,
    }));
    setEmail(emailValue);
    setNonExistantEmail(false);
    setIncorrectPassword(false);
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    const isValidPassword =
      passwordValue.length > 6 && passwordValue.length < 20;
    setInputValidation((prev) => ({
      ...prev,
      password: isValidPassword,
    }));
    setPassword(e.target.value);
    setNonExistantEmail(false);
    setIncorrectPassword(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(email, password)
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
      isFormValid={inputValidation.email && inputValidation.password}
    >
      <label htmlFor="email" className="modal__label">
        Email* <br />
        <input
          type="email"
          id="email"
          placeholder="Email"
          className={`modal__input ${
            nonExistantEmail ? "modal__input-error" : ""
          }`}
          minLength="2"
          maxLength="40"
          required
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label htmlFor="password" className={`modal__label ${incorrectPassword ? "modal__input-error" : ""}`}>
        {incorrectPassword ? "Incorrect password" : "Password*"}<br />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className={`modal__input ${
            incorrectPassword ? "modal__input-error" : ""
          }`}
          minLength="2"
          maxLength="40"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
    </ModalWithForm>
  );
}
