let inputEl = document.getElementById("inputElement");
let addBtn = document.getElementById("addButton");
let contEl = document.getElementById("container");
let saveBtn = document.getElementById("saveButton");

function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
      return [];
    } else {
      return parsedTodoList;
    }
  }

let todoList = getTodoListFromLocalStorage();

saveBtn.onclick = function () {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  };

function checkMark(checkboxId,labelId)
{
    let checkElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checkedd");
}

function addAndAppend()
{
    let checkboxId = "checkbox"+inputEl.value;
    let labelId = "label"+inputEl.value;

    let liEl = document.createElement("li");
    liEl.classList.add("li-container");
    contEl.appendChild(liEl);

    let checkEl = document.createElement("input");
    checkEl.type = "checkbox";
    checkEl.id = checkboxId;
    checkEl.classList.add("check-size");
    liEl.appendChild(checkEl);

    checkEl.onclick = function()
    {
        checkMark(checkboxId,labelId);
    }

    let divEl = document.createElement("div");
    divEl.classList.add("div-cont");
    liEl.appendChild(divEl);

    let labelEl = document.createElement("label");
    labelEl.htmlFor = checkboxId;
    labelEl.id = labelId;
    labelEl.textContent = inputEl.value;
    divEl.appendChild(labelEl);

    inputEl.value = "";

    let deldiv = document.createElement("div");
    liEl.appendChild(deldiv);

    let delEl = document.createElement("button");
    delEl.classList.add("del-btn");
    delEl.textContent = "Delete";
    deldiv.appendChild(delEl);

    delEl.onclick = function()
    {
        contEl.removeChild(liEl);
    }
}


function onAddTodo() {
    let userInputElement = document.getElementById("inputElement");
    let userInputValue = userInputElement.value;
  
    if (userInputValue === "") {
      alert("Enter Valid Text");
      return;
    }
  
  
    let newTodo = {
      text: userInputValue
    };
    todoList.push(newTodo);
    addAndAppend();
    userInputElement.value = "";
  }

addBtn.addEventListener("click",onAddTodo);
