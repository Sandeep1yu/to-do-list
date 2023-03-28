const formEl = document.querySelector(".form")
const inputEl = document.querySelector(".input")
const ulEl = document.querySelector(".list")
const liEl = document.querySelector(".checked")

let list = JSON.parse(localStorage.getItem("list"))
console.log(list);


list.forEach(task=>{
    toDoList(task)
})



formEl.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    toDoList()
})

function toDoList(task){
    let newTask = inputEl.value
    if(task){
        newTask = task.name
    }
    const liEl = document.createElement("li");
    if(task && task.checked){
        liEl.classList.add("checked");
    }
    liEl.innerText = newTask;
    ulEl.appendChild(liEl);
     const checkedEl = document.createElement("div")
     checkedEl.innerHTML = `
     <i class="fa-solid fa-square-check"></i>
     `
     liEl.appendChild(checkedEl)
    const trashEl = document.createElement("div")
    trashEl.innerHTML = `
    <i class="fa-solid fa-trash"></i>
    `
    liEl.appendChild(trashEl)

    checkedEl.addEventListener("click", ()=>{
        liEl.classList.toggle("checked")
        updateLocalStorage()
    })

    trashEl.addEventListener("click", ()=>{
        liEl.remove()
        updateLocalStorage()
        inputEl.value = ""

    })
    updateLocalStorage()

}

function updateLocalStorage(){
    const listEls = document.querySelectorAll("li")
    let list = []
    listEls.forEach(liEl=>{
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        })
    })
    localStorage.setItem("list", JSON.stringify(list))
}

