// Define UI Vars
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    tasklist.addEventListener('click', removeTask);
    // Remove all tasks event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

// Get tasks from local storage
function getTasks(){
    let tasks;

    // Create a new array that will store tasks if there
    // is none in localstorage, else get all tasks
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // Create a li element for each task in local storage
    tasks.forEach(function(task){
        // Create a li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        //Create text node and append it to li
        li.appendChild(document.createTextNode(task));
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append icon to li
        li.appendChild(link);
       
        // Append the li to the task list
        tasklist.appendChild(li);
    })
}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }
    else{ 
        // Create a li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        //Create text node and append it to li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append icon to li
        li.appendChild(link);
       
        // Append the li to the task list
        tasklist.appendChild(li);
        
        // Store in localstorage
        storeTaskInLocalStorage(taskInput.value);

        // Clear the input 
        taskInput.value = ''
    }

    e.preventDefault();
}

function storeTaskInLocalStorage(task){
    let tasks;

    // Create a new array that will store tasks if there
    // is none in localstorage, else get all tasks
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // Push the new task into the tasks array
    tasks.push(task);
    // Update localstorage to include the new task
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e){
    //Remove tasks when x icon is clicked
    if(e.target.classList.contains('fa-remove')){
        // Remove a task if confirm is true
        if(confirm('Are you sure?'))
            e.target.parentElement.parentElement.remove();
    }
}

function clearTasks(e){
    // Remove all tasks if confirm is true
    if(confirm('Are you sure?')){
        while(tasklist.firstChild)
            tasklist.firstChild.remove();
    }
}

function filterTasks(e){
    // store the text from the filter input
    const text = e.target.value.toLowerCase();
    
    // Select all tasks and filter each based on the filter input
    document.querySelectorAll('.collection-item').forEach
    (function(task){

        // If the there are a set of characters that match the 
        // filter input, then display it, else hide it.
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block'   
        }else {
            task.style.display = 'none'
        }
    });
}