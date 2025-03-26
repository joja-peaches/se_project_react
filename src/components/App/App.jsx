import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// refactor
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Profile from "./Profile/Profile";
import ItemModal from "./ItemModal/ItemModal";
import Footer from "./Footer/Footer";

import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperaturUnitContext";
import AddItemModal from "./AddItemModal/AddItemModal";
import { getItems, addItem, deleteItem } from "../../utils/api";
import HamburgerModal from "./HamburgerModal/HamburgerModal";

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
  const [clothingItems, setClothingItems] = useState([]);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("create");
  };

  const handleHamburgerClick = () => {
    setActiveModal("hamburger");
  };

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItemModalSubmit = (name, imgUrl, weather) => {
    addItem(name, imgUrl, weather)
      .then((newItem) => {
        setClothingItems((clothingItems) => [newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleDeleteItem = () => {
    deleteItem(selectedCard._id)
      .then(() => {
        const filteredArray = clothingItems.filter(
          (item) => item !== selectedCard
        );
        setClothingItems(filteredArray);
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header
            handleAddClick={handleAddClick}
            handleHamburgerClick={handleHamburgerClick}
            weatherData={weatherData}
            isOpen={activeModal === "hamburger"}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  onAddCardClick={handleAddClick}
                  clothingItems={clothingItems}
                  weatherData={weatherData}
                />
              }
            />
          </Routes>
          <AddItemModal
            onClose={closeActiveModal}
            isOpen={activeModal === "create"}
            onAddItemModalSubmit={handleAddItemModalSubmit}
          />
          <ItemModal
            isOpen={activeModal === "preview"}
            card={selectedCard}
            onClose={closeActiveModal}
            onDelete={handleDeleteItem}
          />
          <HamburgerModal
            isOpen={activeModal === "hamburger"}
            onClose={closeActiveModal}
            handleAddClick={handleAddClick}  
          />
          <Footer />
        </div>
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;