import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FILTER_CATEGORY,
  SET_CURRENT_QUIZ_ID,
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
    };
