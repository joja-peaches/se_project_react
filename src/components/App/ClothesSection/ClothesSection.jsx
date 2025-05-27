import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  onCardClick,
  onAddCardClick,
  clothingItems,
  onLikeClick,
  isLoggedIn,
  currentUser,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__title">
        <p className="clothes-section__title-text">Your clothes</p>
        <button
          onClick={onAddCardClick}
          className="clothes-section__add-button"
        >
          +Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              onLikeClick={onLikeClick}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
