import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// delete modal branch
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import ItemModal from "../ItemModal/ItemModal";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import HamburgerModal from "../HamburgerModal/HamburgerModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import Footer from "../Footer/Footer";

import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import {
  getItems,
  addItem,
  deleteItem,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import { signUp, signIn, getUserInfo, editProfile } from "../../utils/auth";
import { getToken } from "../../utils/token";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperaturUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

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
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

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

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleEditProfileClick = () => {
    setActiveModal("edit");
  };

  const handleDeleteItemClick = () => {
    setActiveModal("delete");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    addItem({ name, imageUrl, weather })
      .then((newItem) => {
        setClothingItems([newItem.data, ...clothingItems]);
        closeActiveModal();
      })
      .catch((error) => {
        console.log("API call failed: ", error);
      });
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

  const handleRegisterSubmit = (values) => {
    signUp(values)
      .then(() => {
        setCurrentUser({
          email: values.email,
          name: values.name,
          avatar: values.avatar,
        });
      })
      .then(() => {
        handleLoginSubmit(values.email, values.password);
      })
      .catch((err) => {
        console.error("Error:", err);
        return Promise.reject(err);
      });
  };

  const handleLoginSubmit = (email, password) => {
    return signIn({ email, password })
      .then((res) => {
        const token = getToken();
        return getUserInfo(token);
      })
      .then((userInfo) => {
        setCurrentUser(userInfo);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Error:", err);
        return Promise.reject(err);
      });
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const handleEditProfileSubmit = (name, avatar) => {
    return editProfile(name, avatar)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Error:", err);
        return Promise.reject(err);
      });
  };

  const handleLikeClick = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            console.log(id);
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
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
        setClothingItems(data.reverse());
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }
    getUserInfo(jwt)
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={{ isLoggedIn, currentUser }}>
        <div className="page">
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              handleHamburgerClick={handleHamburgerClick}
              handleRegisterClick={handleRegisterClick}
              handleLoginClick={handleLoginClick}
              weatherData={weatherData}
              isOpen={activeModal === "hamburger"}
              getInitial={getInitial}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onLikeClick={handleLikeClick}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  isLoggedIn ? (
                    <Profile
                      onCardClick={handleCardClick}
                      onAddCardClick={handleAddClick}
                      clothingItems={clothingItems}
                      weatherData={weatherData}
                      getInitial={getInitial}
                      onEditProfileClick={handleEditProfileClick}
                      onLogOut={handleLogOut}
                      onLikeClick={handleLikeClick}
                    />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
              <Route
                path="*"
                element={
                  isLoggedIn ? (
                    <Navigate to="/profile" replace />
                  ) : (
                    <Navigate to="/" replace />
                  )
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
              onDelete={handleDeleteItemClick}
            />
            <DeleteItemModal
              isOpen={activeModal === "delete"}
              onClose={closeActiveModal}
              onDelete={handleDeleteItem}
            />
            <HamburgerModal
              isOpen={activeModal === "hamburger"}
              onClose={closeActiveModal}
              handleAddClick={handleAddClick}
            />
            <RegisterModal
              isOpen={activeModal === "register"}
              onClose={closeActiveModal}
              onRegisterSubmit={handleRegisterSubmit}
              handleRegisterClick={handleRegisterClick}
              handleLoginClick={handleLoginClick}
            />
            <LoginModal
              isOpen={activeModal === "login"}
              onClose={closeActiveModal}
              onLoginSubmit={handleLoginSubmit}
              handleRegisterClick={handleRegisterClick}
              handleLoginClick={handleLoginClick}
              setIsLoggedIn={setIsLoggedIn}
            />
            <EditProfileModal
              isOpen={activeModal === "edit"}
              onClose={closeActiveModal}
              onEditProfileSubmit={handleEditProfileSubmit}
            />
            <Footer />
          </div>
        </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
