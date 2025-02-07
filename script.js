const add = document.getElementById("add");
const deleteAll = document.getElementById("rAll")

import { handleAddTask} from "./createListItem.js";
import { handleDeleteChecked } from "./selectCompleted.js";

add.onclick = handleAddTask;
deleteAll.onclick = handleDeleteChecked;


