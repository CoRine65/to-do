//defining what a task is

export default class Task{
    constructor(title, date, priority, description){
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.description = description;

        this.completed = false;
    }

    toggleComplete (){
        this.completed = !this.completed;
    }
}