import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ClothesSection({
  onCardClick,
  onAddCardClick,
  clothingItems,
  onLikeClick,
}) {
  const { currentUser } = useContext(CurrentUserContext);

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
        {clothingItems
          .filter((item) => {
            return item.owner === currentUser._id ? true : false;
          })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
                onLikeClick={onLikeClick}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
