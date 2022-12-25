import { selectedOption } from "./selectedOption";

describe("check if option is selected by user", () => {
  test("return true if the option is selected or not", () => {
    const initalData = ["Bercel", "Tersel", "Mercel", "Fercel"];

    expect(selectedOption("Mercel", initalData, 2)).toBe(true);

    expect(selectedOption("Ross", initalData, 1)).toBe(false);
  });
});
