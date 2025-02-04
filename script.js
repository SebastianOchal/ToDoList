const add = document.getElementById("add");
const remove = document.getElementById("remove");
const hili = document.getElementById("hili");
const taskList = document.getElementById("taskList");
const inputTask = document.getElementById("inputTask");
let currentTasks = [];

add.onclick = handleAddTask;

function handleAddTask(){
    const taskText = inputTask.value.trim();
    if(inputTask.value === "" ){
        console.log("Input empty no task added");
    }else{
        console.log("New Task Added");
        const li = document.createElement("li");
        li.textContent = taskText;
        li.classList.add("task")
        taskList.appendChild(li);
        console.dir(li);
        inputTask.value ="";
        currentTasks.push(li);
        console.log(`Amount of Tasks: ${currentTasks.length}`)
    }
}