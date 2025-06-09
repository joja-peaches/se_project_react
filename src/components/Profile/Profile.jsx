import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  onCardClick,
  onAddCardClick,
  clothingItems,
  weatherData,
  getInitial,
  onEditProfileClick,
  onLogOut,
  onLikeClick,
}) {
  return (
    <div className="profile">
      <SideBar
        weatherData={weatherData}
        getInitial={getInitial}
        onEditProfileClick={onEditProfileClick}
        onLogOut={onLogOut}
      />
      <ClothesSection
        onCardClick={onCardClick}
        onAddCardClick={onAddCardClick}
        clothingItems={clothingItems}
        onLikeClick={onLikeClick}
      />
    </div>
  );
}

export default Profile;
