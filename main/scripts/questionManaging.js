const fileInput = document.getElementById("inputJSON");

fileInput.onchange = () => {
  let selectedFile = fileInput.files[0];
  console.log(selectedFile);
  console.log(URL.createObjectURL(selectedFile));

  let reader = new FileReader();
  reader.readAsText(selectedFile);
  reader.onload = function () {
    initializeQuestionField(JSON.parse(reader.result));
  };
};

function initializeQuestionField(questions) {}
