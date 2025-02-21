import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal modal-opened">
      <form className="modal__form">
        <h2 className="modal__title">New garment</h2>
        <button type="button" className="modal__close"></button>
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <br />
          <input 
          type='text' 
          id='name'
          placeholder='Name'
          className='modal__input'
          />
        </label>
        <label htmlFor='imageUrl' className='modal__label'>
          Image{" "}
          <br />
          <input 
          type='url' 
          id='imageUrl'
          placeholder='Image URL'
          className='modal__input'
          />
        </label>
        <fieldset className='modal__radio-buttons'>
          <legend className='modal__legend'>Select the weather type:</legend>
          <label htmlFor='hot' className='modal__label modal__label_type_radio'>
            <input 
            id='hot' 
            type='radio'
            className='modal__radio-input'
            /> Hot</label>
          <label htmlFor='warm' className='modal__label modal__label_type_radio'>
            <input 
            id='warm' 
            type='radio'
            className='modal__radio-input'
            /> Warm</label>
          <label htmlFor='cold' className='modal__label modal__label_type_radio'>
           <input 
            id='cold' 
            type='radio'
            className='modal__radio-input'
            /> Cold</label>
        </fieldset>
        <button type='submit' className="modal__submit">
            Add garment
        </button>
      </form>
    </div>
  );
}

export default ModalWithForm;
