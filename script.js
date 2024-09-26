const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput"); // Take the Input

// Function to add new task
function addTask() {
    const taskText = taskInput.value.trim(); // Remove spaces
    
    if (taskText !== "") {
        // Create a new list element
        let newLi = document.createElement("li"); 

        // Create a checkbox
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        newLi.appendChild(checkBox);

        // Create a span to hold the task text
        let taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        newLi.appendChild(taskSpan);
        taskList.appendChild(newLi)
        
        // Create the "Edit" button
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        newLi.appendChild(editBtn);
        
        // Create the "Remove" button
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        newLi.appendChild(removeBtn);

        // Clicking the "Remove" button
        removeBtn.addEventListener("click", () => {
            if (confirm("Are you sure?")) {
                newLi.remove();
            }
        })

        // Clicking the "Edit" button
        editBtn.addEventListener("click", () => {
            let input = document.createElement("input");
            input.type = "text";
            input.value = taskSpan.textContent;
            newLi.replaceChild(input, taskSpan);
            
            editBtn.textContent = "Save"; // Change button "Edit" to "Save"
            removeBtn.remove(); // Delete "Remove" button

            // // Create the "Cancel" button
            // let cancelBtn = document.createElement("button");
            // cancelBtn.textContent = "Cancel";
            // newLi.appendChild(cancelBtn);

            // // Clicking "Cancel" button
            // cancelBtn.addEventListener("click", () => {
            //     newLi.replaceChild(taskSpan, input);
            //     cancelBtn.remove();
            // })
            // !!!!! I CAN'T SETUP THE "CANCEL" BUTTON !!!!!

            editBtn.addEventListener("click", () => {
                taskSpan.textContent = input.value;
                newLi.replaceChild(taskSpan, input);
                
                editBtn.textContent = "Edit"; // Revert button back
                newLi.appendChild(removeBtn); // Creating "Remove" button again
            });
        });

        // Clear the input field
        taskInput.value = ""; 

        // Clicking the "checkbox" button
        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                newLi.classList.add("taskDone"); // Apply .taskDone class
            } else {
                newLi.classList.remove("taskDone"); // Remove .taskDone class
            }
        });
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