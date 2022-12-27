import { initialStateType } from "./quizContext.type";

export const initialState: initialStateType = {
  quizData: [],
  quizLoading: false,
  quizError: "",
  latestScore: 0,
  filter: "All",
  searchText: "",
  currentQuizId: "",
  currentQuiz: {},
  onGoingQuizDetails: {
    currentQNo: 0,
    optionsSelected: [],
  },
};
