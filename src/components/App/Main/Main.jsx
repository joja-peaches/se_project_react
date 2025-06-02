import { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../../contexts/CurrentTemperaturUnitContext";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import "./Main.css";

function Main({ weatherData, handleCardClick, clothingItems, onLikeClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]}&deg;{" "}
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  onLikeClick={onLikeClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
