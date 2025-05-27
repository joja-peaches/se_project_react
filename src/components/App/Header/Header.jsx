import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({
  handleAddClick,
  handleHamburgerClick,
  handleRegisterClick,
  handleLoginClick,
  weatherData,
  currentUser,
  getInitial,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  let elementsToRender;
  if (!currentUser) {
    elementsToRender = (
      <>
        <p className="header__register" onClick={handleRegisterClick}>
          Sign Up
        </p>
        <p className="header__login" onClick={handleLoginClick}>
          Log In
        </p>
      </>
    );
  } else {
    elementsToRender = (
      <>
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
        <div className="header__profile-container">
          <Link to="/profile" className="header__link">
            <p className="header__username">{currentUser.name}</p>
            {currentUser.avatar ? (
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="header__avatar"
              />
            ) : (
              <div className="header__avatar header__avatar-placeholder">
                {getInitial(currentUser.name)}
              </div>
            )}
          </Link>
        </div>
      </>
    );
  }

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
        {elementsToRender}
      </div>
    </header>
  );
}

export default Header;
