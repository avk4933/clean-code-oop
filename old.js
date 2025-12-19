const taskInput = document.getElementById("task-input");
const addButton = document.getElementsByTagName("button")[0];
const incompleteTaskHolder = document.getElementById("tasks-incomplete");
const completedTasksHolder = document.getElementById("tasks-completed");

const createNewTaskElement=function(taskString) {
  // get elements
  const listItem = document.createElement("li");
  const checkBox = document.createElement("input");
  const label = document.createElement("label");
  const editInput = document.createElement("input");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const deleteButtonImg = document.createElement("img");
  // make changes
  listItem.className = "list-item";
  label.innerText = taskString;
  label.className = 'task-item task-label';
  checkBox.type = "checkbox";
  checkBox.className = "checkbox";
  editInput.type = "text";
  editInput.className = "task-item task-field task-edit-field input-text task-input-field";
  editButton.innerText = "Edit";
  editButton.className = "task-btn task-edit-btn";
  deleteButton.className = "task-btn task-delete-btn";
  deleteButtonImg.src = './remove.svg';
  deleteButtonImg.className = "image";
  deleteButton.appendChild(deleteButtonImg);
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}

const addTask = function(){
  if (!taskInput.value) return;
  // get elements
  const listItem = createNewTaskElement(taskInput.value);
  // make changes
  incompleteTaskHolder.appendChild(listItem);
  taskInput.value = "";
  // add listeners
  bindTaskEvents(listItem, taskCompleted);
}

const editTask=function(){
  // get elements
  const listItem = this.parentNode;
  const editInput = listItem.querySelector('input[type=text]');
  const label = listItem.querySelector("label");
  const editBtn = listItem.querySelector(".task-edit-btn");
  const containsClass = listItem.classList.contains("task-editing");
  // make changes
  if (containsClass) {
    label.innerText = editInput.value;
    editBtn.innerText = "Edit";
  } else{
    editInput.value = label.innerText;
    editBtn.innerText = "Save";
  }
  listItem.classList.toggle("task-editing");
};

const deleteTask = function() {
  // get elements
  const listItem = this.parentNode;
  const ul = listItem.parentNode;
  // make changes
  ul.removeChild(listItem);
}

const taskCompleted = function() {
  // get elements
  const listItem = this.parentNode;
  const label = listItem.querySelector("label");
  // make changes
  label.classList.add("tasks-completed-label");
  completedTasksHolder.appendChild(listItem);
  // add listeners
  bindTaskEvents(listItem, taskIncomplete);
}

const taskIncomplete = function() {
  // get elements
  const listItem = this.parentNode;
  const label = listItem.querySelector("label");
  // make changes
  label.classList.remove("tasks-completed-label");
  incompleteTaskHolder.appendChild(listItem);
  // add listeners
  bindTaskEvents(listItem,taskCompleted);
}

const bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  // get elements
  const checkBox = taskListItem.querySelector("input[type=checkbox]");
  const editButton = taskListItem.querySelector("button.task-edit-btn");
  const deleteButton = taskListItem.querySelector("button.task-delete-btn");
  // add listeners
  editButton.addEventListener("click", editTask)
  deleteButton.addEventListener("click", deleteTask)
  checkBox.addEventListener("change", checkBoxEventHandler);
}

//The glue to hold it all together.
//Set the click handler to the addTask function.
addButton.addEventListener("click",addTask);

for (let i = 0; i < incompleteTaskHolder.children.length; i++ ) {
  bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}
for (let i = 0; i < completedTasksHolder.children.length; i++) {
  bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}