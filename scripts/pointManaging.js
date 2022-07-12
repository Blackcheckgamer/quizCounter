function add4Points(id) {
  let cleanID = id.replace("add4_", "");
  let element = document.getElementById("points_" + cleanID);
  let currentPoints = parseInt(element.innerText.replace(" Points", ""));
  let newPoints = currentPoints + 4;
  element.innerText = newPoints + " Points";
}

function wrongAnswer(id) {
  let cleanID = id.replace("wrong_", "");
  let elements = Array.from(
    document.getElementsByClassName("pointsFieldInner")
  );
  elements.forEach((element) => {
    if (element.id.replace("points_", "") == cleanID) {
    } else {
      let currentPoints = parseInt(element.innerText.replace(" Points", ""));
      let newPoints = currentPoints + 1;
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
    newPoints = currentPoints - 4;
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
