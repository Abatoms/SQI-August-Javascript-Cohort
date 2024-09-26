/*
Task: To-Do List Application
Create a to-do list application where users can:
Add new tasks with a title and description.
Mark tasks as complete.
Remove tasks from the list.
Add a form with inputs for:
Task Title
Task Description
When a task is added:
It should appear in the list below the form.
Each task should have a checkbox to mark it as complete and a button to delete it.
Mark as Complete:
When the user checks the checkbox next to a task, it should visually indicate that the task is complete (e.g., strikethrough text or change of color).
Delete Functionality:
Each task should have a "Delete" button to remove it from the list.
Requirements:
Use an array to store the tasks.
Allow users to add, mark complete, and delete tasks.
Keep the UI simple and clear.
*/

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskList = document.getElementById("taskList");

const displayTodos = () => {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <input type="checkbox" class="markAsComplete"/>
    <h2>${task.title}</h2>
    <p>${task.description}</p>
    <button class="deleteBtn">Delete task</button>
  `;
    taskList.appendChild(li);
    let btn = li.querySelector(".deleteBtn");
    btn.addEventListener("click", () => deleteTodoItem(task.id));
    let checkBox = li.querySelector(".markAsComplete");
    let title = li.getElementsByTagName("h2");
    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        title[0].style.textDecoration = "line-through";
      } else {
        title[0].style.textDecoration = "none";
      }
    });
  });
};

displayTodos();

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTask = {
    id: Date.now(),
    title: taskTitle.value,
    description: taskDescription.value,
  };

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTodos();
  console.log(tasks);
});

const deleteTodoItem = (id) => {
  tasks = tasks.filter((task) => {
    return task.id !== id;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTodos(tasks);
};
