function addItem() {
  inputToDo = document.getElementById("input");

  if (inputToDo.value) {
    container = document.createElement("div");
    item = document.createElement("div");
    item.classList.add("item");

    checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkbox");

    input = document.createElement("input");

    input.classList.add("item-input");
    input.value = inputToDo.value;
    input.disabled = true;
    inputToDo.value = "";

    editButton = document.createElement("button");

    editButton.classList.add("editButton");

    textEdit = document.createTextNode("EDIT");
    editButton.appendChild(textEdit);
    editButton.addEventListener("click", () => this.editItem());
    //editButton.addEventListener("click", () => this.editItem());

    removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");

    textRemove = document.createTextNode("REMOVE");
    removeButton.appendChild(textRemove);
    removeButton.addEventListener("click", () => removeItem(item));

    container.appendChild(item);
    item.appendChild(checkBox);
    item.appendChild(input);

    item.appendChild(editButton);
    item.appendChild(removeButton);

    document.body.appendChild(container);
  }
}

function removeItem(itemName) {
  container.removeChild(item);
}

function editItem() {
  input.disabled = !true;
}
