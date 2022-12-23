import { QuizType } from "../context";

const getCurrentQuiz = (quizId: any, quizData: QuizType[]) => {
  const result = quizData.filter((item) => String(item.id) === String(quizId));
  return result[0];
};

export { getCurrentQuiz };
