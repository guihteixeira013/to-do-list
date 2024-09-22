const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput"); // Take the Input

// Function to add new task
function addTask() {
    const taskText = taskInput.value.trim(); // Remove spaces
    
    if (taskText !== "") {
        // Create a new list element
        let newLi = document.createElement("li"); 

        // Create text node for the task
        let newContent = document.createTextNode(taskText);
        newLi.appendChild(newContent);
        taskList.appendChild(newLi)
        
        // Create the "Remove" button
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        newLi.appendChild(removeBtn);

        // Clicking the "Remove" button
        removeBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete this task?")) {
                newLi.remove();
            }
        })

        // Clear the input field
        taskInput.value = ""; 
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