import { initialStateType } from "./quizContext.type";

export const initialState: initialStateType = {
  quizData: [],
  quizLoading: false,
  quizError: "",
  currentQuiz: [],
  latestScore: 0,
  filter: "All",
  currentQuizId: "",
};
