const todoTask = document.querySelector(".todo-Task");
const todoButton = document.querySelector(".todo-Button");
const tasksList = document.querySelector(".tasksList");

todoButton.addEventListener('click', function (event) {
    event.preventDefault();
   //Create "li" with the value of the task submited
   const todoTaskDisplay = document.createElement("li");
   todoTaskDisplay.innerText = todoTask.value;
   tasksList.appendChild(todoTaskDisplay);
});


