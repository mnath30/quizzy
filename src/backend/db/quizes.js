/**
 * Quiz Database can be added here.
 * You can add quizzes of your wish with different attributes
 * */

export const quizes = [
  {
    id: "Wo5dMEP_BbI",
    title: "Friends",
    description: "Let's see how well you know friends",
    category: "Web Series",
    numberOfQuestions: 5,
    imgUrl:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1671537717/Friends_gjfalu.webp",
    questionList: [
      {
        question: "What was the name of the monkey Ross had?",
        options: [
          { value: "Bercel", isCorrect: false },
          { value: "Mercel", isCorrect: true },
          { value: "Tersel", isCorrect: false },
          { value: "Fursel", isCorrect: false },
        ],
      },
      {
        question: "What is Monica's profession?",
        options: [
          { value: "Actor", isCorrect: false },
          { value: "Professor", isCorrect: false },
          { value: "Executive", isCorrect: false },
          { value: "Chef", isCorrect: true },
        ],
      },
      {
        question: "What are Monica and Ross' parents called?",
        options: [
          { value: "Jack and judy", isCorrect: true },
          { value: "Jack and Jill", isCorrect: false },
          { value: "Peter and Margaret", isCorrect: false },
          { value: "Garry and Mary", isCorrect: false },
        ],
      },
      {
        question: "What is the name of Joey’s acting agent?",
        options: [
          { value: "Andrea", isCorrect: false },
          { value: "Estelle", isCorrect: true },
          { value: "Martha", isCorrect: false },
          { value: "Carol", isCorrect: false },
        ],
      },
      {
        question: "What's the title of the Friends theme song?",
        options: [
          { value: "I'll be there for them", isCorrect: false },
          { value: "I'll be there for those", isCorrect: false },
          { value: "I'll be there for you", isCorrect: true },
          { value: "We'll be there for you", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "fe5dMEP_Sui",
    title: "Suits",
    description: "Do you think you know all about Suits? Let's check",
    category: "Web Series",
    numberOfQuestions: 5,
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
      {
        question: "Suits is set in a fictional law firm in ________?",
        options: [
          { value: "New York City", isCorrect: true },
          { value: "Atlanta", isCorrect: false },
          { value: "Austin", isCorrect: false },
          { value: "Chicago", isCorrect: false },
        ],
      },
      {
        question: "Harvey Specter is a brilliant __________ lawyer?",
        options: [
          { value: "Criminal", isCorrect: false },
          { value: "Consumer", isCorrect: false },
          { value: "Trial", isCorrect: false },
          { value: "Corporate Litigation", isCorrect: true },
        ],
      },
      {
        question: "Whose ashes does Louis have in his office?",
        options: [
          { value: "Donna", isCorrect: false },
          { value: "Jessica", isCorrect: false },
          { value: "Norma", isCorrect: true },
          { value: "Harvey", isCorrect: false },
        ],
      },
    ],
  },
];
