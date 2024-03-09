const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskDate = document.getElementById('taskDate');

function addTask() {
    if (taskInput.value == "") {
        alert("Por favor insira uma tarefa.")
    } else { 
        const li = document.createElement("li");
        const taskText = document.createTextNode(taskInput.value + ' - ' + taskDate.value);
    
        li.appendChild(taskText);
        taskList.appendChild(li);

        const removerBotao = document.createElement("button");
        removerBotao.textContent = "Remover";
        removerBotao.style.backgroundColor = "red", marginRight = "10px";
        removerBotao.onclick = function () {
        taskList.removeChild(li)
        };


        li.appendChild(removerBotao);
        taskList.appendChild(li);

        taskInput.value = "";
        taskDate.value = "";
    } 
}

addTask()
