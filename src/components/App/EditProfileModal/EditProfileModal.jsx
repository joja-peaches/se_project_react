import { useState } from "react";

import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function EditProfileModal({
  isOpen,
  onClose,
  onEditProfileSubmit,
}) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [inputValidation, setInputValidation] = useState({
    name: false,
    avatar: false,
  });

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    const isValidName = nameValue.length > 2 && nameValue.length < 40;
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

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEditProfileSubmit(name, avatar)
      .then(() => {
        setName("Name");
        setAvatar("Avatar");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      name="edit"
      buttonText="Save changes"
      onClose={onClose}
      isOpen={isOpen}
      isFormValid={inputValidation.name && inputValidation.avatar}
      onSubmit={handleEditSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name*
        <br />
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
        Avatar
        <br />
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
