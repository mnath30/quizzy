import React from "react";

export type Option = {
  value: any;
  isCorrect: true | false;
};

export type Question = {
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
  quizData: QuizType[];
  quizLoading: true | false;
  quizError?: string;
  currentQuiz: any;
  latestScore: number;
  filter: string;
  currentQuizId: string;
};

export type QuizContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
};
