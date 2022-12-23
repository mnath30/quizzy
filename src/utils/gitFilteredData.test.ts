import { quizData } from "./quizData";
import { getFilteredData } from "./getFilteredData";

describe("Filtering the data", () => {
  test("should filter the data according to the filter value", () => {
    const finalData = [
      {
        id: "fe5dMEP_Sui",
        title: "Suits",
        description: "Do you think you know all about Suits? Let's check",
        category: "Books",
        numberOfQuestions: 2,
        imgUrl:
          "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1671537717/Suits_bx75so.jpg",
        questionList: [
          {
            question: "The firm hires law graduates from ________?",
            options: [
              { value: "Yale", isCorrect: false },
              { value: "Harvard", isCorrect: true },
              { value: "Columbia", isCorrect: false },
              { value: "Stanford", isCorrect: false },
            ],
          },
          {
            question: "Harvey's unusual middle name is _______?",
            options: [
              { value: "Eugene", isCorrect: false },
              { value: "Martha", isCorrect: false },
              { value: "Reginald", isCorrect: true },
              { value: "Sidwell", isCorrect: false },
            ],
          },
        ],
      },
    ];

    // test to check if the data is getting filtered when the filter value is Books
    const filteredData = getFilteredData("Books", quizData);
    expect(filteredData).toEqual(finalData);
  });

  // test to check if the data is returned when the filter value is All
  test("should return all the data when the filter value is All", () => {
    const filteredData = getFilteredData("All", quizData);
    expect(filteredData).toEqual(quizData);
  });
});
