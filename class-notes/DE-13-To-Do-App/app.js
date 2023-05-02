const liste = document.querySelector(".todos")
const buton = document.querySelector("#todo-button")
const input = document.querySelector("#todo-input")
const ul = document.querySelector("#todo-ul")


buton.onclick=()=>{

 ul.innerHTML+= ` <li> <i class="fa-solid fa-check"></i>  ${input.value} <i class="fa-solid fa-trash " ></i> <li>`

}




