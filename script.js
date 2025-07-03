const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
let tasks = [];
function addTask () {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskTextLower = taskText.toLowerCase();
    if (tasks.some(tasks => tasks.toLowerCase() === taskTextLower)) {
        alert('This task already exists!');
        taskInput.value = ''; 
        return;
    }


    tasks.push(taskText);
    const li = document.createElement('li');
   li.className = 'task-item';

    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'X';
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
        tasks = tasks.filter(task !== taskText);
    });
    
}
    addTaskBtn.addEventListener("click", addTask)

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

        
