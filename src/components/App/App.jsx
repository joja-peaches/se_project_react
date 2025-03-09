import { useEffect, useState } from "react";
// NEW BRANCH PROJECT 11
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import ItemModal from "./ItemModal/ItemModal";
import Footer from "./Footer/Footer";

import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperaturUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleAddItemSubmit = () => {
    console.log("hello")
  }

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("create");
    console.log('test');
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={() => setActiveModal("preview")} weatherData={weatherData} />
          <Main
            weatherData={weatherData}
            handleCardClick={handleCardClick}
            currentTemperatureUnit={currentTemperatureUnit}
          />
          <AddItemModal
            onAddItem={handleAddItemSubmit}
            onClose={closeActiveModal}
            isOpen={activeModal === "create"}
          />
          {/* <ModalWithForm
            title="New garment"
            buttonText="Add garment"
            activeModal={activeModal}
            onClose={closeActiveModal}
            isOpen={activeModal === "add-garment"}
          >
            <label htmlFor="name" className="modal__label">
              Name <br />
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="modal__input"
              />
            </label>
            <label htmlFor="imageUrl" className="modal__label">
              Image <br />
              <input
                type="url"
                id="imageUrl"
                placeholder="Image URL"
                className="modal__input"
              />
            </label>
            <fieldset className="modal__radio-buttons">
              <legend className="modal__legend">
                Select the weather type:
              </legend>
              <label
                htmlFor="hot"
                className="modal__label modal__label_type_radio"
              >
                <input
                  name="weather"
                  id="hot"
                  type="radio"
                  className="modal__radio-input"
                />{" "}
                Hot
              </label>
              <label
                htmlFor="warm"
                className="modal__label modal__label_type_radio"
              >
                <input
                  name="weather"
                  id="warm"
                  type="radio"
                  className="modal__radio-input"
                />{" "}
                Warm
              </label>
              <label
                htmlFor="cold"
                className="modal__label modal__label_type_radio"
              >
                <input
                  name="weather"
                  id="cold"
                  type="radio"
                  className="modal__radio-input"
                />{" "}
                Cold
              </label>
            </fieldset>
          </ModalWithForm> */}
          <ItemModal
            isOpen={activeModal === "preview"}
            card={selectedCard}
            onClose={closeActiveModal}
          />
          <Footer />
        </div>
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
