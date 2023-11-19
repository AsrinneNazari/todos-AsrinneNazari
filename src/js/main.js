import "./../scss/style.scss";
/* Lägg in window on load här sist av allt */
const todoList = ["Gymma", "Handla", "Tvätta", "Vattna blommor"];
const doneToDos = [];

const sectionContList = document.getElementById("sectionContList"); 
const ulList = document.getElementById("ul-list");

todoList.forEach((task, e) => {
const liList = document.createElement("li");    
liList.id ="li-list";

liList.addEventListener("click", () =>{  
    doneToDos.push(task);               /* Tar ner todo till done todos */
    createHTMLdoneToDos();
    
    todoList.splice(e, 1);  /* Tar bort från todo listan */

    ulList.removeChild(liList); 

    createHTMLdoneToDos();
})

sectionContList.appendChild(ulList);
ulList.appendChild(liList);
liList.innerHTML=task;
});

const sectiondoneToDos = document.getElementById("section-doneToDos");
const createHTMLdoneToDos = () =>{
sectiondoneToDos.innerHTML =""; /* tomt i först*/

doneToDos.forEach((tasked, i) => {
const doneStuffsection = document.createElement("section");
doneStuffsection.id = "doneStuffsection";
doneStuffsection.innerHTML = tasked;    

doneStuffsection.addEventListener("click", () => {
    doneToDos.splice(i, 1); /* tar bort en i listan vid klick */
    createHTMLdoneToDos();
  });
  sectiondoneToDos.appendChild(doneStuffsection);
});
};

addNewtoDo();

/* Formuläret */
function addNewtoDo(){
    
    const form = document.getElementById("form");
    const input = document.getElementById("input");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
     
        const newTodo = input.value; 
        const liList2 = document.createElement("li");
        liList2.id = "li-list2";
        liList2.innerHTML = newTodo;
        ulList.appendChild(liList2);
        createHTMLdoneToDos();

        input.value = "";
    });
}

/* Fixa - så att nya todos som hamnar i listan, kan tas bort
<doneToDos> 
Kan man göra en gemensam lista av li-list och li-list2? */