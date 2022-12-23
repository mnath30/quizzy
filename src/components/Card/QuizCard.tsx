import { QuizType } from "../../context";
import "./card.css";

type QuizCardProps = {
  quiz: QuizType;
  questionNo: number;
  nextPage: any;
  prevPage: any;
};

const QuizCard = ({
  quiz,
  questionNo,
  nextPage,
  prevPage,
}: QuizCardProps): JSX.Element => {
  return (
    <div className="quizcard__container card__body">
      <div className="flex-row quizCard__header">
        <h3 className="card__body--header">{quiz?.title}</h3>
        <span className="quizcard__quest">
          Question: {questionNo + 1}/{quiz?.numberOfQuestions}
        </span>
      </div>
      <p>{quiz?.questionList[questionNo].question}</p>
      <ul className="quizcard__ul">
        {quiz?.questionList[questionNo].options.map((option: any) => (
          <li key={option?.value} className="quizcard__options">
            {option.value}
          </li>
        ))}
      </ul>
      <button className="btn btn-prev" onClick={prevPage}>
        Previous
      </button>
      <button className="btn btn-next" onClick={nextPage}>
        Next
      </button>
    </div>
  );
};

export { QuizCard };
