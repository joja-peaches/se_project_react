import "./AddItemModal.css";
import ModalWithForm from "../App/ModalWithForm/ModalWithForm";

export default function AddItemModal({onAddItem, onClose, isOpen}) {
  <ModalWithForm
    title="New garment"
    name="new-card"
    buttonText="Add garment"
    onSubmit={onAddItem}
    onClose={onClose}
    isOpen={isOpen}
  >
    <label htmlFor="name" className="modal__label">
      Name <br />
      <input
        type="text"
        id="name"
        placeholder="Name"
        className="modal__input"
      />
    </label>
    <label htmlFor="imageUrl" className="modal__label">
      Image <br />
      <input
        type="url"
        id="imageUrl"
        placeholder="Image URL"
        className="modal__input"
      />
    </label>
    <fieldset className="modal__radio-buttons">
      <legend className="modal__legend">Select the weather type:</legend>
      <label htmlFor="hot" className="modal__label modal__label_type_radio">
        <input
          name="weather"
          id="hot"
          type="radio"
          className="modal__radio-input"
        />{" "}
        Hot
      </label>
      <label htmlFor="warm" className="modal__label modal__label_type_radio">
        <input
          name="weather"
          id="warm"
          type="radio"
          className="modal__radio-input"
        />{" "}
        Warm
      </label>
      <label htmlFor="cold" className="modal__label modal__label_type_radio">
        <input
          name="weather"
          id="cold"
          type="radio"
          className="modal__radio-input"
        />{" "}
        Cold
      </label>
    </fieldset>
  </ModalWithForm>;
}
