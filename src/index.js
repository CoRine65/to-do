//import the needed files
import './style.css';
import Task from "./task";
import { renderTask } from "./dom";

const taskList = document.querySelector('ul');
const tasks = [];//stores the tasks

//Temp example
//const sample = new Task('Learn JS modules', '08.25.25', 'high', 'read up on what a JS modules is.');
//taskList.push(sample);
//taskList.appendChild(renderTask(sample)); 
 

//dynamic form adaption

//selecting the containers and what we are going to append to
const form = document.getElementById('task-form');
const tasksContainer = document.getElementById('tasks-container');

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

    const taskElement = renderTask(newTask, tasks);
    tasksContainer.appendChild(taskElement);
});




