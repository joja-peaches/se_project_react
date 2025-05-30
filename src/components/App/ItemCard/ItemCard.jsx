import { useState } from "react";
import "./ItemCard.css";
import noLikeButton from "../../../assets/images/not-liked-button.png";
import likeButton from "../../../assets/images/liked-button.png";

function ItemCard({ item, onCardClick, onLikeClick, isLoggedIn, currentUser }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const currentUserId = currentUser ? currentUser._id : null;
  // const [isLiked, setIsLiked] = useState(item.likes.includes(currentUserId));
  console.log("ItemCard debug:", { item, currentUserId, likes: item.likes });
  console.log("ItemCard debug:", { item, currentUserId, likes: item.likes });
  console.log("Item name:", item.name);
  console.log("Item imageUrl:", item.imageUrl);
  console.log("Item object keys:", Object.keys(item));
  const [isLiked, setIsLiked] = useState(
    item.likes?.includes(currentUserId) || false
  );

  const handleLike = () => {
    const itemId = item._id;
    console.log(item, currentUser);
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
