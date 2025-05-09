import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LoginModal({ isOpen, onClose, onLoginSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(email, password);
  };

  return (
    <ModalWithForm
      title="Login"
      name="login"
      buttonText={"Log In"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleLoginSubmit}
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
    </ModalWithForm>
  );
}
