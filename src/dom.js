//render the next tasks dyanmically 

export function renderTask(task, tasks, saveTasks) {

    //creating the new elements dynamically
    const li = document.createElement("li");

    //creating a header container
    const header = document.createElement("div");
    header.classList.add("task-header");


    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    const label = document.createElement("label");
    label.textContent = task.title;

    const date = document.createElement("p");
    date.textContent = task.date;

    const priority = document.createElement("p");
    priority.textContent = task.priority;

    const description = document.createElement("p");
    description.textContent = task.description;

    //delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        li.remove(); //removes the DOM element
        //removes from the task array
        const index = tasks.indexOf(task);
        if (index > -1) tasks.splice(index, 1);
        saveTasks();
    })

    //appending each child to the list
    header.appendChild(checkbox);
    header.appendChild(label)
    header.appendChild(date)
    header.appendChild(priority)
    
    li.appendChild(header);
    li.appendChild(description);
    li.appendChild(deleteBtn);

    //updat task when the checkbox is toggled
    checkbox.addEventListener("change", () => {
        task.toggleComplete();
        label.style.textDecoration = task.completed ? "line-through" : "none"; 
        saveTasks();
    });
    return li;


    
}