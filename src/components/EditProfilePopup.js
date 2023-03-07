import PopupWithForm from "./PopupWithForm";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const [name, setName] = useState('Fedor');
  const [description, setDescription] = useState('Master');
  const [validationMessageDescription, setValidationMessageDescription] = useState('');
  const [validationMessageName, setValidationMessageName] = useState('');
  const [valid, setValid] = useState(false)

  const currentUser = useContext(CurrentUserContext);

  const buttonText = isLoading ? 'Сохранение...' : 'Сохранить';

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
      setValidationMessageName('');
      setValidationMessageDescription('');
      setValid(true);
    }
  }, [isOpen]);

  function handleChangeName(e) {
    setValid(e.target.closest('form').checkValidity());
    setValidationMessageName(e.target.validationMessage);
    setName(e.target.value);
  }

  function handleChangeDecription(e) {
    setValid(e.target.closest('form').checkValidity());
    setValidationMessageDescription(e.target.validationMessage);
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validationMessageName && !validationMessageDescription) {
      onUpdateUser({
        name,
        about: description,
      });
    }
  }

  return (
    <PopupWithForm namePopup='profile' title='Редактировать профиль' isOpen={isOpen} onClose={onClose} buttonText={buttonText} onSubmit={handleSubmit} disabled={!valid}>
      <label className="popup__field">
        <input value={name} className={`popup__input popup__input_value_name ${validationMessageName ? 'popup__input_type_error' : ''}`} id="name-input" type="text" name="profileName"
          placeholder="Имя" minLength="2" maxLength="40" onChange={handleChangeName} required />
        <span className={`popup__input-error name-input-error ${validationMessageName ? 'popup__input-error_active' : ''}`}>{validationMessageName}</span>
      </label>
      <label className="popup__field">
        <input value={description} className={`popup__input popup__input_value_profession ${validationMessageDescription ? 'popup__input_type_error' : ''}`} id="profession-input" type="text"
          name="profileProfession" placeholder="Профессия" minLength="2" maxLength="200" onChange={handleChangeDecription} required />
        <span className={`popup__input-error profession-input-error ${validationMessageDescription ? 'popup__input-error_active' : ''}`}>{validationMessageDescription}</span>
      </label>
    </PopupWithForm >
  )


}


export default EditProfilePopup;