//функциялар
//function declaration



// function name (){
//     alert('hello')
// }

// name()



// function expression


// const name = function() {
//     alert('hello');
// }
// name()



// function arrow 


// const name = () => {
//     alert('hello')
// }

// name()

// в чем разница между ними?
// function declaration - можно вызвать до объявления функции
// function expression - нельзя вызвать до объявления функции
// function arrow - нельзя вызвать до объявления функции

// function name(param){
//     alert("Hello" +param);
// }

// name('bekzat')
// alert('sadfg')

// function name(a,b){
//     alert(a,b);
// }

// name(10 ,10)


// let btn1 =document.getElementById('btn1');
// btn1.onclick = function(){
//     // alert('СЕН ЖАКШЫ АДАМСЫН');
//     document.body.style.backgroundColor = "blue"
    
// }

// let btn2 =document.getElementById('btn2');
// btn2.onclick = function(){
//     document.body.style.backgroundColor = "white"
    
// }

const displayEl = document.querySelector("#display");
const startBtn = document.querySelector("#start-btn");
const pauseBtn = document.querySelector("#pause-btn");
const resetBtn = document.querySelector("#reset-btn");

let seconds = 0;
let intervalId = null;

function updateDisplay() {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  displayEl.textContent = `${m}:${s}`;
}

startBtn.addEventListener("click", () => {
  if (intervalId) return;
  intervalId = setInterval(() => {
    seconds++;
    updateDisplay();
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  seconds = 0;
  updateDisplay();
});


