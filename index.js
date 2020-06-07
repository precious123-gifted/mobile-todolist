function addItem() {
  inputToDo = document.getElementById("inputtodo");

  if (inputToDo.value) {
    container = document.getElementById("container");
    item = document.createElement("div");

    item.classList.add("item");

    checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.classList.add("check");
    checkBox.addEventListener("click", function (e) {
      if (e.target.classList == "check") {
        if (e.target.checked) {
          e.target.nextElementSibling.classList = "checked";
        } else {
          e.target.nextElementSibling.classList = "inputdo";
        }
      }
    });

    input = document.createElement("input");

    input.classList.add("inputdo");
    input.value = inputToDo.value;
    input.disabled = true;
    inputToDo.value = "";

    removeButton = document.createElement("button");
    removeButton.classList.add("remove");

    textRemove = document.createTextNode("REMOVE");
    removeButton.appendChild(textRemove);

    container.appendChild(item);
    item.appendChild(checkBox);
    item.appendChild(input);

    item.appendChild(removeButton);

    item.addEventListener("click", function (e) {
      if (e.target.classList == "remove") {
        e.target.parentNode.remove();
      }
    });
  }
}

window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    addItem();
  }
});

function checked() {
  if (checkBox.checked) {
    input.classList = "checked";
  } else {
    input.classList = "inputdo";
  }
}
