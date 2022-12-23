import { getCurrentQuiz } from "./getCurrentQuiz";
import { quizData } from "./quizData";

describe("set current quiz data", () => {
  const result = {
    id: "Wo5dMEP_BbI",
    title: "Friends",
    description: "Let's see how well you know friends",
    category: "Web Series",
    numberOfQuestions: 2,
    imgUrl:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1671537717/Friends_gjfalu.webp",
    questionList: [
      {
        question: "What was the name of the monkey Ross had?",
        options: [
          { value: "Bercel", isCorrect: false },
          { value: "Mercel", isCorrect: true },
          { value: "Tersel", isCorrect: false },
          { value: "Fursel", isCorrect: false },
        ],
      },
      {
        question: "What is Monica's profession?",
        options: [
          { value: "Actor", isCorrect: false },
          { value: "Professor", isCorrect: false },
          { value: "Executive", isCorrect: false },
          { value: "Chef", isCorrect: true },
        ],
      },
    ],
  };
  test("filter from the data and set the current quiz from the quizId", () => {
    const currentQuiz = getCurrentQuiz("Wo5dMEP_BbI", quizData);
    expect(currentQuiz).toEqual(result);
  });
});
