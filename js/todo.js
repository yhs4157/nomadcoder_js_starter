const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function handleDeleteButton(event) {
    const li = event.target.parentElement; 
    li.remove(); 
}

function paintToDo(newTodo) {
    const li = document.createElement("li"); 

    const span = document.createElement("span"); 
    span.innerText = newTodo;

    const button = document.createElement("button"); 
    button.innerText = "❌";
    button.addEventListener("click", handleDeleteButton); 

    li.appendChild(span); 
    li.appendChild(button); 
    
    toDoList.appendChild(li); 
    
    console.log(span.innerText);  
}

function handleToDoSubmit(event) {
    event.preventDefault(); 
    const newTodo = toDoInput.value; 
    toDoInput.value = ""; 
    paintToDo(newTodo); 
}

toDoForm.addEventListener("submit", handleToDoSubmit); 