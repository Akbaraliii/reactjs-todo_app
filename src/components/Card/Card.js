import './Card.scss';

const Card = (props) => {
  const { card } = props;

  return (
    <>
      <div className='card-item'>
        {card.image && (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            className='card-cover'
            src={card.image}
            onMouseDown={(event) => event.preventDefault()}
          />
        )}
        {card.title}
      </div>
    </>
  );
};

export default Card;
