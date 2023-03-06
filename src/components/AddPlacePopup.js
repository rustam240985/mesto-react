import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function AddPlacePopup({ isOpen, onClose, onAddCard, isLoading }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [validationMessageName, setValidationMessageName] = useState('');
  const [validationMessageLink, setValidationMessageLink] = useState('');

  const buttonText = isLoading ? 'Создание...' : 'Создать';

  function handleChangeName(e) {
    setValidationMessageName(e.target.validationMessage);
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setValidationMessageLink(e.target.validationMessage);
    setLink(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();

    onAddCard({
      name,
      link,
    });

    e.target.reset();
  }

  function closePopup() {
    onClose();
    setName('');
    setLink('');
    setValidationMessageName('');
    setValidationMessageLink('');
  }

  return (
    <PopupWithForm namePopup='add-card' title='Новое место' isOpen={isOpen} onClose={closePopup} onSubmit={handleSubmit} buttonText={buttonText} disabled={validationMessageLink || validationMessageName}>
      <label className="popup__field">
        <input value={name} className={`popup__input popup__input_value_place  ${validationMessageName ? 'popup__input_type_error' : ''}`} id="place-input" type="text" name="card_place"
          placeholder="Новое место" minLength="2" maxLength="30" onChange={handleChangeName} required />
        <span className={`popup__input-error place-input-error ${validationMessageName ? 'popup__input-error_active' : ''}`}>{validationMessageName}</span>
      </label>
      <label className="popup__field">
        <input value={link} className={`popup__input popup__input_value_url ${validationMessageLink ? 'popup__input_type_error' : ''}`} id="url-input" type="url" name="card_url"
          placeholder="Ссылка на картинку" onChange={handleChangeLink} required />
        <span className={`popup__input-error url-input-error ${validationMessageLink ? 'popup__input-error_active' : ''}`}>{validationMessageLink}</span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;