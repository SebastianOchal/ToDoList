const add = document.getElementById("add");
const deleteAll = document.getElementById("rAll")
const hili = document.getElementById("hili");

import { handleAddTask, itemArrays } from "./createListItem.js";



// clear the list
function handleRemoveAll(){
    for (let i = 0; i < currentTasks.length; i++) {
        currentTasks[i].remove();
        console.log(`Amount of Tasks before: ${currentTasks.length}`)
    }
    currentTasks = [];
    console.log(`Amount of Tasks after: ${currentTasks.length}`)
}
function handleRemoveIvdividual(event){
    let buttonPressed = event.target;
    let buttonIndex = deleteBtn.indexOf(buttonPressed);
    currentTasks[buttonIndex].remove();
    //TODO: create an new object of arrays and loop through them to clear the deleted item
    currentTasks.splice(buttonIndex,1);
    deleteBtn.splice(buttonIndex,1);
    console.log(`button pushed: ${buttonIndex} current tasks: ${currentTasks.length}`)
}
// ! Stoping for the day: 
// TODO create a delete module (has to loop through itemArrays and remove an element from each)
// TODO sepperate handel ivdvidual
// TODO create Highlight and mark complete
// TODO CSS styling
function checkIfUpdate(){
    Object.keys(itemArrays).forEach(key =>{
        console.log(`Item Container: ${key} items contained: ${itemArrays[key]}`)
    })
}

add.onclick = handleAddTask;
deleteAll.onclick = handleRemoveAll;
hili.onclick = checkIfUpdate;

