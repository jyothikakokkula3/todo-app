const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the "public" folder

// In-memory storage for tasks
let tasks = [];

// GET endpoint to fetch all tasks
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// POST endpoint to add a new task
app.post('/api/tasks', (req, res) => {
    const { task } = req.body;
    if (task) {
        tasks.push(task);
        console.log('Tasks:', tasks); // Log tasks for debugging
        res.status(201).json({ message: 'Task added successfully', task });
    } else {
        res.status(400).json({ message: 'Task is required' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});