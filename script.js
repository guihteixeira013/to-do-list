const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Clicking on the "add"
addBtn.addEventListener("click", (event) => {

    // Adding a new list element
    let newLi = document.createElement("li"); 
    let newContent = document.createTextNode("test2");
    newLi.appendChild(newContent);
    taskList.appendChild(newLi)
});

