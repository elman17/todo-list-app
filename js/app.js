const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById('list-container');
const addButton = document.querySelector(".row button");

function addTask() {
    if (inputBox.value === '') {
        alert("Zəhmət olmasa bir tapşırıq əlavə edin")
        
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
    
}

addButton.addEventListener("click", addTask)

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask()
    }
})


listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()

    }
    
}, false)

function saveData() {
    localStorage.setItem("todoData", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("todoData")
    
}

showTask();
