import { initialStateType } from "../context/quizContext.type";
import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  FILTER_CATEGORY,
  SET_CURRENT_QUIZ_ID,
} from "../utils/constants";

const quizReducer = (state: initialStateType, action: any) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, quizLoading: true, quizError: "" };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        quizLoading: false,
        quizError: "",
        quizData: action.payload,
      };
    case FETCH_DATA_ERROR:
      return { ...state, quizLoading: false, quizError: action.payload };
    case FILTER_CATEGORY:
      return { ...state, filter: action.payload };
    case SET_CURRENT_QUIZ_ID:
      return { ...state, currentQuizId: action.payload };
    default:
      return state;
  }
};

export { quizReducer };
