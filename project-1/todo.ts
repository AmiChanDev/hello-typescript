interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const taskInputElement = document.getElementById(
  "todoInput"
) as HTMLInputElement;
const taskAddBtnElement = document.getElementById(
  "addBtn"
) as HTMLButtonElement;
const taskListElement = document.getElementById("todoList") as HTMLUListElement;

let todoList: Todo[] = [];

function addToDo(): void {
  const taskText = taskInputElement.value.trim();
  if (taskText === "") {
    alert("Enter the task text");
    return;
  }

  const newToDo: Todo = {
    id: Date.now(),
    task: taskText,
    completed: false,
  };

  todoList.push(newToDo);
  taskInputElement.value = "";
  renderTasks();
}

function renderTasks(): void {
  taskListElement.innerHTML = "";
  todoList.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.task;

    li.addEventListener("click", () => {
      todo.completed = !todo.completed;
      li.style.textDecoration = todo.completed ? "line-through" : "none";
    });

    li.addEventListener("contextmenu", (e: MouseEvent) => {
      e.preventDefault();
      todoList = todoList.filter((t) => t.id !== todo.id);
      renderTasks();
    });

    taskListElement.appendChild(li);
  });
}

taskAddBtnElement.addEventListener("click", addToDo);
