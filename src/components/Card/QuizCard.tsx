import "./card.css";
import { QuizCardProps } from "./QuizCard.type";
import { Option } from "./Option";
import { useNavigate } from "react-router-dom";
import { selectedOption } from "../../utils/selectedOption";
import { calculateScore } from "../../utils/calculateScore";
import { CALCULATE_SCORE, RESET_QUIZ, QUIT_QUIZ } from "../../utils/constants";

const QuizCard = ({
  quiz,
  questionNo,
  nextPage,
  prevPage,
  optionList,
  selectOption,
  dispatch,
}: QuizCardProps): JSX.Element => {
  const navigate = useNavigate();

  const quitQuiz = () => {
    dispatch({ type: QUIT_QUIZ });
    navigate("/categories", { replace: true });
  };

  const resetQuiz = () => {
    dispatch({ type: RESET_QUIZ });
  };

  return (
    <div className="quizcard__container card__body">
      <div className="flex-row">
        <button className="quit-btn" onClick={quitQuiz}>
          Quit Quiz
        </button>
        <button className="reset-btn" onClick={resetQuiz}>
          Reset Quiz
        </button>
      </div>
      <div className="flex-row quizCard__header">
        {/*Quiz Title */}
        <h3 className="card__body--header">{quiz?.title}</h3>

        {/*Current Question number */}
        <span className="quizcard__quest">
          Question: {questionNo + 1}/{quiz?.numberOfQuestions}
        </span>
      </div>

      {/* Question */}
      <p>{quiz?.questionList[questionNo].question}</p>

      {/* Question Options */}
      <ul className="quizcard__ul">
        {quiz?.questionList[questionNo].options.map((option: any) => (
          <Option
            key={option?.value}
            option={option}
            isOptionSelected={selectedOption}
            questionNo={questionNo}
            funcSelectOption={selectOption}
            optionList={optionList}
          />
        ))}
      </ul>

      {/* Previous Button */}
      <button
        className={`btn btn-prev ${questionNo === 0 ? "btn-disabled" : ""}`}
        onClick={prevPage}
        disabled={questionNo === 0}
      >
        Previous
      </button>

      {/* Next ot Final Button based on question number */}
      {questionNo + 1 !== quiz?.numberOfQuestions ? (
        <button
          className={`btn btn-next ${
            questionNo + 1 > optionList.length ? "btn-disabled" : ""
          }`}
          onClick={nextPage}
          disabled={questionNo + 1 > optionList.length}
        >
          Next
        </button>
      ) : (
        <button
          className={`btn btn-next ${
            questionNo + 1 > optionList.length ? "btn-disabled" : ""
          }`}
          onClick={() => {
            const score = calculateScore(optionList, quiz.questionList);
            dispatch({ type: CALCULATE_SCORE, payload: score });
            navigate("/result");
          }}
          disabled={questionNo + 1 > optionList.length}
        >
          Finish
        </button>
      )}
    </div>
  );
};

export { QuizCard };
