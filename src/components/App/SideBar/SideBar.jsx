import "./SideBar.css";
import avatar from "../../../assets/images/avatar.png";

function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} className="sidebar__avatar" />
        <div className="sidebar__mobile">
          <h2 className="sidebar__username">Terrence Tegegne</h2>
          <p className="sidebar__profile-text">Change profile data</p>
          <p className="sidebar__profile-text">Log out</p>
        </div>
    </div>
  );
}

export default SideBar;
