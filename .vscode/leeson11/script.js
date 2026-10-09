let input = document.getElementById("input")
let today = document.getElementById("today")
let after = document.getElementById("after")
let todayList = document.getElementById("today List")
let futurelist = document.getElementById("futurelist")

let todayTasks = JSON.parse(localStorage.getItem("todayTasks")) || []
let futureTasks = JSON.parse(localStorage.getItem("futureTasks")) || []

function save() {
    localStorage.setItem("todayTasks", JSON.stringify(todayTasks))
    localStorage.setItem("futureTasks", JSON.stringify(futureTasks))
}

function renderTask(task, list, arr) {
    let li = document.createElement("li")
    li.innerHTML = `<input type="checkbox"> <span></span> <button class="remove">remove</button>`

    let checkbox = li.querySelector("input")
    checkbox.checked = task.done
    li.querySelector("span").textContent = task.text

    checkbox.addEventListener("change", function () {
        task.done = checkbox.checked
        save()
    })

    li.querySelector(".remove").addEventListener("click", function () {
        li.remove()
        arr.splice(arr.indexOf(task), 1)
        save()
    })

    list.appendChild(li)
}

function addtask(list, arr) {
    let text = input.value.trim()
    if (!text) return

    let task = { text: text, done: false }
    arr.push(task)
    renderTask(task, list, arr)
    input.value = ""
    save()
}

todayTasks.forEach(task => renderTask(task, todayList, todayTasks))
futureTasks.forEach(task => renderTask(task, futurelist, futureTasks))

today.addEventListener("click", () => addtask(todayList, todayTasks))
after.addEventListener("click", () => addtask(futurelist, futureTasks))