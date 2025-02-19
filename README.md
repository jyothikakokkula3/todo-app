# To-Do Application

A simple fullstack to-do application built with **Node.js**, **Express.js**, and vanilla **HTML/CSS/JavaScript**.

---

## 🚀 Features

- **Frontend:**
  - A form to add new tasks.
  - A list to display all tasks in real-time.

- **Backend:**
  - REST API built with Node.js and Express.js.
  - `GET /api/tasks`: Fetch all tasks.
  - `POST /api/tasks`: Add a new task.

---

## 🛠 Tech Stack

- **Frontend:**
  - HTML
  - CSS
  - JavaScript (Vanilla)

- **Backend:**
  - Node.js
  - Express.js

---

## 📌 How to Run the Project

### 1️⃣ Clone the repository

Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app

2️⃣ Install Dependencies
After cloning the repository, install the required dependencies:
npm install

3️⃣ Start the backend server
Run the following command to start the backend server:
node server.js

You should see the message:
Server is running on http://localhost:5000

4️⃣ Open the application in your browser
Go to http://localhost:5000 in your browser.

You should see the to-do app with a form to add tasks and an empty task list.

5️⃣ Add tasks
Type a task in the input field (e.g., Buy groceries).

Click the Add Task button.

The task will appear in the list below the form.

🗂 Folder Structure
todo-app/
│
├── public/                  # Frontend files
│   ├── index.html           # HTML file for the frontend
│   └── script.js            # JavaScript file for frontend logic
│
├── server.js                # Backend server code
├── package.json             # Node.js project configuration
├── README.md                # Project documentation
└── node_modules/            # Installed dependencies

🔗 API Endpoints
The backend provides the following REST API endpoints:

➤ GET /api/tasks
Fetches all tasks.

Example response:
["Buy groceries", "Walk the dog"]

➤ POST /api/tasks
Adds a new task.

Request body:
{
  "task": "New task"
}

Example response:
{
  "message": "Task added successfully",
  "task": "New task"
}

⚙ Troubleshooting
Tasks not appearing?
Check the browser console for errors.
Ensure the backend server is running (node server.js).
Verify the POST /api/tasks request is being sent successfully.
Backend not working?
Check the terminal for errors.
Ensure all dependencies are installed (npm install).

🚀 Future Improvements
Task Deletion: Allow users to delete tasks.
Task Editing: Allow users to edit tasks.
Persistent Storage: Store tasks in a database (e.g., MongoDB, PostgreSQL).
Authentication: Add user authentication for personalized task management.

👩‍💻 Author
Jyothikakokkula3

📝 License
This project is licensed under the MIT License. See the LICENSE file for details.

📣 How to Contribute
We welcome contributions! To contribute to this project:

1. Fork the repository.
2. Clone your forked repository to your local machine.
3. Create a new branch (git checkout -b feature-name).
4. Make your changes and commit them (git commit -m 'Add new feature').
5. Push to your branch (git push origin feature-name).
6. Open a pull request to the original repository.

❓ FAQ
Q: Can I deploy this app to production?
A: Yes, you can deploy it to platforms like Heroku or Vercel by following their respective deployment guides.

Q: How can I modify the UI of the application?
A: You can modify the public/index.html and public/script.js files to change the UI and frontend logic.

📝 License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

Now, the "Install Dependencies" step is clearly placed under the "Clone the repository" section, in the same format as the rest of the instructions. You can copy and use this markdown file for your project. Let me know if you need anything else!
