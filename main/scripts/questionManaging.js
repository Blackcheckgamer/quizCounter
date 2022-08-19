const fileInput = document.getElementById("inputJSON");
const questionField = document.getElementById("questionField");
let numberOfQuestions = 0;
let currentQuestion = 0;
let parsedQuestions;

fileInput.onchange = () => {
  let selectedFile = fileInput.files[0];

  console.log(selectedFile);
  var filereader = new FileReader();
  filereader.onload = function (e) {
    var content = e.target.result;
    parsedQuestions = JSON.parse(content);
    initializeQuestionField();
  };
  filereader.readAsText(selectedFile);
};

function initializeQuestionField() {
  numberOfQuestions = parsedQuestions.questions.length - 1;
  currentQuestion = 0;
  updateQuestion();
  document.getElementById("questionContainer").id = "";
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    updateQuestion();
  }
}
function nextQuestion() {
  if (currentQuestion < numberOfQuestions) {
    currentQuestion++;
    updateQuestion();
  }
}

function updateQuestion() {
  questionField.innerText = parsedQuestions.questions[currentQuestion];
}
