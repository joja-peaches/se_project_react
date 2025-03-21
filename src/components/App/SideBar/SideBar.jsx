import "./SideBar.css";
import avatar from "../../../assets/images/avatar.png";

function SideBar( {weatherData} ) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="sidebar">
      <p className="sidebar__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <section className="sidebar__container">
        <img src={avatar} className="sidebar__avatar" />
          <div className="sidebar__mobile">
            <h2 className="sidebar__username">Terrence Tegegne</h2>
            <p className="sidebar__profile-text">Change profile data</p>
            <p className="sidebar__profile-text">Log out</p>
          </div>
      </section>
    </div>
  );
}

export default SideBar;
