import { useContext, useState } from "react";

import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

export default function EditProfileModal({
  isOpen,
  onClose,
  onEditProfileSubmit,
}) {
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser ? currentUser.name : "");
  const [avatar, setAvatar] = useState(currentUser ? currentUser.avatar : "");
  const [inputValidation, setInputValidation] = useState(
    isLoggedIn
      ? {
          name: true,
          avatar: true,
        }
      : {
          name: false,
          avatar: false,
        }
  );

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
    onEditProfileSubmit(name, avatar || undefined)
      .then(() => {
        setName("Name");
        setAvatar("Avatar");
        setInputValidation({
          name: false,
          avatar: true,
        });
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
      isFormValid={
        inputValidation.name && (avatar === "" || inputValidation.avatar)
      }
      onSubmit={handleEditSubmit}
    >
      <label htmlFor="editName" className="modal__label">
        Name*
        <br />
        <input
          type="text"
          id="editName"
          placeholder={currentUser ? currentUser.name : "Name"}
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
          placeholder={currentUser ? currentUser.avatar : "Avatar URL"}
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
