import { useState } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function RegisterModal({
  isOpen,
  onClose,
  onRegisterSubmit,
  handleRegisterClick,
  handleLoginClick,
  setIsLoggedIn,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [inputValidation, setInputValidation] = useState({
    email: false,
    password: false,
    name: false,
    avatar: false,
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
  };
  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    const isValidPassword =
      passwordValue.length > 6 && passwordValue.length < 20;
    setInputValidation((prev) => ({
      ...prev,
      password: isValidPassword,
    }));
    setPassword(passwordValue);
  };
  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    const isValidName = nameValue.length > 6 && nameValue.length < 40;
    setInputValidation((prev) => ({
      ...prev,
      name: isValidName,
    }));
    setName(nameValue);
  };
  const handleAvatarChange = (e) => {
    const avatarValue = e.target.value;
    const isValidAvatar =
      avatarValue.includes("http://") || avatarValue.includes("https://");
    setInputValidation((prev) => ({
      ...prev,
      avatar: isValidAvatar,
    }));
    setAvatar(e.target.value);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    onRegisterSubmit(email, password, name, avatar);
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
      isFormValid={
        inputValidation.email &&
        inputValidation.password &&
        inputValidation.name &&
        inputValidation.avatar
      }
    >
      <label htmlFor="email" className="modal__label">
        Email* <br />
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="modal__input"
          minLength="2"
          maxLength="40"
          required
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password* <br />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="modal__input"
          minLength="2"
          maxLength="40"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <label htmlFor="name" className="modal__label">
        Name <br />
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="modal__input"
          minLength="2"
          maxLength="40"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="avatarUrl" className="modal__label">
        Avatar URL <br />
        <input
          type="url"
          id="avatarUrl"
          placeholder="Avatar URL"
          className="modal__input"
          minLength="2"
          maxLength="100"
          onChange={handleAvatarChange}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}
