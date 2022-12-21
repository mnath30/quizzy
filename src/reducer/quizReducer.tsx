import { initialStateType } from "../context/quizContext.type";
import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
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
        QuizData: action.payload,
      };
    case FETCH_DATA_ERROR:
      return { ...state, quizLoading: false, quizError: action.payload };
    default:
      return state;
  }
};

export { quizReducer };
