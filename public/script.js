const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Fetch all tasks from the backend
const fetchTasks = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/tasks');
        const tasks = await response.json();
        taskList.innerHTML = ''; // Clear the list
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task;
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
};

// Add a new task
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task) {
        try {
            const response = await fetch('http://localhost:5000/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ task }),
            });
            if (response.ok) {
                taskInput.value = ''; // Clear the input
                fetchTasks(); // Refresh the task list
            } else {
                console.error('Failed to add task');
            }
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }
});

// Fetch tasks on page load
fetchTasks();