import React from 'react';

function PopupWithForm(props) {

  return (
    <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`} onMouseDown={evt => {
      if (evt.target.classList.contains('popup_opened')) {
        props.onClose();
      }
    }}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className={`popup__form ${props.name}-form`} action="#" name={`${props.name}-form`} noValidate>
          {props.children}
          <button className="popup__save" type="submit" onSubmit={props.onClose}>Сохранить</button>
        </form>
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default PopupWithForm;