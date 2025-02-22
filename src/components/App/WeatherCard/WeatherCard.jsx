import dayStorm from '../../../assets/images/day-storm.png';
import './WeatherCard.css';
import { defaultClothingItems } from '../../../utils/constants';

function WeatherCard({weatherData}) {
    return (
        <section className="weather-card">
            <p className="weather-card__temp">{weatherData.temp.F} F</p>
            <img src={dayStorm} alt="stormy daytime weather" className="weather-card__image" />   
        </section>
    )
}

export default WeatherCard;