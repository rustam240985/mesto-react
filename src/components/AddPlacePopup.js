import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from "react";

function AddPlacePopup({ isOpen, onClose, onAddCard, isLoading }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [validationMessageName, setValidationMessageName] = useState('');
  const [validationMessageLink, setValidationMessageLink] = useState('');
  const [valid, setValid] = useState(false);

  const buttonText = isLoading ? 'Создание...' : 'Создать';

  useEffect(() => {
    if (isOpen) {
      setName('');
      setLink('');
      setValidationMessageName('');
      setValidationMessageLink('');
      setValid(false);
    }
  }, [isOpen]);

  function handleChangeName(e) {
    setValid(e.target.closest('form').checkValidity());
    setValidationMessageName(e.target.validationMessage);
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setValid(e.target.closest('form').checkValidity());
    setValidationMessageLink(e.target.validationMessage);
    setLink(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();

    onAddCard({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      namePopup='add-card'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      disabled={!valid}>
      <label className="popup__field">
        <input
          value={name}
          onChange={handleChangeName}
          className={`popup__input popup__input_value_place  ${validationMessageName ? 'popup__input_type_error' : ''}`}
          id="place-input"
          type="text"
          name="card_place"
          placeholder="Новое место"
          minLength="2"
          maxLength="30"
          required />
        <span className={`popup__input-error place-input-error ${validationMessageName ? 'popup__input-error_active' : ''}`}>{validationMessageName}</span>
      </label>
      <label className="popup__field">
        <input
          value={link}
          onChange={handleChangeLink}
          className={`popup__input popup__input_value_url ${validationMessageLink ? 'popup__input_type_error' : ''}`}
          id="url-input"
          type="url"
          name="card_url"
          placeholder="Ссылка на картинку"
          required />
        <span className={`popup__input-error url-input-error ${validationMessageLink ? 'popup__input-error_active' : ''}`}>{validationMessageLink}</span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;