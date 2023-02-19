export const popupConfirm = '.popup-verify';
export const popupAvatar = '.popup-avatar';
export const elementsSection = '.elements';
export const profileName = '.profile__name';
export const profileProffesion = '.profile__profession';
export const popupEditProfile = '.popup-profile';
export const popupAddCard = '.popup-add-card';

// Конфиг валидации

export const configValidate = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

export const configApi = {
  baseUrl: 'https://mesto.nomoreparties.co/v1',
  cohortId: 'cohort-58',
  headers: {
    authorization: '91ac76a5-4bfb-4322-84e8-e3220f5958d6',
    "Content-Type": 'application/json',
  },
};

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];