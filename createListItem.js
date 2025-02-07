import { handleSelectIvdividual } from "./selectIndividual.js";


// an object of elements to be created within a list
const taskList = document.getElementById("taskList");
const inputTask = document.getElementById("inputTask");
const listItems = {check:"input", text:"p", remove:"button"}
export const itemArrays = {
    currentTasks: [],
    taskCheck: [],
    taskP: [],
    deleteBtn: [],
}


export function handleAddTask(){
    // remove empty space
    const taskText = inputTask.value.trim();
    // check of there is text to be added
    if(inputTask.value === "" ){
        console.log("Input empty no task added");
    }else{
        // console.log("New Task Added");
        // create a new list item and append it to an unorganized list
        const li = document.createElement("li");
        li.classList.add("task")
        taskList.appendChild(li);
        console.dir(li);
        inputTask.value ="";
        addTaskChildren(taskText, li);
        // add element to array
        itemArrays.currentTasks.push(li);
        console.log(`Amount of Tasks: ${itemArrays.currentTasks.length}`);
    }
}
function addTaskChildren(taskText, parent){
    // iterate through an object create elements based on its key then append to a list item
        Object.keys(listItems).forEach(key =>{
            let item = document.createElement(`${listItems[key]}`);
            // change the elements atriibutes based on type
            if (key === "check"){
                item.setAttribute("type", "checkbox");
                itemArrays.taskCheck.push(item);
                item.addEventListener('click', (event)=>{
                    handleSelectIvdividual(event, itemArrays.taskCheck);
                });
            } else if(key === "text"){
                item.innerText = taskText;
                itemArrays.taskP.push(item);
                item.addEventListener('click', (event)=>{
                    handleSelectIvdividual(event, itemArrays.taskP);
                });
            }else if(key === "remove"){ 
                item.innerText = "delete";
                item.classList.add("btn");
                item.classList.add("remove");
                itemArrays.deleteBtn.push(item);
                item.addEventListener('click', (event)=>{
                    handleSelectIvdividual(event, itemArrays.deleteBtn);
                });
            }
            // append the new element 
            parent.append(item);
        })
}