document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.className = "task";

    li.innerHTML = `
        <input type="text" value="${taskText}" disabled>
        <div class="buttons">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";

    let editBtn = li.querySelector(".edit");
    let deleteBtn = li.querySelector(".delete");
    let inputField = li.querySelector("input");

    // Edit button functionality
    editBtn.addEventListener("click", function () {
        if (inputField.disabled) {
            inputField.disabled = false;
            inputField.focus();
            editBtn.textContent = "Save";
        } else {
            inputField.disabled = true;
            editBtn.textContent = "Edit";
        }
    });

    // Delete button functionality
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
}
