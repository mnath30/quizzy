import { Navigation } from "../../components";
import { useQuiz } from "../../context";
import "./rules.css";
import { Link } from "react-router-dom";

const Rules = (): JSX.Element => {
  const {
    state: { currentQuizId },
  } = useQuiz();

  return (
    <>
      <Navigation />
      <div className="rules flex-row">
        <div className="rules__container">
          <h3 className="rules__container--header">Rules</h3>
          <ol>
            <li className="rules__container--list">
              The quiz has 5 questions.
            </li>
            <li className="rules__container--list">
              Each question has only one correct answer
            </li>
            <li className="rules__container--list">
              Each correct answer adds one point.
            </li>
            <li className="rules__container--list">
              There is no negative marks for the wrong answers.
            </li>
            <li className="rules__container--list">
              All the questions are mandatory.
            </li>
          </ol>
          <Link
            to={`/categories/${currentQuizId}`}
            className="btn rules__container--btn"
          >
            Let's go!!
          </Link>
        </div>
      </div>
    </>
  );
};

export { Rules };
