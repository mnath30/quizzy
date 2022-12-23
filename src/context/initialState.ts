import { initialStateType } from "./quizContext.type";

export const initialState: initialStateType = {
  quizData: [],
  quizLoading: false,
  quizError: "",
  latestScore: 0,
  filter: "All",
  currentQuizId: "",
  currentQuiz: {},
  onGoingQuizDetails: {
    currentQNo: 0,
    optionsSelected: [],
  },
};
