import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function RegisterModal({ isOpen, onClose, onRegisterSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleAvatarChange = (e) => setAvatar(e.target.value);

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
      <label htmlFor="register-name" className="modal__label">
        Name <br />
        <input
          type="text"
          id="register-name"
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
