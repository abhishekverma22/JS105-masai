/*Problem Statement: Create an array that represents your daily to-do list with 5 tasks. Add a new task to the beginning of the list. Then, remove the last task from the list. Finally, log the updated to-do list to the console. */

let toDoList = ["code", "sleep", "music", "code", "eat"];
let update = toDoList.unshift("riding");
let drop = toDoList.pop(); 

console.log(toDoList);