const taskInput = document.getElementById("myInput");
const addBtn = document.getElementById("add-task");
const table = document.getElementById("myTable");
var myArr;
var globalIndex = 0;
// console.log(taskInput);
// console.log(taskInput.value);

if (localStorage.getItem("myTasks")) {
  myArr = JSON.parse(localStorage.getItem("myTasks"));
  displayData();
} else {
  myArr = [];
}

function addTask() {
  // console.log("hello");
  // console.log(taskInput.value);
  if (addBtn.innerHTML == "update") {
    // console.log(taskInput.innerHTML);
    
    editTask();
  } else {
    // console.log(taskInput.innerHTML);
    myArr.push(taskInput.value);
    localStorage.setItem("myTasks", JSON.stringify(myArr));
    ClearInput();
    // console.log(myArr);
    displayData();
  }
}

function displayData() {
  var cartona = "";

  for (let i = 0; i < myArr.length; i++) {
    cartona += `
        <tr class="bg-white d-flex justify-content-between p-2">
                     <td>${myArr[i]}</td>
                     <td><button class="btn btn-outline-danger" onclick="deleteTask(${i})"> <i class="fa-solid fa-trash"></i> delete</button></td>
                     <td><button class="btn btn-outline-warning" onclick="setUpForEdit(${i})"> <i class="fa-solid fa-pen-to-square"></i> edit</button></td>
                 </tr>
        `;
  }
  table.innerHTML = cartona;
}

function deleteTask(index) {
//   console.log(index);
  myArr.splice(index, 1);
  localStorage.setItem("myTasks", JSON.stringify(myArr));
  displayData();
}

function setUpForEdit(index) {
    globalIndex = index;
//   console.log(index);
  // myArr.splice(index,1,)
  addBtn.innerHTML = "update";
  addBtn.classList.replace("btn-dark", "btn-warning");
  taskInput.value = myArr[index];
  // editTask(index);
}

function editTask() {
    // console.log(globalIndex);
    
  myArr.splice(globalIndex, 1, taskInput.value);
  localStorage.setItem("myTasks", JSON.stringify(myArr));
  ClearInput();
  displayData();
  addBtn.innerHTML = "add";
  addBtn.classList.replace("btn-warning", "btn-dark");
}

function ClearInput() {
  taskInput.value = "";
}
