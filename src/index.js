//import the needed files
import Task from "./task";
import { renderTask } from "./dom"; //what is this? 

const taskList = document.querySelector("ul");
const tasks = [];//stores the tasks

//Temp example
const sample = new Task("Learn JS modules", "08.25.25", "high", "read up on what a JS modules is.");
taskList.push(sample);
taskList.appendChild(renderTask(sample)); 