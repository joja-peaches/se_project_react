import { useState } from "react";
import { useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import "./ItemCard.css";
import noLikeButton from "../../../assets/images/not-liked-button.png";
import likeButton from "../../../assets/images/liked-button.png";

function ItemCard({ item, onCardClick, onLikeClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
  const currentUserId = currentUser ? currentUser._id : null;
  const [isLiked, setIsLiked] = useState(
    item.likes?.includes(currentUserId) || false
  );

  const handleLike = () => {
    const itemId = item._id;
    const updatedIsLiked = !isLiked;
    setIsLiked(updatedIsLiked);
    onLikeClick({ id: itemId, isLiked });
  };

  return (
    <li className="card">
      <div className="card__title-container">
        <h2 className="card__title">{item.name}</h2>
        {isLoggedIn && (
          <img
            src={isLiked ? likeButton : noLikeButton}
            className={"card__like-button"}
            onClick={handleLike}
          />
        )}
      </div>
      <img
        onClick={handleCardClick}
        src={item.imageUrl}
        className="card__image"
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
