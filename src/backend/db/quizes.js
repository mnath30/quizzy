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
    id: "ha6rrygHRES_Pttr",
    title: "Harry Potter",
    description: "Are you a potter head?",
    category: "Movies",
    numberOfQuestions: 5,
    imgUrl:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1672147573/Harry_Potter_hjwdm6.jpg",
    questionList: [
      {
        question:
          "Philosopher's Stone: Who does Harry meet first out of these?",
        options: [
          { value: "Molly", isCorrect: false },
          { value: "Hagrid", isCorrect: true },
          { value: "Quirrel", isCorrect: false },
          { value: "Prof. Snape", isCorrect: false },
        ],
      },
      {
        question: "Who teaches Harry the rules of Quidditch?",
        options: [
          { value: "Fred and George Weasely", isCorrect: false },
          {
            value: "Ron Weasely",
            isCorrect: false,
          },
          { value: "Dean Thomas", isCorrect: false },
          { value: "Oliver Wood", isCorrect: true },
        ],
      },
      {
        question: "What is Hagrid's three-headed dog called?",
        options: [
          { value: "Fang", isCorrect: false },
          { value: "Fluffy", isCorrect: true },
          { value: "Floppy", isCorrect: false },
          { value: "Nobert", isCorrect: false },
        ],
      },
      {
        question: "What spell does Hermione first cast in the movie?",
        options: [
          { value: "Alohomora", isCorrect: false },
          { value: "Lumos", isCorrect: false },
          { value: "Oculus Reparo ", isCorrect: true },
          { value: "Wingardium Leviosa", isCorrect: false },
        ],
      },
      {
        question:
          "What kind of monster is released from the Chamber of Secrets?",
        options: [
          { value: "Voldemort", isCorrect: false },
          { value: "Basilisk", isCorrect: true },
          { value: "Acromantula", isCorrect: false },
          { value: "Boggart", isCorrect: false },
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
  {
    id: "fMonkfgsWES_eerA",
    title: "Monk who sold his ferrari",
    description: "Have you read The monk who sold his ferrari?",
    category: "Books",
    numberOfQuestions: 5,
    imgUrl:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1672148634/MonkFerrari_lgdn1t.jpg",
    questionList: [
      {
        question: "What is the surname of the main character?",
        options: [
          { value: "Mettle", isCorrect: false },
          { value: "Mattel", isCorrect: false },
          { value: "Mantle", isCorrect: true },
          { value: "Mental", isCorrect: false },
        ],
      },
      {
        question:
          "What is the profession of the main character in the beginning?",
        options: [
          { value: "Attorney", isCorrect: true },
          {
            value: "Saint",
            isCorrect: false,
          },
          { value: "Artist", isCorrect: false },
          { value: "Entrepreneur", isCorrect: false },
        ],
      },
      {
        question:
          "Everything is created twice, first in the mind and then in ______",
        options: [
          { value: "imagination", isCorrect: false },
          { value: "world", isCorrect: false },
          { value: "heart", isCorrect: false },
          { value: "reality", isCorrect: true },
        ],
      },
      {
        question: "What else did Julian sell along with his Ferrari?",
        options: [
          { value: "farm house", isCorrect: false },
          { value: "office", isCorrect: false },
          { value: "mansion", isCorrect: true },
          { value: "golf course", isCorrect: false },
        ],
      },
      {
        question:
          "Who is the author of the book 'The Monk Who Sold His Ferrari '",
        options: [
          { value: "Rabindranath Tagore", isCorrect: false },
          { value: "Robin Sharma", isCorrect: true },
          { value: "Charles Dickens", isCorrect: false },
          { value: "Stephen King", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "fe5hfgsWES_Smi",
    title: "JavaScript",
    description: "Let's check your JS knowledge",
    category: "Web Development",
    numberOfQuestions: 5,
    imgUrl:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1672143935/JavaScript_uhfwt9.png",
    questionList: [
      {
        question: "How can a datatype be declared to be a constant type?",
        options: [
          { value: "const", isCorrect: true },
          { value: "var", isCorrect: false },
          { value: "let", isCorrect: false },
          { value: "constant", isCorrect: false },
        ],
      },
      {
        question: "What is the use of the <noscript> tag in Javascript?",
        options: [
          { value: "Clears all the cookies and cache", isCorrect: false },
          {
            value: "The contents are displayed by non-JS based browsers",
            isCorrect: true,
          },
          { value: "Both of the above", isCorrect: false },
          { value: "None of the above", isCorrect: false },
        ],
      },
      {
        question:
          "What keyword is used to check whether a given property is valid or not?",
        options: [
          { value: "in", isCorrect: true },
          { value: "is in", isCorrect: false },
          { value: "exists", isCorrect: false },
          { value: "lies", isCorrect: false },
        ],
      },
      {
        question:
          "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        options: [
          { value: "Boolean", isCorrect: false },
          { value: "undefined", isCorrect: false },
          { value: "object", isCorrect: true },
          { value: "Integer", isCorrect: false },
        ],
      },
      {
        question:
          "What is the output of the following code snippet? \n print(NaN === NaN)",
        options: [
          { value: "true", isCorrect: false },
          { value: "false", isCorrect: true },
          { value: "undefined", isCorrect: false },
          { value: "error", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "Pa6kUgsRES_CiS",
    title: "CSS",
    description: "Let's check your CSS knowledge",
    category: "Web Development",
    numberOfQuestions: 5,
    imgUrl:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1672143935/CSS_syq3nl.png",
    questionList: [
      {
        question:
          'Which of the following selector selects all paragraph elements whose lang attribute has a value of exactly "fr"?',
        options: [
          { value: "p[lang]", isCorrect: false },
          { value: 'p[lang="fr"]', isCorrect: true },
          { value: 'p[lang~="fr"]', isCorrect: false },
          { value: 'p[lang|="fr"]', isCorrect: false },
        ],
      },
      {
        question:
          "Which of the following property specifies the distance between a marker and the text in the list?",
        options: [
          { value: "list-style", isCorrect: false },
          {
            value: "marker-offset",
            isCorrect: true,
          },
          { value: "list-style-image", isCorrect: false },
          { value: "list-decoration", isCorrect: false },
        ],
      },
      {
        question:
          "Which of the below is the correct syntax to put a line over text in CSS?",
        options: [
          { value: "text-decoration:line", isCorrect: false },
          { value: "text-decoration:overline", isCorrect: true },
          { value: "text-decoration:underline", isCorrect: false },
          { value: "text-decoration:none", isCorrect: false },
        ],
      },
      {
        question:
          "Which below property of CSS is used to set the indentation of the first line in a block of text ?",
        options: [
          { value: "text-indent property", isCorrect: true },
          { value: "text-underline property", isCorrect: false },
          { value: "text-decoration none ", isCorrect: false },
          { value: "text-overflow property", isCorrect: false },
        ],
      },
      {
        question:
          "Which of the below CSS properties represent the order of flex items in the grid container ?",
        options: [
          { value: "order", isCorrect: true },
          { value: "float", isCorrect: false },
          { value: "overflow", isCorrect: false },
          { value: "All of the above", isCorrect: false },
        ],
      },
    ],
  },
];
