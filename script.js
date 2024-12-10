const questionsData = [
  {
    questions: [
      "Who is the governor of Lagos State?",
      "Who is the president of America?",
      "Who is the best footballer in the world?",
      "Who is Nelson Mandela?",
      "What is the capital of France?",
      "What is 5 + 3?",
      "Which planet is known as the Red Planet?"
    ],
    answers: [
      ["Babajide Sanwo-Olu", "Akinwunmi Ambode", "Bola Tinubu"],
      ["Joe Biden", "Donald Trump", "Barack Obama"],
      ["Lionel Messi", "Cristiano Ronaldo", "Kylian Mbappe"],
      ["A South African President", "An activist", "A freedom fighter"],
      ["Paris", "London", "Berlin"],
      ["6", "8", "10"],
      ["Mars", "Venus", "Jupiter"]
    ],
    correctAnswers: [0, 0, 0, 2, 0, 1, 0]
  }
];

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const questionElement = document.querySelector('.questab');
const answerButtons = [
  document.querySelector('.answer1'),
  document.querySelector('.answer2'),
  document.querySelector('.answer3')
];
const scoreElement = document.querySelector('.score');
const endMessageElement = document.querySelector('.end-message');

let currentQuestionIndex = 0;
let score = 0;

function updateQuestion() {
  const { questions, answers } = questionsData[0];
  questionElement.textContent = questions[currentQuestionIndex];
  answerButtons.forEach((button, index) => {
    button.textContent = answers[currentQuestionIndex][index];
    button.style.backgroundColor = "rgb(110, 108, 108)"; // Reset button color
    button.disabled = false; // Enable buttons for new question
  });
  endMessageElement.textContent = ""; // Clear end message
}

function handleAnswer(selectedIndex) {
  const correctIndex = questionsData[0].correctAnswers[currentQuestionIndex];
  if (selectedIndex === correctIndex) {
    answerButtons[selectedIndex].style.backgroundColor = "green";
    score++;
    scoreElement.textContent = `Score: ${score}`;
  } else {
    answerButtons[selectedIndex].style.backgroundColor = "red";
    answerButtons[correctIndex].style.backgroundColor = "green";
  }
  answerButtons.forEach((button) => (button.disabled = true)); // Disable buttons after answer
}

answerButtons.forEach((button, index) => {
  button.addEventListener('click', () => handleAnswer(index));
});

nextButton.addEventListener('click', function () {
  if (currentQuestionIndex < questionsData[0].questions.length - 1) {
    currentQuestionIndex++;
    updateQuestion();
  } else {
    endMessageElement.textContent = `Quiz completed! Your final score is ${score}/${questionsData[0].questions.length}`;
    nextButton.disabled = true; // Disable the next button
    prevButton.disabled = true; // Disable the previous button
  }
});

prevButton.addEventListener('click', function () {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    updateQuestion();
  }
});

restartButton.addEventListener('click', function () {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.textContent = `Score: ${score}`;
  updateQuestion();
  nextButton.disabled = false;
  prevButton.disabled = false;
});

// Initialize the first question and score
updateQuestion();
scoreElement.textContent = `Score: ${score}`;
