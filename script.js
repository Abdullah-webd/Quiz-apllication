const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris"],
    correct: 2
  },
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5"],
    correct: 1
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Jupiter", "Mars"],
    correct: 1
  },
  {
    question: "Who wrote 'Hamlet'?",
    answers: ["Charles Dickens", "William Shakespeare", "Mark Twain"],
    correct: 1
  },
  {
    question: "What is the smallest prime number?",
    answers: ["1", "2", "3"],
    correct: 1
  },
  {
    question: "What is the chemical symbol for water?",
    answers: ["H2O", "CO2", "O2"],
    correct: 0
  },
  {
    question: "How many continents are there on Earth?",
    answers: ["5", "6", "7"],
    correct: 2
  },
  {
    question: "What is the fastest land animal?",
    answers: ["Cheetah", "Lion", "Horse"],
    correct: 0
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"],
    correct: 1
  },
  {
    question: "What is the square root of 64?",
    answers: ["6", "8", "10"],
    correct: 1
  },
  {
    question: "What is the capital of Japan?",
    answers: ["Seoul", "Beijing", "Tokyo"],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Mars", "Venus", "Saturn"],
    correct: 0
  },
  {
    question: "What is the boiling point of water in Celsius?",
    answers: ["100", "90", "80"],
    correct: 0
  },
  {
    question: "Who discovered gravity?",
    answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei"],
    correct: 1
  },
  {
    question: "What is the longest river in the world?",
    answers: ["Amazon", "Nile", "Yangtze"],
    correct: 1
  },
  {
    question: "What is the main ingredient in sushi?",
    answers: ["Rice", "Noodles", "Bread"],
    correct: 0
  },
  {
    question: "What is the capital of Australia?",
    answers: ["Sydney", "Melbourne", "Canberra"],
    correct: 2
  },
  {
    question: "What is the smallest unit of life?",
    answers: ["Cell", "Atom", "Organ"],
    correct: 0
  },
  {
    question: "What is the freezing point of water in Celsius?",
    answers: ["0", "-5", "10"],
    correct: 0
  },
  {
    question: "What is the primary gas found in Earth's atmosphere?",
    answers: ["Oxygen", "Nitrogen", "Carbon Dioxide"],
    correct: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionTab = document.querySelector(".questab");
const answerButtons = document.querySelectorAll("button.answer1, button.answer2, button.answer3");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
const restartButton = document.querySelector(".restart");
const scoreDisplay = document.querySelector(".score");
const endMessage = document.querySelector(".end-message");

// Function to display the current question and answers
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionTab.textContent = currentQuestion.question;

  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = currentQuestion.answers[i];
    answerButtons[i].disabled = false;
    answerButtons[i].classList.remove("correct", "incorrect");
  }

  endMessage.textContent = "";
}

// Function to handle answer selection
for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (i === currentQuestion.correct) {
      answerButtons[i].classList.add("correct");
      score++;
    } else {
      answerButtons[i].classList.add("incorrect");
      answerButtons[currentQuestion.correct].classList.add("correct");
    }

    // Disable all answer buttons after selection
    for (let j = 0; j < answerButtons.length; j++) {
      answerButtons[j].disabled = true;
    }
  });
}

// Function to move to the next question
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    endMessage.textContent = "You've reached the end of the quiz!";
    scoreDisplay.textContent = `Final Score: ${score}`;
  }
});

// Function to move to the previous question
previousButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
});

// Function to restart the quiz
restartButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  scoreDisplay.textContent = "";
  displayQuestion();
});

// Initialize the quiz
displayQuestion();
