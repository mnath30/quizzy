import { initialStateType } from "../context/quizContext.type";
import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  FILTER_CATEGORY,
  SET_CURRENT_QUIZ_ID,
  SET_CURRENT_QUIZ,
  GO_TO_PREVIOUS_PAGE,
  GO_TO_NEXT_PAGE,
  OPTION_SELECTED,
  CALCULATE_SCORE,
  RESET_QUIZ,
  QUIT_QUIZ,
  SET_SEARCH_TEXT,
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
    case SET_CURRENT_QUIZ:
      return { ...state, currentQuiz: action.payload };
    case GO_TO_PREVIOUS_PAGE:
      return {
        ...state,
        onGoingQuizDetails: {
          ...state.onGoingQuizDetails,
          currentQNo: state.onGoingQuizDetails.currentQNo - 1,
        },
      };
    case GO_TO_NEXT_PAGE:
      return {
        ...state,
        onGoingQuizDetails: {
          ...state.onGoingQuizDetails,
          currentQNo: state.onGoingQuizDetails.currentQNo + 1,
        },
      };
    case OPTION_SELECTED:
      const selectedOptionList = [...state.onGoingQuizDetails.optionsSelected];
      selectedOptionList[action.payload.questionNo] = action.payload.value;
      return {
        ...state,
        onGoingQuizDetails: {
          ...state.onGoingQuizDetails,
          optionsSelected: [...selectedOptionList],
        },
      };
    case CALCULATE_SCORE:
      localStorage.setItem("LatestScore", action.payload);
      return { ...state, latestScore: action.payload };
    case RESET_QUIZ:
      return {
        ...state,
        onGoingQuizDetails: {
          ...state.onGoingQuizDetails,
          currentQNo: 0,
          optionsSelected: [],
        },
      };
    case QUIT_QUIZ:
      return {
        ...state,
        currentQuizId: "",
        currentQuiz: {},
        onGoingQuizDetails: {
          ...state.onGoingQuizDetails,
          currentQNo: 0,
          optionsSelected: [],
        },
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};

export { quizReducer };
