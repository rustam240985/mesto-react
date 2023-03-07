import PopupWithForm from "./PopupWithForm";
import { useRef, useEffect } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const buttonText = isLoading ? 'Сохранение...' : 'Сохранить';

  const avatarRef = useRef();
  const errorRef = useRef();

  useEffect(() => {
    if (isOpen) {
      const saveBtn = avatarRef.current.closest('.popup__form')[1];
      saveBtn.setAttribute('disabled', 'disabled');
      saveBtn.classList.add('popup__save_disabled');
      avatarRef.current.value = '';
      errorRef.current.textContent = '';
      errorRef.current.classList.remove('popup__input-error_active', 'popup__input_type_error');
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!avatarRef.current.validationMessage) {
      onUpdateAvatar({
        avatar: avatarRef.current.value,
      });

    }
  }

  function handleChange() {
    errorRef.current.textContent = avatarRef.current.validationMessage;
    const saveBtn = avatarRef.current.closest('.popup__form')[1];
    if (avatarRef.current.validationMessage) {
      saveBtn.setAttribute('disabled', 'disabled');
      saveBtn.classList.add('popup__save_disabled');
      errorRef.current.classList.add('popup__input-error_active', 'popup__input_type_error');
    }
    else {
      saveBtn.removeAttribute('disabled');
      saveBtn.classList.remove('popup__save_disabled');
      errorRef.current.classList.remove('popup__input-error_active', 'popup__input_type_error');
    }
  }

  return (
    <PopupWithForm namePopup='avatar' title='Обновить аватар' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText={buttonText}>
      <label className="popup__field">
        <input ref={avatarRef} className="popup__input popup__input_value_url" id="avatar-input" type="url" name="avatar_url"
          placeholder="Ссылка на картинку" onChange={handleChange} required />
        <span ref={errorRef} className="popup__input-error avatar-input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;