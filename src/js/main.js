import "./../scss/style.scss";
/* Lägg in window on load här sist av allt */
const todoList = ["Gymma", "Laga mat", "Tvätta", "Vattna blommor"];
const doneToDos = [];

const sectionContList = document.getElementById("sectionContList"); 
const ulList = document.getElementById("ul-list");

todoList.forEach((task) => {
const liList = document.createElement("li");
liList.id ="li-list";

liList.addEventListener("click", () =>{
    doneToDos.push(task);
    createHTMLdoneToDos();
})
sectionContList.appendChild(ulList);
ulList.appendChild(liList);
liList.innerHTML=task;

});
const headerDone = document.createElement("h3");
headerDone.innerHTML = "Mina klara todos: ";
document.body.appendChild(headerDone);
const sectiondoneToDos = document.getElementById("section-doneToDos");
const createHTMLdoneToDos = () =>{
sectiondoneToDos.innerHTML =""; /* tomt i först*/
sectiondoneToDos.appendChild(headerDone); /* Lägg för sig själv?? Kanske ser bättre ut i browsern */

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

/* Formuläret */
const form = document.getElementById("input"); /* Hämtar <input>  från forms !*/


