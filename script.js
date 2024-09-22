const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput"); // Take the Input

// Function to add new task
function addTask() {
    const taskText = taskInput.value.trim(); // Remove spaces

    if (taskText !== "") {
        // Adding a new list element
        let newLi = document.createElement("li"); 
        let newContent = document.createTextNode(taskText);
        newLi.appendChild(newContent);
        taskList.appendChild(newLi)

        taskInput.value = ""; // Clear the input field
    } else {
        alert("Please enter a task before adding.") // Alert if input is empty
    }
}

// Clicking the "add" button
addBtn.addEventListener("click", addTask);

// Pressing the "Enter" key to add a task
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask(); // Call the addTask function on Enter 
    }
});