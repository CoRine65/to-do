//render the next tasks dyanmically 

export function renderTask(task) {

    //creating the new elements dynamically
    const li = document.createElement("li");

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

    //appending each child to the list
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(date);
    li.appendChild(priority);
    li.appendChild(description);

    //updat task when the checkbox is toggled
    checkbox.addEventListener("change", () => {
        task.toggleComplete();
        label.style.textDecoration = task.completed ? "line-through" : "none"; //what is this?
    });
    return li;

}