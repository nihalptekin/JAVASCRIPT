const liste = document.querySelector(".todos")
const buton = document.querySelector("#todo-button")
const input = document.querySelector("#todo-input")
const ul = document.querySelector("#todo-ul")
const total = document.querySelector("#toplam")
const tik = document.querySelector(".fa-check")
   

buton.onclick=()=>{

 ul.innerHTML += `<li class="checked">  <i class="fa-solid fa-check"></i> <p>  ${input.value} </p>   <i class="fa-solid fa-trash"></i>   </li> `
   

 total.innerHTML = setInterval(()=>{
    count++;
 },50)
 
}



// createCheckButton()
// const createCheckButton=()=>{
    
document.querySelectorAll(".fa-check").forEach((a)=>{

a.onclik=()=>{
    p.style.textDecoration="line-througt";

}

})



// var close = document.getElementsByClassName("close");
// const i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }





