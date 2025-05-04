const inputTask = document.getElementById('inputTask');
const btnAdd = document.getElementById('btn-add');
const ulList = document.getElementById('list');
const spanItems = document.getElementsByTagName('span');

function createTask() {
    let inputValue = inputTask.value.trim();
    if (inputTask.value === '') {
        return;
    } else {
        inputTask.value = "";
    }

    let newLi = document.createElement('li');// <li></li>  

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    let date = new Date().toLocaleString('ru-RU', options);


    newLi.textContent = inputValue + ' (' + date + ')'; // <li>Task</li>

    let newSpan = document.createElement('span');
    newSpan.textContent = 'Delete'; // <span>Delete</span>
    // <li>Task 4<span>Delete</span></li>

    
    function taskDone() {
        newLi.classList.toggle('done');
        counter();
    };

    newLi.onclick = taskDone;


    
    newLi.appendChild(newSpan);
    ulList.appendChild(newLi);
    counter();
    removeTask();
}

btnAdd.onclick = createTask;

function removeTask() {
    for (let spanItem of spanItems) {
        if (spanItem.textContent === 'Delete') {
            spanItem.onclick = function () {
                spanItem.parentElement.remove();
            }
        }
    }
}

removeTask();


// информация о разработчике
let openDev = document.getElementById('open');
let closeDev = document.getElementById('close');
let popup = document.getElementById('modal');

function openInfoDev() {
    popup.style.display = 'block';
}

function closeInfoDev() {
    popup.style.display = 'none';
}

openDev.onclick = openInfoDev;
closeDev.onclick = closeInfoDev;


// счетчик
const activeTask = document.getElementById('active');
const doneTask = document.getElementById('done');

function counter() {
    let list = document.getElementsByTagName('li');
    let active = 0;
    let done = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i].classList.contains('done')) {
            done++;
        } else {
            active++;
        }
    }
    activeTask.textContent = active;
    doneTask.textContent = done;
};

counter();
