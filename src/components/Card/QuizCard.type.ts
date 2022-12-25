import { QuizType } from "../../context";
import { Option } from "../../context";

export type QuizCardProps = {
  quiz: QuizType;
  questionNo: number;
  nextPage: any;
  prevPage: any;
  optionList: string[];
  selectOption: any;
  dispatch: any;
};

export type OptionProps = {
  option: Option;
  isOptionSelected: any;
  questionNo: number;
  funcSelectOption?: any;
  optionList: string[];
  displayingResult?: false | true;
};
