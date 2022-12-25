const selectedOption = (
  value: string,
  optionList: string[],
  questionNo: number
) => {
  if (optionList.length > questionNo && optionList[questionNo] !== undefined) {
    return optionList[questionNo] === value ? true : false;
  }
  return false;
};

export { selectedOption };
