import "./../scss/style.scss";
import { Tasks } from "./tasks";
window.onload = () => {
  const a = new Tasks("Städa");
  const c = new Tasks("Tvätta");
  const b = new Tasks("Handla");
  const d = new Tasks("Gymma");
  const todoList = [a, b, c, d];
  const doneToDos = [];

  const sectionContList = document.getElementById("sectionContList");
  const ulList = document.getElementById("ul-list");

 
  function makeListsWork() {
    ulList.innerHTML = "";
    todoList.forEach((task, e) => {
      const liList = document.createElement("li");
      liList.className = "li-list";
      liList.innerText = task.name;
      localStorage.setItem("todo", JSON.stringify(todoList));
      liList.addEventListener("click", () => {
        doneToDos.push(task);
        
        todoList.splice(e, 1);

        makeListsWork();
        createHTMLdoneToDos();
      });

      sectionContList.appendChild(ulList);
      ulList.appendChild(liList);
      liList.innerHTML = task.name;
    });
  }

  const sectiondoneToDos = document.getElementById("section-doneToDos");
  const createHTMLdoneToDos = () => {
    sectiondoneToDos.innerHTML = "";
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
  sortIt();

  /* Sortering */
  function sortIt() {
    const sort = document.getElementById("sort-icon");
    sort.addEventListener("click", () => {
      todoList.sort((a, b) => a.name.localeCompare(b.name));
      makeListsWork();
    });
  }

  /* Form */
  function addNewtoDo() {
    const form = document.getElementById("form");
    const input = document.getElementById("input");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const newTodo = input.value;
      const newTask = new Tasks(newTodo);
      todoList.push(newTask);
      makeListsWork();

      doneToDos.addEventListener("click", (e) => {
        newTodo.splice(e, 1);

        const liList2 = document.createElement("li");
        liList2.className = "li-list";
        liList2.innerHTML = newTodo;
        ulList.appendChild(liList2);
        input.value = "";
      });
      createHTMLdoneToDos();
    });
  }
};