import "./../scss/style.scss";
import { Tasks } from "./tasks";
window.onload = () =>{ 

const a = new Tasks ("Gymma", false);
const b = new Tasks ("Handla");
const c = new Tasks ("Tvätta");
const d = new Tasks ("Städa");
const todoList = [a, b, c, d];
const doneToDos = [];

const sectionContList = document.getElementById("sectionContList"); 
const ulList = document.getElementById("ul-list");

localStorage.setItem("todo", JSON.stringify(todoList));

todoList.forEach((task, e) => {
const liList = document.createElement("li");    
liList.id ="li-list";
liList.innerText = task.name;
liList.innerText = task.tasked;

liList.addEventListener("click", () =>{  
    doneToDos.push(task);           
    createHTMLdoneToDos();
    
    todoList.splice(e, 1); 

    ulList.removeChild(liList); 

    createHTMLdoneToDos();
})

sectionContList.appendChild(ulList);
ulList.appendChild(liList);
liList.innerHTML=task.name;
});

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

/* Form */
function addNewtoDo(){
    
    const form = document.getElementById("form");
    const input = document.getElementById("input");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
     
        const newTodo = input.value; 
        const newTask = new Tasks (newTodo);
        todoList.push(newTask);
        
        const liList2 = document.createElement("li");
        liList2.id = "li-list2";
        liList2.innerHTML = newTodo;
        ulList.appendChild(liList2);
        createHTMLdoneToDos();


        input.value = "";
    });

}
}
