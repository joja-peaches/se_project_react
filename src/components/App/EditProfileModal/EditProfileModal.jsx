import { useContext } from "react";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";

import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

export default function EditProfileModal({
  isOpen,
  onClose,
  onEditProfileSubmit,
}) {
  const { values, handleChange, isValid, setValues, resetForm } =
    useFormAndValidation();
  const { currentUser } = useContext(CurrentUserContext);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEditProfileSubmit(values)
      .then(() => {
        resetForm();
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
      isFormValid={isValid}
      onSubmit={handleEditSubmit}
    >
      <label htmlFor="editName" className="modal__label">
        Name*
        <br />
        <input
          type="text"
          id="editName"
          name="name"
          placeholder={currentUser ? currentUser.name : "Name"}
          className="modal__input"
          minLength="2"
          maxLength="40"
          onChange={handleChange}
          value={values.name}
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar
        <br />
        <input
          type="url"
          id="avatar"
          name="avatar"
          placeholder={currentUser ? currentUser.avatar : "Avatar URL"}
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
