"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskInputElement = document.getElementById("todoInput");
const taskAddBtnElement = document.getElementById("addBtn");
const taskListElement = document.getElementById("todoList");
let todoList = [];
function addToDo() {
    const taskText = taskInputElement.value.trim();
    if (taskText === "") {
        alert("Enter the task text");
        return;
    }
    const newToDo = {
        id: Date.now(),
        task: taskText,
        completed: false,
    };
    todoList.push(newToDo);
    taskInputElement.value = "";
    renderTasks();
}
function renderTasks() {
    taskListElement.innerHTML = "";
    todoList.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.task;
        li.addEventListener("click", () => {
            todo.completed = !todo.completed;
            li.style.textDecoration = todo.completed ? "line-through" : "none";
        });
        li.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoList = todoList.filter((t) => t.id !== todo.id);
            renderTasks();
        });
        taskListElement.appendChild(li);
    });
}
taskAddBtnElement.addEventListener("click", addToDo);
//# sourceMappingURL=todo.js.map