// task-input.js

class TaskInput {

  constructor () {
    // outer div
    this.element = document.createElement("div");
    this.element.id = "task-input-section";
    // label
    this.label = document.createElement("label");
    this.label.htmlFor = "task-input";
    this.label.classList.add("shared__title", "task-input__label");
    this.label.innerText = "Add Item";
    this.element.appendChild(this.label);
    // inner div
    this.innerDiv = document.createElement("div");
    this.innerDiv.classList.add("task-input__row");
    this.element.appendChild(this.innerDiv);
    // input
    this.input = document.createElement("input");
    this.input.id = "task-input";
    this.input.classList.add("shared__label-input",
                             "shared__field",
                             "task-input__input");
    this.input.type = "text";
    this.innerDiv.appendChild(this.input);
    // button
    this.button = document.createElement("button");
    this.button.classList.add("shared__btn");
    this.button.innerText = "Add";
    this.innerDiv.appendChild(this.button);
  }

  getElement() {
      return this.element;
    }
}

export { TaskInput };
