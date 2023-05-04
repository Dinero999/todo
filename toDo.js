//creating DOM windows
window.addEventListener('load',() => {
    const form = document.querySelector("#tasks-header");
    const input = document.querySelector("#input-id");
    const list_el = document.querySelector("#task-container");

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
    
        const task = input.value;
    //creating alert 
     if (!task){
         alert("Please fill out the task");
         return;
     }
    
     //creating new div for new tasks
     const newTaskElement  = document.createElement("div");
     newTaskElement.classList.add("tasks-main");
    
     const newTaskList = document.createElement("div");
     newTaskList.classList.add("task-list");
     
     //creating new inputs for new tasks
     const newInputElement = document.createElement("input");
     newInputElement.classList.add("input-tasklist");
     newInputElement.type = "text";
     newInputElement.value = task;
     newInputElement.setAttribute ("readonly","readonly");

     //adding the childs
     newTaskList.appendChild(newInputElement);

     newTaskElement.appendChild(newTaskList);
     
     //creating new divs for the buttons
     const newAction = document.createElement("div");
     newAction.classList.add("actions");

     //creating the new edit
    const newEdit = document.createElement("button");
    newEdit.classList.add("edit-button");
    newEdit.innerHTML = "Edit";

    //creating new delete
    const newDelete = document.createElement("button");
    newDelete.classList.add("delete-button");
    newDelete.innerHTML = "Delete";

    //adding new buttons to their containers
    newAction.appendChild(newEdit);
    newAction.appendChild(newDelete);

    newTaskElement.appendChild(newAction);

     list_el.appendChild(newTaskElement);

     
     input.value = "";
    

     //manipulating the save and edit buttons
     newEdit.addEventListener('click', () => {
         if(newEdit.innerHTML.toLowerCase() == "edit"){
             newInputElement.removeAttribute("readonly","readonly");
             newInputElement.focus();
             newEdit.innerHTML = "Save";
            
             
         }
         else{
            newInputElement.setAttribute ("readonly","readonly");
            newEdit.innerHTML = "Edit";
         }

         //manipulating the delete buttons
     newDelete.addEventListener('click', () =>{
         list_el.removeChild(newTaskElement);
     })
     })

     //adding timestamps
     const time = new Date();
     
     const timeContainer = document.createElement("div");
     timeContainer.classList.add("time-stamps");
     
     const timeButton = document.createElement("button");
     timeButton.classList.add("demo");
     timeButton.innerHTML = time;



     //appending the timestamps

     timeContainer.appendChild(timeButton);
     newTaskElement.appendChild(timeContainer);
     list_el.appendChild(newTaskElement);
    
     
     //implementing the time out
    /* function notify(){
        alert("you promised to do a task");
     }
      
     const timeout = setInterval(notify,5000);

      if(task == timeout){
            return notify();
        }
        
*/


     

     
     
    })

      
     
} )




 