import "./../scss/style.scss";
window.onload = () =>{


/* Hittar min header */    
const mainHeader = document.getElementById("header1");

/* Skapar en lista */
const divContList = document.createElement("div");
const ulist = document.createElement("ul");
const list = document.createElement("li");
const list1 = document.createElement("li");
const list2 = document.createElement("li");

divContList.id = "divContList";
ulist.id = "ulist";
list.id = "list";
list1.id = "list1";
list2.id = "list2";

list.innerHTML = "Laga mat";
list1.innerHTML = "Städa";
list2.innerHTML = "Rensa kläder";
divContList.innerHTML = "Att göra:";
ulist.appendChild(list);
ulist.appendChild(list1);
ulist.appendChild(list2);
divContList.appendChild(ulist);

document.body.appendChild(divContList);
}

/* Skapar formulär här plus knapp! */
let todoForm = document.createElement("form");
let todoInputForm = document.createElement("input");
todoInputForm.setAttribute("type", "text");
todoInputForm.setAttribute("placeholder", "Mer todos!");
todoForm.appendChild(todoInputForm); 
document.body.appendChild(todoForm);

let button = document.createElement("button");
button.innerHTML = "Lägg till!";
button.id = "buttonclick";
todoForm.appendChild(button);

/* Redan gjorda todos här! */
let donetodo = document.createElement("section");
donetodo.id = "donetodo";
donetodo.innerHTML = "Done todos:";
document.body.appendChild(donetodo);

/* function createHTMLforList(){} */
/* klick grejen här! */
