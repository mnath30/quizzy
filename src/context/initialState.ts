import { initialStateType } from "./quizContext.type";

export const initialState: initialStateType = {
  QuizData: [],
  quizLoading: false,
  quizError: "",
  currentQuiz: [],
  latestScore: 0,
};
