import React from "react";

type Option = {
  value: any;
  isCorrect: true | false;
};

type Question = {
  question: any;
  options: Option[];
};

export type QuizType = {
  id: string;
  title: string;
  description: string;
  category: string;
  numberOfQuestions: number;
  imgUrl: string;
  questionList: Question[];
};

export type initialStateType = {
  QuizData: QuizType[];
  quizLoading: true | false;
  quizError?: string;
  currentQuiz: any;
  latestScore: number;
};

export type QuizContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
};
