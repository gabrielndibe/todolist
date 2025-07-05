const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const errorMsg = document.getElementById("error");

let tasks = [];
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((taskText, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';

const span = document.createElement('span');
span.textContent = `${index + 1}. ${taskText}`; 
li.appendChild(span);

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
li.appendChild(deleteBtn);

taskList.appendChild(li);

deleteBtn.addEventListener('click', () => {
    tasks = tasks.filter((_, i) => i !== index); 
    renderTasks(); 
});
});
}

function addTask() {
    const taskText = taskInput.value.trim();


    if (taskText === '') {
        errorMsg.textContent = 'Please enter a task!';
        setTimeout(() => {
            errorMsg.textContent= "";
           }, 3000);
        return;
    }
    const taskTextLower = taskText.toLowerCase();
    if (tasks.some(task => task.toLowerCase() === taskTextLower)) {
        errorMsg.textContent = 'This task already exists!';
        setTimeout(() => {
            errorMsg.textContent= "";
           }, 3000);
        taskInput.value = ''; 
        return;
    }


    tasks.push(taskText);


    renderTasks();

    
    taskInput.value = '';
}



addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

    
   
   

  
