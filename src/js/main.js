import "./../scss/style.scss";
import { Tasks } from "./tasks";
window.onload = () =>{ 

const a = new Tasks ("Gymma");
const c = new Tasks ("Tvätta");
const b = new Tasks ("Handla");
const d = new Tasks ("Städa");
const todoList = [a, b, c, d];
const doneToDos = [];

const sectionContList = document.getElementById("sectionContList"); 
const ulList = document.getElementById("ul-list");

/* Local storage */
function localStorage (){
const storedTodoList = JSON.parse(localStorage.getItem("todo"));
localStorage.setItem("todo", JSON.stringify(todoList));
}

function makeListsWork (){
ulList.innerHTML ="";
todoList.forEach((task, e) => {
const liList = document.createElement("li");    
liList.className ="li-list";
liList.innerText = task.name;

liList.addEventListener("click", () =>{  
    doneToDos.push(task);           
    todoList.splice(e, 1); 

    makeListsWork ();
    createHTMLdoneToDos(); 
    localStorage ();
})

sectionContList.appendChild(ulList);
ulList.appendChild(liList);
liList.innerHTML=task.name;
}); 
}
const sectiondoneToDos = document.getElementById("section-doneToDos");
const createHTMLdoneToDos = () =>{
sectiondoneToDos.innerHTML =""; 

doneToDos.forEach((tasked, i) => {
const doneStuffsection = document.createElement("section");
doneStuffsection.id = "doneStuffsection";
doneStuffsection.innerHTML = tasked.name;    

doneStuffsection.addEventListener("click", () => {
    doneToDos.splice(i, 1); 
    createHTMLdoneToDos();
  });
  sectiondoneToDos.appendChild(doneStuffsection);
});
};

addNewtoDo();
makeListsWork();

/* Sortering */

function sortIt (){
    const sort = document.getElementById("sort-icon");
    sort.addEventListener("click", (e) => {
        todoList.sort(((a, b) => a - b));
    }
    )

}

/* Form */
function addNewtoDo(){
    
    const form = document.getElementById("form");
    const input = document.getElementById("input");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
     
        const newTodo = input.value; 
        const newTask = new Tasks (newTodo);
        todoList.push(newTask);
        makeListsWork ();

    doneToDos.addEventListener("click", (e) => {    
        newTodo.splice(e, 1);
        
        const liList2 = document.createElement("li");
        liList2.className = "li-list";
        liList2.innerHTML = newTodo;
        ulList.appendChild(liList2);
        input.value = "";
    })
    createHTMLdoneToDos();
    localStorage();
    
});
}
}
