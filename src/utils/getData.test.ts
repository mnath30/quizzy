import { getData } from "./getData";
import { quizData } from "./quizData";
import axios from "axios";

jest.mock("axios");

describe("Fetching quiz data", () => {
  test("Should return when API call is successful", async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data: quizData,
    });
    const response = await getData("/api/quiz");
    expect(response).toEqual(quizData);
  });
});
