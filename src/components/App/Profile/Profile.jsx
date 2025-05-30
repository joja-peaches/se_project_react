import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  onCardClick,
  onAddCardClick,
  clothingItems,
  weatherData,
  currentUser,
  getInitial,
  onEditProfileClick,
  onLogOut,
  isLoggedIn,
  onLikeClick,
}) {
  return (
    <div className="profile">
      <SideBar
        weatherData={weatherData}
        currentUser={currentUser}
        getInitial={getInitial}
        onEditProfileClick={onEditProfileClick}
        onLogOut={onLogOut}
      />
      <ClothesSection
        onCardClick={onCardClick}
        onAddCardClick={onAddCardClick}
        clothingItems={clothingItems}
        isLoggedIn={isLoggedIn}
        onLikeClick={onLikeClick}
        currentUser={currentUser}
      />
    </div>
  );
}

export default Profile;
