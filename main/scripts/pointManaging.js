let pointsForWrongAnswer = 4;
let pointsForCorrectAnswer = 5;

function setPoints() {
  setPointsForWrongAnswer();
  setPointsForCorrectAnswer();
  console.log(pointsForWrongAnswer, pointsForCorrectAnswer);
}

function setPointsForWrongAnswer() {
  data = document.getElementById("numberForWrongAnswer").value;
  if (isInputValidNumber(data)) {
    pointsForWrongAnswer = parseInt(data);
    setPointTextsWrongButtons();
  }
}
function setPointTextsCorrectButtons() {
  let elements = Array.from(document.getElementsByClassName("add4Button"));
  elements.forEach((element) => {
    if (pointsForCorrectAnswer > 1) {
      element.innerText = "Add " + pointsForCorrectAnswer + " Points";
    } else {
      element.innerText = "Add " + pointsForCorrectAnswer + " Point";
    }
  });
}

function setPointTextsWrongButtons() {
  let elements = Array.from(document.getElementsByClassName("sub4Button"));
  elements.forEach((element) => {
    if (pointsForWrongAnswer > 1) {
      element.innerText = "Subtract " + pointsForWrongAnswer + " Points";
    } else {
      element.innerText = "Subtract " + pointsForWrongAnswer + " Point";
    }
  });
}

function setPointsForCorrectAnswer() {
  data = document.getElementById("numberForCorrectAnswer").value;
  if (isInputValidNumber(data)) {
    pointsForCorrectAnswer = parseInt(data);
    setPointTextsCorrectButtons();
  }
}

function isInputValidNumber(input) {
  let re = /^[1-9][0-9]{0,2}$/;
  if (input.match(re) == null) {
    window.alert("Not a valid Input (Must be an Integer > 0 and <= 999)");
    return false;
  }
  return true;
}

function add4Points(id) {
  let cleanID = id.replace("add4_", "");
  let element = document.getElementById("points_" + cleanID);
  let currentPoints = parseInt(element.innerText.replace(" Points", ""));
  let newPoints = currentPoints + pointsForCorrectAnswer;
  element.innerText = newPoints + " Points";
}

function wrongAnswer(id) {
  let cleanID = id.replace("wrong_", "");
  let elements = Array.from(
    document.getElementsByClassName("pointsFieldInner")
  );
  elements.forEach((element) => {
    let idOfelement = element.id.replace("points_", "");
    if (idOfelement !== cleanID && idOfelement !== "1") {
      let currentPoints = parseInt(element.innerText.replace(" Points", ""));
      let newPoints = currentPoints + pointsForWrongAnswer;
      element.innerText = newPoints + " Points";
    }
  });
}

function add1Point(id) {
  let cleanID = id.replace("add1_", "");
  let element = document.getElementById("points_" + cleanID);
  let currentPoints = parseInt(element.innerText.replace(" Points", ""));
  let newPoints = currentPoints + 1;
  element.innerText = newPoints + " Points";
}

function sub4Points(id) {
  let cleanID = id.replace("sub4_", "");
  let element = document.getElementById("points_" + cleanID);
  let currentPoints = parseInt(element.innerText.replace(" Points", ""));
  let newPoints;
  if (currentPoints > 3) {
    newPoints = currentPoints - pointsForCorrectAnswer;
  } else {
    newPoints = 0;
  }

  element.innerText = newPoints + " Points";
}

function sub1Point(id) {
  let cleanID = id.replace("sub1_", "");
  let element = document.getElementById("points_" + cleanID);
  let currentPoints = parseInt(element.innerText.replace(" Points", ""));

  let newPoints;
  if (currentPoints > 0) {
    newPoints = currentPoints - 1;
  } else {
    newPoints = 0;
  }
  element.innerText = newPoints + " Points";
}
