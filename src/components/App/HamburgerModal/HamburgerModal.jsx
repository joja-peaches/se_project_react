import { Link } from "react-router-dom";
import "./HamburgerModal.css";
import avatar from "../../../assets/images/avatar.png";
import HamburgerSwitch from "../HamburgerSwitch/HamburgerSwitch";

function HamburgerModal({ isOpen, onClose, handleAddClick, isLoggedIn, currentUser }) {
  return (
    <div
      className={`modal modal_type_hamburger ${isOpen ? "modal_opened" : ""}`}
    >
      <div className="modal__container">
      <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-type-hamburger"
        />
        <Link to="/profile" className="modal__link" onClick={onClose}>
          <p className="modal__username">{isLoggedIn ? currentUser.name : ""}</p>
          <img src={isLoggedIn ? currentUser.avatar : ""} alt={isLoggedIn ? currentUser.name : ""} className="modal__avatar" />
        </Link>
        <button
          onClick={handleAddClick}
          type="button"
          className="modal__add-clothes-btn"
        >
          + Add clothes
        </button>
        <HamburgerSwitch 
          isOpen={isOpen}
        />
      </div>
    </div>
  );
}

export default HamburgerModal;
