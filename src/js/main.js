import "./../scss/style.scss";
window.onload = () =>{


/* Hitta min header */    
const mainHeader = document.getElementById("header1");

/* Skapar en lista */
const divContList = document.createElement("div");
const ulist = document.createElement("ul");
const list = document.createElement("li");

divContList.id = "divContList";
ulist.id = "ulist";
list.id = "list";

list.innerHTML = "Laga mat";
divContList.innerHTML = "Att göra:";
ulist.appendChild(list);
divContList.appendChild(ulist);

document.body.appendChild(divContList);
}


/* function createHTMLforList(){} */
/* klick grejen här! */
