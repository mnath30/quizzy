import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA,
  FETCH_DATA_ERROR,
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
    };
