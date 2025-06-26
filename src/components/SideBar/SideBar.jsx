import { Link } from "react-router-dom";
import { useContext } from "react";

import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ weatherData, getInitial, onEditProfileClick, onLogOut }) {
  const { currentUser } = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const viewportWidth = window.innerWidth;

  return (
    <div className="sidebar">
      <p className="sidebar__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <section className="sidebar__container">
        <div className="sidebar__mobile-user">
          {currentUser.avatar ? (
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="sidebar__avatar"
            />
          ) : (
            <div className="sidebar__avatar sidebar__avatar-placeholder">
              {getInitial(currentUser.name)}
            </div>
          )}
          <h2 className="sidebar__username">{currentUser.name}</h2>
        </div>
        <div className="sidebar__mobile-menu">
          <p className="sidebar__profile-text" onClick={onEditProfileClick}>
            Change profile data
          </p>
          <Link to="/" className="sidebar__profile-logout">
            <p className="sidebar__profile-text" onClick={onLogOut}>
              Log out
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SideBar;
