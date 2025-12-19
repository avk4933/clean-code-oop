// app.js
import { Header } from "../header/header.js"
import { TaskInput } from "../task-input/task-input.js"
import { TaskList } from "../task-list/task-list.js"

class App {
  constructor() {
    // header
    this.header = new Header();
    document.body.appendChild(this.header.getElement());
    // to-do-container
    this.container = document.createElement("div");
    this.container.classList.add("app__todo-container");
    document.body.appendChild(this.container);
    // task-input
    this.taskInput = new TaskInput(this.onAdd);
    this.container.appendChild(this.taskInput.getElement());
    // title To Do
    this.titleToDo = document.createElement("h3");
    this.titleToDo.classList.add("shared__title");
    this.titleToDo.innerText = "Todo";
    this.container.appendChild(this.titleToDo);
    // task list uncompleted
    this.incompleteList = new TaskList("tasks-incomplete",
                                        this.onMoveTask,
                                        this.onDeleteTask);
    this.container.appendChild(this.incompleteList.getElement());
    this.incompleteList.addTask("Pay Bills", false, false);
    this.incompleteList.addTask("Go Shopping", true, false);
    // title Completed
    this.titleDone = document.createElement("h3");
    this.titleDone.classList.add("shared__title");
    this.titleDone.innerText = "Completed";
    this.container.appendChild(this.titleDone);
    // task list completed
    this.completedList = new TaskList("tasks-completed",
                                       this.onMoveTask,
                                       this.onDeleteTask);
    this.container.appendChild(this.completedList.getElement());
    this.completedList.addTask("See the Doctor", false, true);
  }

  // callbacks
  onAdd = (text) => {
    this.incompleteList.addTask(text, false, false);
  }

  onMoveTask = (task) => {
    if (task.isCompleted)
      this.completedList.getElement().appendChild(task.getElement());
    else
      this.incompleteList.getElement().appendChild(task.getElement());
  }

  onDeleteTask = (task) => {
    if (task.isCompleted)
      this.completedList.removeTask(task);
    else
      this.incompleteList.removeTask(task);
  }
}

new App();



