// app.js

// Example data for tasks
let tasks = [
    { id: 1, description: "Complete assignment" },
    { id: 2, description: "Review code" },
];

// Function to display tasks
function displayTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear existing tasks

    tasks.forEach(task => {
        let taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <span>${task.description}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Function to add a new task
function addTask(description) {
    let newTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1; // Generate unique ID
    let newTask = { id: newTaskId, description: description };
    tasks.push(newTask);
    displayTasks(); // Update displayed tasks
}

// Event listener for form submission
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    let taskDescription = document.getElementById('taskDescription').value.trim();
    if (taskDescription !== '') {
        addTask(taskDescription);
        document.getElementById('taskDescription').value = ''; // Clear input field
    }
});

// Function to delete a task
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    displayTasks(); // Update displayed tasks
}

// Initial display of tasks
displayTasks();

