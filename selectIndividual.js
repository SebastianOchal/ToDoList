import { itemArrays } from "./createListItem.js";

export function handleSelectIvdividual(event, itemArrayType){
    let itemPressed = event.target;
    let itemIndex = itemArrayType.indexOf(itemPressed);
    if(itemArrayType === itemArrays.deleteBtn){
        deleteItem(itemIndex)
    }if(itemArrayType === itemArrays.taskP){
        highlightItem(itemIndex)
    }if(itemArrayType === itemArrays.taskCheck){
        crossOutItem(itemIndex)
    }
    console.log(`button pushed: ${itemIndex} current tasks: ${itemArrayType.length} item type:${itemPressed}`)
}
function deleteItem(itemIndex){
    itemArrays.currentTasks[itemIndex].remove();
    Object.keys(itemArrays).forEach(key=>{
        itemArrays[key].splice(itemIndex,1);
        console.log(`array lengths: ${itemArrays[key].length}`)
    })
}
function highlightItem(itemIndex){
    itemArrays.taskP[itemIndex].classList.toggle(`highlight`);
}
function crossOutItem(itemIndex){
    if(itemArrays.taskCheck[itemIndex].checked){
        itemArrays.taskP[itemIndex].classList.add(`crossed`);
    }else{
        itemArrays.taskP[itemIndex].classList.remove(`crossed`);
    }
    
}