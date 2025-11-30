// task-list.js

import { Task } from "../task/task.js"

class TaskList {

  constructor(id) {
    this.element = document.createElement("ul");
    this.element.id = id;
  }

  getElement() {
      return this.element;
    }

  addTask(text, is_edit, is_completed) {
    const newTask = new Task();
    newTask.setText(text);
    if (is_edit) { newTask.setIsEditing() };
    if (is_completed) { newTask.setIsCompleted() };
    this.element.appendChild(newTask.getElement());
  }
}

export { TaskList };
