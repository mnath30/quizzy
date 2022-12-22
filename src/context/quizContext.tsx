import { createContext, useContext, useReducer } from "react";
import { initialState } from "./initialState";
import { quizReducer } from "../reducer/quizReducer";

const QuizContext = createContext<any>(initialState);

const useQuiz = () => useContext(QuizContext);

const QuizProvider = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export { QuizProvider, useQuiz };
