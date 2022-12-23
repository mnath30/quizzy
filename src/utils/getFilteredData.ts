import { QuizType } from "../context";

const getFilteredData = (filterValue: string, quizData: QuizType[]) => {
  return filterValue === "All"
    ? quizData
    : quizData.filter(
        (quizItem: QuizType) => quizItem.category === filterValue
      );
};

export { getFilteredData };
