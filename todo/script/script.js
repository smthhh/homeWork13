const inputTask = document.getElementById('inputTask');
const btnAdd = document.getElementById('btn-add');
const ulList = document.getElementById('list');
const spanItems = document.getElementsByTagName('span');
let counterOn = 0;
let counterOff = 0;

function createTask () {
    let inputValue = inputTask.value.trim();
    if (inputTask.value === ''){
        return;
    } else {
        inputTask.value = "";
    }

    let newLi = document.createElement('li');// <li></li>
    newLi.textContent = inputValue; // <li>Task 4</li>

    let newSpan = document.createElement('span');
    newSpan.textContent = 'Delete'; // <span>Delete</span>
    newLi.appendChild(newSpan); // <li>Task 4<span>Delete</span></li>

    ulList.appendChild(newLi); 

    removeTask();
    counterOn++
}

btnAdd.onclick = createTask;

function removeTask () {
    for (let spanItem of spanItems){
        spanItem.onclick = function(){
            spanItem.parentElement.remove();
        }
    }
}

removeTask();