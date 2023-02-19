function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="element" key={card.id}>
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <button className="element__trash" type="button" aria-label="Удалить карточку"></button>
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes">
          <button type="button" className="element__like" aria-label="Нравится"></button>
          <span className="element__likes-count"></span>
        </div>
      </div>
    </article>
  )
}

export default Card;