//import the needed files
import './style.css';
import Task from "./task";
import { renderTask } from "./dom";


const tasks = [];//stores the tasks
 
//dynamic form adaption
//selecting the containers and what we are going to append to
const form = document.getElementById('task-form');
const tasksContainer = document.getElementById('tasks-container');

//save tasks array to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//load tasks from Local Storage
function loadTasks() {
    const stored = localStorage.getItem('tasks');
    if(!stored) return;
    const parsed = JSON.parse(stored);
    parsed.forEach( t => {
        const task = new Task(t.title, t.date, t.priority, t.description);
        if(t.completed) task.completed = true;
        tasks.push(task);
        tasksContainer.appendChild(renderTask(task, tasks,saveTasks));
    });
};

loadTasks();

form.addEventListener('submit', (e) =>{
    e.preventDefault(); 

    //assigning and selecting the elements that give us our values
    const title = document.getElementById('task-title').value;
    const dueDate = document.getElementById('task-date').value;
    const priority = document.getElementById('task-priority').value;
    const description = document.getElementById('task-description').value;

    //passing it to dom.js
    const newTask = new Task(title, dueDate, priority, description);
    tasks.push(newTask);

    tasksContainer.appendChild(renderTask(newTask, tasks, saveTasks));
    saveTasks();
    form.reset();
});





