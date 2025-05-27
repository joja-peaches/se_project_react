import { useEffect, useState } from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
  isFormValid,
}) {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [weather, setWeather] = useState("");
  const [inputValidation, setInputValidation] = useState({
    name: false,
    imgUrl: false,
    weather: null,
  });

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    const isValidName = nameValue.length > 2 && nameValue.length < 50;
    setInputValidation((prev) => ({
      ...prev,
      name: isValidName,
    }));
    setName(nameValue);
  };

  const handleImgUrlChange = (e) => {
    const imgUrlValue = e.target.value;
    const isValidImgUrl =
      imgUrlValue.includes("http://") || imgUrlValue.includes("https://");
    setInputValidation((prev) => ({
      ...prev,
      imgUrl: isValidImgUrl,
    }));
    setImgUrl(imgUrlValue);
  };

  const handleWeatherChange = (e) => {
    const weatherValue = e.target.value;
    const isValidWeather =
      weatherValue.includes("hot") ||
      weatherValue.includes("warm") ||
      weatherValue.includes("cold");
    setInputValidation((prev) => ({
      ...prev,
      weather: isValidWeather,
    }));
    setWeather(weatherValue);
  };

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
      isFormValid={
        inputValidation.name &&
        inputValidation.imgUrl &&
        inputValidation.weather
      }
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
