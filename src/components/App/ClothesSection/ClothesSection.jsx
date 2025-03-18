import "./ClothesSection.css";
import { defaultClothingItems } from "../../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({onCardClick}) {
  return (
    <div className="clothes-section">
        <div className="clothes-section__title">
            <p className="clothes-section__title-text">Your clothes</p>
            <button className="clothes-section__add-button">+Add new</button>
        </div>
        <ul className="clothes-section__items">
          {defaultClothingItems
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                />
              );
            })}
        </ul>
    </div>
  );
}

export default ClothesSection;