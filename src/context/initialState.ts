import { initialStateType } from "./quizContext.type";

export const initialState: initialStateType = {
  quizData: [],
  quizLoading: false,
  quizError: "",
  latestScore: localStorage.getItem("LatestScore")
    ? Number(localStorage.getItem("LatestScore"))
    : 0,
  filter: "All",
  searchText: "",
  currentQuizId: "",
  currentQuiz: {},
  onGoingQuizDetails: {
    currentQNo: 0,
    optionsSelected: [],
  },
};
