import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuiz } from "../../context";
import { getCurrentQuiz } from "../../utils/getCurrentQuiz";
import {
  SET_CURRENT_QUIZ,
  SET_CURRENT_QUIZ_ID,
  GO_TO_PREVIOUS_PAGE,
  GO_TO_NEXT_PAGE,
  OPTION_SELECTED,
} from "../../utils/constants";
import { Navigation, QuizCard } from "../../components";
import "./main-quiz.css";

const MainQuiz = (): JSX.Element => {
  const { quizId } = useParams();
  const {
    state: {
      quizData,
      currentQuiz,
      currentQuizId,
      onGoingQuizDetails: { currentQNo, optionsSelected },
    },
    dispatch,
  } = useQuiz();

  // setting the current quiz based on the currentQuizID selected
  useEffect(() => {
    if (currentQuizId === "") {
      dispatch({ type: SET_CURRENT_QUIZ_ID, payload: quizId });
    }

    const result = getCurrentQuiz(currentQuizId, quizData);
    dispatch({ type: SET_CURRENT_QUIZ, payload: result });

    // eslint-disable-next-line
  }, [currentQuizId, quizData]);

  // Next Page navigation
  const goToNextPage = () => {
    if (
      JSON.stringify(currentQuiz) !== JSON.stringify({}) &&
      currentQNo + 1 !== currentQuiz?.numberOfQuestions
    ) {
      dispatch({ type: GO_TO_NEXT_PAGE });
    }
  };

  // Previous Page navigation
  const goToPrevPage = () => {
    if (
      JSON.stringify(currentQuiz) !== JSON.stringify({}) &&
      currentQNo !== 0
    ) {
      dispatch({ type: GO_TO_PREVIOUS_PAGE });
    }
  };

  // Funtion to set the selected option
  const optionSelector = (optionSelected: string, questionNo: number) => {
    dispatch({
      type: OPTION_SELECTED,
      payload: { value: optionSelected, questionNo },
    });
  };

  return (
    <div className="quiz__container">
      <Navigation />

      {JSON.stringify(currentQuiz) !== JSON.stringify({}) && (
        <div className="quiz__content flex-row">
          <QuizCard
            quiz={currentQuiz}
            questionNo={currentQNo}
            nextPage={goToNextPage}
            prevPage={goToPrevPage}
            optionList={optionsSelected}
            selectOption={optionSelector}
            dispatch={dispatch}
          />
        </div>
      )}
    </div>
  );
};

export { MainQuiz };
