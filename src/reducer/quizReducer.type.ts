import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FILTER_CATEGORY,
  SET_CURRENT_QUIZ_ID,
  SET_CURRENT_QUIZ,
  GO_TO_PREVIOUS_PAGE,
  GO_TO_NEXT_PAGE,
  OPTION_SELECTED,
  CALCULATE_SCORE,
  RESET_QUIZ,
} from "../utils/constants";
import { QuizType } from "../context/quizContext.type";

export type quizReducerType =
  | {
      type: typeof FETCH_DATA;
    }
  | {
      type: typeof FETCH_DATA_SUCCESS;
      payload: QuizType[];
    }
  | {
      type: typeof FETCH_DATA_ERROR;
      payload: string;
    }
  | {
      type: typeof FILTER_CATEGORY;
      payload: string;
    }
  | {
      type: typeof SET_CURRENT_QUIZ_ID;
      payload: string;
    }
  | {
      type: typeof SET_CURRENT_QUIZ;
      payload: QuizType;
    }
  | {
      type: typeof GO_TO_PREVIOUS_PAGE;
    }
  | { type: typeof GO_TO_NEXT_PAGE }
  | {
      type: typeof OPTION_SELECTED;
      payload: { value: string; questionNo: number };
    }
  | {
      type: typeof CALCULATE_SCORE;
      payload: number;
    }
  | {
      type: typeof RESET_QUIZ;
    };
