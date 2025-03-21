import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/images/logo.svg";
import avatar from "../../../assets/images/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, handleHamburgerClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="text logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
        <div className="header__hamburger" onClick={handleHamburgerClick}>
          <hr className="header__line" />
          <hr className="header__line" />
        </div>
      </div>
      <div className="header__user-container">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
        <div className="header__profile-container">
          <Link to="/profile" className="header__link">
            <p className="header__username">Terrence Tegegne</p>
            <img
              src={avatar}
              alt="Terrence Tegegne"
              className="header__avatar"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
