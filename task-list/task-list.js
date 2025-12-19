// task-list.js

import { Task } from "../task/task.js"

class TaskList {

  constructor(id, onMoveTask, onDeleteTask) {
    this.element = document.createElement("ul");
    this.element.id = id;
    this.onMove = (task) => {
      onMoveTask(task);
    }
    this.onDelete = (task) => {
      onDeleteTask(task);
    }
  }

  getElement() {
      return this.element;
    }

  addTask(text, isEdit, isCompleted) {
    const newTask = new Task(this.onMove, this.onDelete);
    newTask.setText(text);
    if (isEdit) { newTask.setIsEditing() };
    if (isCompleted) { newTask.setIsCompleted() };
    this.element.appendChild(newTask.getElement());
  }

  removeTask(task) {
    this.element.removeChild(task.getElement());
  }
}

export { TaskList };
