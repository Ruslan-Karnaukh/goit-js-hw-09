const btnStart = document.querySelector("button[data-start]")
const btnStop = document.querySelector("button[data-stop]")
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
let timerId = null
btnStart.addEventListener("click", handleClickStart);
btnStop.addEventListener("click", handleClickStop);

function handleClickStart({target}){
    timerId = setInterval(() =>{
        document.body.style.backgroundColor = getRandomHexColor()
    }, 1000)
    if(target){
        btnStart.setAttribute("disabled", true)
        btnStop.removeAttribute("disabled")
        
    }}

function handleClickStop({target}){
    clearTimeout(timerId);
    if(target){
        btnStop.setAttribute("disabled", true)
        btnStart.removeAttribute("disabled")
        
    }
    }
