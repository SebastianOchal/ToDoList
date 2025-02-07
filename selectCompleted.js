import { itemArrays } from "./createListItem.js"

export function handleDeleteChecked(){
const toDelete = document.querySelectorAll(".crossed")

    toDelete.forEach(task => {
        let itemIndex = itemArrays.taskP.indexOf(task);
        itemArrays.currentTasks[itemIndex].remove();
        Object.keys(itemArrays).forEach(key=>{
            itemArrays[key].splice(itemIndex,1);
            console.log(`array lengths: ${itemArrays[key].length}`)
        })
    });
    }
