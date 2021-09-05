const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const liToDelete = event.target.parentElement;
    liToDelete.remove();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText="❌"
    button.addEventListener("click", deleteToDo)

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    parseToDos.forEach(paintToDo);
}