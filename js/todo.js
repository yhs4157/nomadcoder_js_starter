const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"; 

const toDos = []; 

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

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

    toDos.push(newTodo); 
    
    paintToDo(newTodo); 
    saveToDos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY); 

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); 
    parsedToDos.forEach((item) =>{
        console.log(item); 
    });
}