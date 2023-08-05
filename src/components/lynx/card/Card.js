import "./card.css";

const Card = ({ text, headerText }) => {
  return (
    <div className="lynxCardContainer">
      <div className="lynxCardHeader">{headerText}</div>
      <div className="lynxCardBody">{text}</div>
    </div>
  );
};

export default Card;
