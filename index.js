const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {

    const text = taskInput.value.trim();

    if (text === "") return;

    const li = document.createElement("li");
    li.classList.add("task");

    const leftDiv = document.createElement("div");
    leftDiv.classList.add("task-left");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
        checkEmpty();
    });

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    checkEmpty();
}

function checkEmpty() {
    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}
