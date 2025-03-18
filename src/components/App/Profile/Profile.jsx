import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({onCardClick}) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        onCardClick={onCardClick}
      />
    </div>
  );
}

export default Profile;
