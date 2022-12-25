import { calculateScore } from "./calculateScore";
import { quizData } from "./quizData";

describe("calculate score", () => {
  test("calculate the total score depending on the options selected by the user", () => {
    const quiz = quizData[0].questionList;
    const selectedOptionArray = ["Mercel", "Chef"];

    const finalCalculatedResult = calculateScore(selectedOptionArray, quiz);
    expect(finalCalculatedResult).toBe(2);

    const selectedOptionArray2 = ["Mercel", "Executive"];
    const finalCalculatedResult2 = calculateScore(selectedOptionArray2, quiz);
    expect(finalCalculatedResult2).toBe(1);
  });
});
