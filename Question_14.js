let task= ["sleep", "ride", "reading book", "code", "assessiment complete"];

for(i=0; i<= task.length-1; i++){
    task[i]= task[i+1];
}
task.length -=1;
task.length +=2;

for(let i=task.length-1; i>=2; i--){
    task[i]= task[i-2];
}


// high-priority task
task[0] = "high-priority_1";
task[1] = "high-priority_2";


// replace last element with new task

task[task.length-1] = "New_Task";

console .log(task)