import { QuizType } from "../context";

const getSearchQuiz = (quizData: QuizType[], searchText: string) => {
  if (searchText !== "") {
    const searchedResult = quizData.filter((quiz: any) =>
      quiz.title.toLowerCase().includes(searchText.toLowerCase())
    );
    return searchedResult;
  }
  return quizData;
};

export { getSearchQuiz };
