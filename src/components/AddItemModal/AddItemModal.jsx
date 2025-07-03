import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
}) {
  const { values, handleChange, isValid, resetForm } = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddItemModalSubmit(values);
    resetForm();
  };

  return (
    <ModalWithForm
      title="New garment"
      name="new-card"
      buttonText={"Add garment"}
      onClose={onClose}
      isOpen={isOpen}
      isFormValid={isValid}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name <br />
        <input
          type="text"
          id="itemName"
          name="name"
          placeholder="Name"
          className="modal__input"
          minLength="2"
          maxLength="40"
          required
          onChange={handleChange}
          value={values.name || ""}
        />
      </label>
      <label className="modal__label">
        Image <br />
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          className="modal__input"
          minLength="2"
          required
          onChange={handleChange}
          value={values.imageUrl || ""}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__label modal__label_type_radio">
          <input
            name="weather"
            id="hot"
            type="radio"
            className="modal__radio-input"
            value="hot"
            required
            onChange={handleChange}
            checked={values.weather === "hot"}
          />
          Hot
        </label>
        <label className="modal__label modal__label_type_radio">
          <input
            name="weather"
            id="warm"
            type="radio"
            className="modal__radio-input"
            value="warm"
            required
            onChange={handleChange}
            checked={values.weather === "warm"}
          />
          Warm
        </label>
        <label className="modal__label modal__label_type_radio">
          <input
            name="weather"
            id="cold"
            type="radio"
            className="modal__radio-input"
            value="cold"
            required
            onChange={handleChange}
            checked={values.weather === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
