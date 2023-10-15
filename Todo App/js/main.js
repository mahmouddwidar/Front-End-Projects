const inputBox = document.getElementById('text-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === '') {
        alert('You Should Write Something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let i = document.createElement('i');
        i.classList.add('fa-regular');
        i.classList.add('fa-trash-can');
        li.appendChild(i)
    }
    inputBox.value = ''
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if(e.target.tagName === "I") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();
