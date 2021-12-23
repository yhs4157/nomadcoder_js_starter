const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"; 

let toDos = []; 

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function handleDeleteButton(event) {
    const li = event.target.parentElement; 
    li.remove(); 
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li"); 
    li.id = newTodoObj.id;

    const span = document.createElement("span"); 
    span.innerText = newTodoObj.text;

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

    const newTodoObj = {
        text: newTodo,
        id: Date.now(), 
    };
    toDos.push(newTodoObj); 
    
    paintToDo(newTodoObj); 
    saveToDos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY); 

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos; 
    parsedToDos.forEach(paintToDo);
}

