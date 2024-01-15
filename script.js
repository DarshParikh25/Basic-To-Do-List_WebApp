document.addEventListener("DOMContentLoaded", function () {
    // Check for saved tasks in localStorage
    if (localStorage.getItem("tasks")) {
        document.getElementById("taskList").innerHTML = localStorage.getItem("tasks");
    }
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = taskInput.value + '<button onclick="editTask(this)" class="edit">Edit</button><button onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(li);

    // Save tasks to localStorage
    localStorage.setItem("tasks", taskList.innerHTML);

    taskInput.value = "";
}

function deleteTask(element) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(element.parentNode);

    // Save tasks to localStorage
    localStorage.setItem("tasks", taskList.innerHTML);
}

function editTask(element) {
    var taskList = document.getElementById("taskList");
    var li = element.parentNode;
    var editButton = li.querySelector(".edit");

    if (editButton.innerHTML === "Edit") {
        var taskText = li.firstChild.nodeValue;
        var newText = prompt("Edit task:", taskText.trim());

        if (newText !== null) {
            li.firstChild.nodeValue = newText;
            editButton.innerHTML = "Save";

            // Save tasks to localStorage
            localStorage.setItem("tasks", taskList.innerHTML);
        }
    } else {
        editButton.innerHTML = "Edit";

        // Save tasks to localStorage
        localStorage.setItem("tasks", taskList.innerHTML);
    }
}
