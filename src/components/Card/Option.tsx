import { OptionProps } from "./QuizCard.type";
import "./card.css";

const Option = ({
  option,
  isOptionSelected,
  questionNo,
  funcSelectOption = null,
  optionList,
  displayingResult = false,
}: OptionProps): JSX.Element => {
  return (
    <li
      key={option?.value}
      className={`quizcard__options ${
        isOptionSelected(option?.value, optionList, questionNo)
          ? displayingResult
            ? option.isCorrect
              ? "correct"
              : "incorrect"
            : "active"
          : ""
      } ${displayingResult ? (option?.isCorrect ? "correct" : "") : "option"}`}
      onClick={() => funcSelectOption(option.value, questionNo)}
    >
      {option.value}
    </li>
  );
};

export { Option };
