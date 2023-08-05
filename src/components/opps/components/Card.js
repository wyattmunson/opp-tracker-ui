export const Card = ({ header, text, subText }) => {
  return (
    <div className="whiteBoxShadow lynxCard">
      <h5>{header}</h5>
      <span>{text}</span>
      <small>{subText}</small>
    </div>
  );
};

export const CardInverse = ({ header, text, subText }) => {
  return (
    <div className="whiteBoxShadow lynxCard">
      <p>{header}</p>
      <h3>{text}</h3>
      <small>{subText}</small>
    </div>
  );
};

export default Card;
