//task.js

class Task {

  constructor() {
    this.isEditing = false;
    this.isCompleted = false;
    // li
    this.element = document.createElement("li");
    this.element.classList.add("task__li");
    // checkbox
    this.checkbox = document.createElement("input");
    this.checkbox.type = "checkbox";
    this.checkbox.classList.add("task__checkbox");
    this.element.appendChild(this.checkbox);
    // label
    this.label = document.createElement("label");
    this.label.classList.add("shared__label-input", "task__label");
    this.label.innerText = "";
    this.element.appendChild(this.label);
    // input
    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.classList.add("shared__label-input",
                             "shared__field",
                             "task__edit-field",
                             "task__input-text");
    this.input.value = "";
    this.element.appendChild(this.input);
    // edit button
    this.editBtn = document.createElement("button");
    this.editBtn.classList.add("shared__btn", "task__edit-btn");
    this.editBtn.innerText = "Edit";
    this.element.appendChild(this.editBtn);
    // delete button
    this.deleteBtn = document.createElement("button");
    this.deleteBtn.classList.add("shared__btn", "task__delete-btn");
    this.element.appendChild(this.deleteBtn);
    // image
    this.deleteImg = document.createElement("img");
    this.deleteImg.classList.add("task__img");
    this.deleteImg.src = "../images/remove.svg";
    this.deleteImg.alt = "right arrow with cross";
    this.deleteBtn.appendChild(this.deleteImg);
  }

  setText(text) {
    this.label.innerText = text;
    this.input.value = text;
  }

  setIsEditing(value = true) {
    this.isEditing = value;
    if ( this.isEditing === true) {
      this.editBtn.innerText = "Save";
      this.element.classList.add("task__li-edit");
    } else {
      this.editBtn.innerText = "Edit";
      this.element.classList.remove("task__li-edit");
    }
  }

  setIsCompleted(value = true) {
    this.isCompleted = value;
    if (this.isCompleted === true) {
      this.label.classList.add("task__completed-label");
      this.checkbox.checked = true;
    } else {
      this.label.classList.remove("task__completed-label");
      this.checkbox.checked = false;
    }
  }

  getElement() {
    return this.element;
  }

}

export { Task };
