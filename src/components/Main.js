import avatar from '../images/avatar_kusto.jpg';
import api from '../utils/Api';
import Card from './Card';
import { useState, useEffect } from 'react';

function Main(props) {

  const [userName, setUserName] = useState('Жак Кусто');
  const [userDescription, setUserDescription] = useState('Исследователь');
  const [userAvatar, setUserAvatar] = useState(avatar);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUser(), api.getInitialCards()])
      .then(([dataUser, dataCards]) => {
        const resultCards = dataCards.map(item => (
          {
            id: item._id,
            link: item.link,
            name: item.name
          }
        ))
        setUserAvatar(dataUser.avatar)
        setUserName(dataUser.name);
        setUserDescription(dataUser.about)
        setCards([...resultCards]);
      })
  }, []);

  return (
    <main className="content">
      <section className="profile page__profile">
        <button className="profile__avatar-btn" onClick={props.onEditAvatar} type="button">
          <img className="profile__avatar" src={userAvatar} alt={userName} /></button>
        <div className="profile__info">
          <div className="profile__line">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" onClick={props.onEditProfile} type="button" aria-label="Редактировать профиль"></button>
          </div>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlace} type="button" aria-label="Добавить фото"></button>
      </section>
      <section aria-label="Фотографии мест" className="elements page__elements">
        {cards?.map(element => (
          <Card key={element.id} card={element} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  )
}

export default Main;