import { useEffect, useState } from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../../hooks/useForm";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
}) {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleImgUrlChange = (e) => setImgUrl(e.target.value);
  const handleWeatherChange = (e) => setWeather(e.target.value);

  // const {values, handleChange, setValues} = useForm({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddItemModalSubmit(name, imgUrl, weather);
  };

  useEffect(() => {
    setName("");
    setImgUrl("");
    setWeather("");
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New garment"
      name="new-card"
      buttonText={"Add garment"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name <br />
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="modal__input"
          minLength="2"
          maxLength="40"
          required
          onChange={handleNameChange}
          // onChange={handleChange}
          value={name}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image <br />
        <input
          type="url"
          id="imageUrl"
          placeholder="Image URL"
          className="modal__input"
          minLength="2"
          maxLength="60"
          required
          onChange={handleImgUrlChange}
          value={imgUrl}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            name="weather"
            id="hot"
            type="radio"
            className="modal__radio-input"
            value="hot"
            onChange={handleWeatherChange}
            checked={weather === "hot"}
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            name="weather"
            id="warm"
            type="radio"
            className="modal__radio-input"
            value="warm"
            onChange={handleWeatherChange}
            checked={weather === "warm"}
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            name="weather"
            id="cold"
            type="radio"
            className="modal__radio-input"
            value="cold"
            onChange={handleWeatherChange}
            checked={weather === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
