const calculateScore = (selectedOptionArray: string[], quiz: any) => {
  let finalScore = 0;
  quiz.forEach((question: any, index: number) => {
    for (let option of question.options) {
      if (option.value === selectedOptionArray[index]) {
        if (option.isCorrect) {
          finalScore += 1;
        }
        return true;
      }
    }
  });
  return finalScore;
};

export { calculateScore };
