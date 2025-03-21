import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({onCardClick, onAddCardClick, clothingItems, weatherData, onDelete}) {
  return (
    <div className="profile">
      <SideBar 
        weatherData={weatherData}
      />
      <ClothesSection
        onCardClick={onCardClick}
        onAddCardClick={onAddCardClick}
        clothingItems={clothingItems}
      />
    </div>
  );
}

export default Profile;
