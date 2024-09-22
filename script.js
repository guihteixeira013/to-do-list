const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput"); // Take the Input

// Clicking on the "add"
addBtn.addEventListener("click", (event) => {
    const taskText = taskInput.value.trim(); // Take the task text and remove the extra spaces

    if (taskText !== "") {
        // Adding a new list element
        let newLi = document.createElement("li"); 
        let newContent = document.createTextNode(taskText);
        newLi.appendChild(newContent);
        taskList.appendChild(newLi)
    } else {
        alert("Please enter a task before adding.") // Alert if input is empty
    }
});