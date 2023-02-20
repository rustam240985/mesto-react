import { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ isOpen: false, link: '#', id: '#', name: '#' });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({ isOpen: true, ...card })
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ isOpen: false, link: '#', id: '#', name: '#' });
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
        <Footer />
      </div>
      <PopupWithForm name='profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText='Сохранить'>
        <label className="popup__field">
          <input className="popup__input popup__input_value_name" id="name-input" type="text" name="profileName"
            placeholder="Имя" minLength="2" maxLength="40" required />
          <span className="popup__input-error name-input-error"></span>
        </label>
        <label className="popup__field">
          <input className="popup__input popup__input_value_profession" id="profession-input" type="text"
            name="profileProfession" placeholder="Профессия" minLength="2" maxLength="200" required />
          <span className="popup__input-error profession-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm name='add-card' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText='Создать'>
        <label className="popup__field">
          <input className="popup__input popup__input_value_place" id="place-input" type="text" name="card_place"
            placeholder="Новое место" minLength="2" maxLength="30" required />
          <span className="popup__input-error place-input-error"></span>
        </label>
        <label className="popup__field">
          <input className="popup__input popup__input_value_url" id="url-input" type="url" name="card_url"
            placeholder="Ссылка на картинку" required />
          <span className="popup__input-error url-input-error"></span>
        </label>
      </PopupWithForm>
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText='Сохранить'>
        <label className="popup__field">
          <input className="popup__input popup__input_value_url" id="avatar-input" type="url" name="avatar_url"
            placeholder="Ссылка на картинку" required />
          <span className="popup__input-error avatar-input-error"></span>
        </label>
      </PopupWithForm>
    </div>
  );
}

export default App;