import dayStorm from "../../../assets/images/day/thunderstorm.png";
import "./WeatherCard.css";

import { weatherOptions } from "../../../utils/constants";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../../contexts/CurrentTemperaturUnitContext";

function WeatherCard({ weatherData }) {
  const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext);
  const filteredOptions = weatherOptions.filter((option) => {

    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherOptionUrl = filteredOptions[0]?.url;
  const weatherOptionCondition = filteredOptions[0]?.condition;
  const weatherOptionDay = filteredOptions[0]?.day;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp[currentTemperatureUnit]}&deg; {currentTemperatureUnit}</p>
      <img
        src={weatherOptionUrl}
        alt={`Card showing ${weatherOptionDay} ${weatherOptionCondition}`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
