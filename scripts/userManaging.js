let minID = 1;
let userList = new Array("Name");

function addPlayer() {
  let element = document.getElementById("nameOfNewPlayer");
  let nickname = element.value;
  if (nickname == "") {
    window.alert("Enter a nickname");
  } else if (userList.includes(nickname)) {
    window.alert("Nickname already in use");
  } else {
    element.value = "";
    userList.push(nickname);
    createElements(nickname);
  }
}

function deletePlayer() {
  element = document.getElementById("deletePlayer");
  let nickname = element.value;
  if (nickname == "") {
    window.alert("Enter a nickname");
  } else if (!userList.includes(nickname)) {
    window.alert("No player with that Nickname");
  } else {
    element.value = "";
    index = userList.indexOf(nickname);
    userList.splice(index, 1);
    deleteElements(nickname);
  }
}
function deleteElements(nickname) {
  document.getElementById("name_" + nickname).parentNode.remove();
  document.getElementById("add4_" + nickname).parentNode.remove();
  document.getElementById("add1_" + nickname).parentNode.remove();
  document.getElementById("points_" + nickname).parentNode.remove();
  document.getElementById("sub4_" + nickname).parentNode.remove();
  document.getElementById("sub1_" + nickname).parentNode.remove();
  document.getElementById("wrong_" + nickname).parentNode.remove();
}

function createElements(nickname) {
  minID++;

  child = document.createElement("th");
  child.setAttribute("scope", "col");
  newElement = document.getElementById("name_1").cloneNode(true);
  newElement.id = "name_" + nickname;
  newElement.innerText = nickname;
  child.appendChild(newElement);
  document.getElementById("nameField").appendChild(child);

  child = document.createElement("td");
  newElement = document.getElementById("add4_1").cloneNode(true);
  newElement.id = "add4_" + nickname;
  child.appendChild(newElement);
  document.getElementById("add4PointsField").appendChild(child);

  child = document.createElement("td");
  newElement = document.getElementById("add1_1").cloneNode(true);
  newElement.id = "add1_" + nickname;
  child.appendChild(newElement);
  document.getElementById("add1PointsField").appendChild(child);

  child = document.createElement("td");
  newElement = document.getElementById("points_1").cloneNode(true);
  newElement.id = "points_" + nickname;
  child.appendChild(newElement);
  document.getElementById("pointsField").appendChild(child);

  child = document.createElement("td");
  newElement = document.getElementById("sub4_1").cloneNode(true);
  newElement.id = "sub4_" + nickname;
  child.appendChild(newElement);
  document.getElementById("sub4PointsField").appendChild(child);

  child = document.createElement("td");
  newElement = document.getElementById("sub1_1").cloneNode(true);
  newElement.id = "sub1_" + nickname;
  child.appendChild(newElement);
  document.getElementById("sub1PointsField").appendChild(child);

  child = document.createElement("td");
  newElement = document.getElementById("wrong_1").cloneNode(true);
  newElement.id = "wrong_" + nickname;
  child.appendChild(newElement);
  document.getElementById("wrongAnswerField").appendChild(child);
}
