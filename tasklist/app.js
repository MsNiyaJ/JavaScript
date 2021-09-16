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
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    tasklist.addEventListener('click', removeTask);
    // Remove all tasks event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
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
        // Clear the input 
        taskInput.value = ''
    }

    e.preventDefault();
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