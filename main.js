let minID = 1;

function addPlayer() {
  let nickname = document.getElementById("nameOfNewPlayer").value;
  if (nickname == "") {
    window.alert("Enter a nickname");
  }
  minID++;

  parent = document.getElementById("nameField");
  child = document.createElement("th");
  child.setAttribute("scope", "col");
  newElement = document.getElementById("name_1").cloneNode(true);
  newID = "name_" + minID;
  newElement.id = newID;
  newElement.innerText = nickname;
  child.appendChild(newElement);
  parent.appendChild(child);

  parent = document.getElementById("add4PointsField");
  child = document.createElement("td");
  newElement = document.getElementById("add4_1").cloneNode(true);
  newID = "add4_" + minID;
  newElement.id = newID;
  child.appendChild(newElement);
  parent.appendChild(child);

  parent = document.getElementById("add1PointsField");
  child = document.createElement("td");
  newElement = document.getElementById("add1_1").cloneNode(true);
  newID = "add1_" + minID;
  newElement.id = newID;
  child.appendChild(newElement);
  parent.appendChild(child);

  parent = document.getElementById("pointsField");
  child = document.createElement("td");
  newElement = document.getElementById("points_1").cloneNode(true);
  newID = "points_" + minID;
  newElement.id = newID;
  child.appendChild(newElement);
  parent.appendChild(child);

  parent = document.getElementById("sub4PointsField");
  child = document.createElement("td");
  newElement = document.getElementById("sub4_1").cloneNode(true);
  newID = "sub4_" + minID;
  newElement.id = newID;
  child.appendChild(newElement);
  parent.appendChild(child);

  parent = document.getElementById("sub1PointsField");
  child = document.createElement("td");
  newElement = document.getElementById("sub1_1").cloneNode(true);
  newID = "sub1_" + minID;
  newElement.id = newID;
  child.appendChild(newElement);
  parent.appendChild(child);

  parent = document.getElementById("wrongAnswerField");
  child = document.createElement("td");
  newElement = document.getElementById("wrong_1").cloneNode(true);
  newID = "wrong_" + minID;
  newElement.id = newID;
  child.appendChild(newElement);
  parent.appendChild(child);
}

function deletePlayer() {
  console.log("add Player");
}

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
      console.log("same ID");
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
  console.log(currentPoints);
  let newPoints;
  if (currentPoints > 0) {
    newPoints = currentPoints - 1;
  } else {
    newPoints = 0;
  }
  element.innerText = newPoints + " Points";
}
