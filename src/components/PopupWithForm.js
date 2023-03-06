import React from 'react';

function PopupWithForm(props) {

  function closePopup(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      props.onClose();
    }
  }

  return (
    <div className={`popup popup-${props.namePopup} ${props.isOpen ? 'popup_opened' : ''}`} onMouseDown={closePopup}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className={`popup__form ${props.namePopup}-form`} name={`${props.namePopup}-form`} onSubmit={props.onSubmit} noValidate>
          {props.children}
          <button className={`popup__save ${props.disabled ? 'popup__save_disabled' : ''}`} type="submit" disabled={props.disabled}>{props.buttonText}</button>
        </form>
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default PopupWithForm;