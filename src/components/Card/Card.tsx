import "./card.css";

const Card = ({ quizItem, quizSelector }: any): JSX.Element => {
  const { id, title, description, numberOfQuestions, imgUrl } = quizItem;
  return (
    <div
      className="card__container flex-column margin-sm"
      onClick={() => quizSelector(id)}
    >
      <div className="card__header">
        <img
          src={imgUrl}
          className="card__header--img"
          alt="category-depiction"
        />
        <span className="card__header--title">{title}</span>
      </div>
      <div className="card__body">
        <h3 className="card__body--header">{title}</h3>
        <p className="card__body--details">{description}</p>
        <p className="card__body--questions">{numberOfQuestions} Questions</p>
      </div>
    </div>
  );
};

export { Card };
