
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const toDoList = document.getElementById("todo-list");
const delBtn = document.querySelectorAll(".clear");

addBtn.addEventListener("click", () => {
  let bottone = document.createElement("button");
  bottone.className = "clear";
  bottone.innerHTML = "X";
  const newToDo = document.createElement("div");
  newToDo.textContent = input.value;
  toDoList.appendChild(newToDo);
  newToDo.appendChild(bottone);
  input.value = "";

  newToDo.addEventListener("click", function text() {
    if (newToDo.style.textDecoration = "none") {
      newToDo.style.textDecoration = "line-through"
    } else {
      newToDo.style.textDecoration === "none"
    }
  })

  bottone.addEventListener("click", () => {
      newToDo.remove()
  })        
})
