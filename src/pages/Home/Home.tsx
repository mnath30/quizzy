import { Card, Navigation, Loader, Filter } from "../../components";
import { useQuiz } from "../../context";
import { QuizType } from "../../context";
import { FILTER_CATEGORY, SET_CURRENT_QUIZ_ID } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { getFilteredData } from "../../utils/getFilteredData";

const Home = (): JSX.Element => {
  const {
    state: { quizData, quizLoading, filter },
    dispatch,
  } = useQuiz();
  const navigate = useNavigate();

  // Setting the filter state
  const setFilter = (filterValue: string) => {
    dispatch({ type: FILTER_CATEGORY, payload: filterValue });
  };

  // Filtering the data as per the filter set
  const filteredData = getFilteredData(filter, quizData);

  // Selecting quiz
  const selectQuiz = (quizId: string) => {
    dispatch({ type: SET_CURRENT_QUIZ_ID, payload: quizId });
    navigate("/rules");
  };

  return (
    <div className="category__container">
      <Navigation />

      <div className="category__container--main flex-col">
        {quizLoading && filteredData.length === 0 && (
          <div className="category__container--loader">
            <Loader />
          </div>
        )}

        {!quizLoading && quizData.length !== 0 && (
          <Filter filterFunc={setFilter} />
        )}

        <div className="flex-row category__container--card">
          {!quizLoading &&
            filteredData.length !== 0 &&
            filteredData.map((quiz: QuizType) => (
              <Card key={quiz.id} quizItem={quiz} quizSelector={selectQuiz} />
            ))}
        </div>
      </div>
    </div>
  );
};

export { Home };
