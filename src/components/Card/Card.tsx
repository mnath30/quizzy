import "./card.css";

const Card = () => {
  return (
    <div className="card__container">
      <div className="card__header">
        <img src="../../" className="card__img" alt="category-depiction" />
        <span className="card__title">Suits</span>
      </div>
      <div>
        <h3 className="card__body_header">Heading</h3>
        <p className="card__body_details">Take this Quiz rto test yourself</p>
        <p className="card__body_questions">5 Questions</p>
      </div>
    </div>
  );
};

export { Card };
