# to-do
project page: https://www.theodinproject.com/lessons/javascript-todo-list

Project goal: Create a todo list:
title, due date, description, and priority

Focusing on: 
    - OOP: SOLID
    - npm
    - webpacks

----- 
Project start:

1. initialize git repository
    - git clone
    - set up initial read me
    - install webpack 
        - build webpack: package.json
        - add "build": "wepack to: package.json

[   - install html plug in ]
[   - install css plug in]
[   - configured webpack.config.js]
[   - ran npx webpack]

    - create src dist
        - move to src
            - create: index.js task.js dom.js style.css
        - move out
    - create webpack.config.js

---------------commit----------- 

2. Creating a base html layout
3. defined what a task is in its own module, with exportation in mind.
4. moved to the dom, to render the next task
5. Did a hardcode sample one
6. test: works!

-----------------commit---------

7. we are starting to make the website more dynamic with inputs and behaviors
    - first change the html into a dynamic form with inputs and a select menun for priority
    - move then to index.js to capture input
        - event listeners 
        - send it to dom.js to render the view
    - Testing: 
        :ERROR
            - The inputs are working just fine but when I click submit it doesn't display the new task, just reloads to empty inputs
            - FIX: I still had the previous hard code sample, commented it out.
    - went back to add a delete button
        :ERROR
            - trying to also delete the task from the array: ERROR : task.indexOf is not a function
                    TypeError: task.indexOf is not a function
                    at HTMLButtonElement.eval (webpack://to-do/./src/dom.js?:34:28) 
            - FIX: Naming convention issue, i was not calling it on the array tasks but rather the singular object task. 

------------ commit -------------