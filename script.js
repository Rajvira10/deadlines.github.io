const text = document.querySelector('#text');
const date = document.querySelector('#date');
const background = document.querySelector('.bg');
const background2 = document.querySelector('.bg2');
const list = document.querySelector('ul');
const box = document.querySelector('.box');
const footer = document.querySelector('.last');

const button = document.querySelector('.btn');

const dark = document.querySelector('img');


let tasks = [];

const modeChange = ()=>{
    const img2 = dark.src;
    if (img2.indexOf('icon-sun.svg')!=-1) {
        dark.src = 'images/icon-moon.svg';
        background.style.backgroundImage = 'url("images/bg-desktop-light.jpg")';
        background2.style.backgroundColor = "white";
        text.style.color = "black";
        text.style.backgroundColor = 'white';
        date.style.color = "black";
        date.style.backgroundColor = 'white';
        box.style.backgroundColor = 'white';
        box.style.boxShadow = '0 0 10px rgba(0,0,0,.4)';
        box.style.color = 'black';
    }
    else{
        dark.src = 'images/icon-sun.svg';
        background.style.backgroundImage = 'url("images/bg-desktop-dark.jpg")';
        text.style.backgroundColor = 'rgb(44, 44, 70)';
        text.style.color = "white";
        date.style.backgroundColor = 'rgb(44, 44, 70)';
        background2.style.backgroundColor = "rgb(20,20,40)";
        box.style.boxShadow = 'none';
        box.style.backgroundColor = 'rgb(44, 44, 70)';
        box.style.color = 'white';
        date.style.color = "white";
    }
}

function generateID() {
    return Math.floor(Math.random() * 100000000);
}

const addTask = ()=>{
    const task = {
        id: generateID(),
        text: text.value,
        date: date.value,
    };
    tasks.push(task);
    text.value = '';
    date.value = '';
    addTaskInHTML(task);
}
const removeTask = (id)=>{
    let sum = 0;
    tasks = tasks.filter((task)=>{
        return parseInt(task.id) !== id;
    })
    tasks.forEach((task)=>{
        if (tasks.length === 0){
            return sum = 0;
        }
        sum = sum + 1;
    });

    footer.textContent = `${sum} Tasks Left`;
    init();
};




const addTaskInHTML = (task)=>{
    let sum = 0;
    const item = document.createElement('li');
    const para = document.createElement('p');
    tasks.forEach((task)=>{
        if (tasks.length === 0){
            return sum = 0;
        }
        sum = sum + 1;
    });

    footer.textContent = `${sum} Tasks Left`;
    item.innerHTML = `
        ${task.text} <span> ${task.date} </span> <button class="delete-btn" onclick="removeTask(${
            task.id
        })">x</button>
    `;
    list.appendChild(item);
}

const init = ()=>{
    list.innerHTML = "";
    tasks.forEach(addTaskInHTML);
}
init();

button.addEventListener('click',addTask);
dark.addEventListener('click',modeChange);