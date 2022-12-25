import { Question, useQuiz } from "../../context";
import { Navigation, Option } from "../../components";
import { selectedOption } from "../../utils/selectedOption";
import "./result.css";
import { Link, useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const {
    state: {
      currentQuiz,
      onGoingQuizDetails: { optionsSelected },
      latestScore,
    },
  } = useQuiz();

  return (
    <div className="result__container">
      <Navigation />
      {JSON.stringify(currentQuiz) !== JSON.stringify({}) &&
      optionsSelected.length === currentQuiz?.numberOfQuestions ? (
        <div className="result__content flex-col">
          <div className="result__content--value">
            <div className="result__content--header">
              <h2>Result</h2>
              <h3 className="heading">Final Score: {latestScore}</h3>
              <button className="btn" onClick={() => navigate("/categories")}>
                Back to Categories
              </button>
            </div>
            <section>
              <h3>{currentQuiz.title}</h3>
              {currentQuiz?.questionList.map(
                (ques: Question, index: number) => (
                  <div key={index} className="result__content--question">
                    <p>
                      {index + 1}. {ques?.question}
                    </p>
                    <ul>
                      {ques?.options.map((option: any) => (
                        <Option
                          key={option?.value}
                          option={option}
                          isOptionSelected={selectedOption}
                          questionNo={index}
                          optionList={optionsSelected}
                          displayingResult={true}
                        />
                      ))}
                    </ul>
                  </div>
                )
              )}
            </section>
          </div>
        </div>
      ) : (
        <h3 className="padding-sm">
          Please complete the Quiz to know the results.{" "}
          <Link to="/categories"> Go to Categories</Link>
        </h3>
      )}
    </div>
  );
};

export { Result };
