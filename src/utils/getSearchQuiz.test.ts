import { getSearchQuiz } from "./getSearchQuiz";
import { quizData } from "./quizData";

describe("search quiz using title", () => {
  test("returns filtered quiz data by title depending on the text entered by user in the search bar", () => {
    const resultData = [quizData[1]];
    const searchResult = getSearchQuiz(quizData, "suIt");

    expect(searchResult).toEqual(resultData);
  });
});
