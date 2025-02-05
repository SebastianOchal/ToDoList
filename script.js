const add = document.getElementById("add");
const deleteAll = document.getElementById("rAll")
const hili = document.getElementById("hili");
const taskList = document.getElementById("taskList");
const inputTask = document.getElementById("inputTask");
let currentTasks = [];

// an object of elements to be created within a list
const listItems = {check:"input", text:"p", remove:"button"}


function handleAddTask(){
    // remove empty space
    const taskText = inputTask.value.trim();
    // check of there is text to be added
    if(inputTask.value === "" ){
        console.log("Input empty no task added");
    }else{
        console.log("New Task Added");
        // create a new list item and append it to an unorganized list
        const li = document.createElement("li");
        li.classList.add("task")
        taskList.appendChild(li);
        console.dir(li);
        inputTask.value ="";
        // iterate through an object create elements based on its key then append to aa list item
        Object.keys(listItems).forEach(key =>{
            let x = document.createElement(`${listItems[key]}`);
            // change the elements atriibutes based on type
            if (key === "check"){
                x.setAttribute("type", "checkbox");
            } else if(key === "text"){
                x.innerText = taskText;
            }else if(key === "remove"){ 
                x.innerText = "delete";
                x.classList.add("btn")
                x.classList.add("remove")}
            // append the new element 
            li.append(x);
        })
        // add element to array
        currentTasks.push(li);
        console.log(`Amount of Tasks: ${currentTasks.length}`);
    }
}
function handleRemoveTask(){
    for (let i = 0; i < currentTasks.length; i++) {
        currentTasks[i].remove();
        console.log("Tasks removed")
    }
}
add.onclick = handleAddTask;
deleteAll.onclick = handleRemoveTask;