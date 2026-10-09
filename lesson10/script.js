// let minus = document.getElementById("minus");
// let count = document.getElementById("count");
// let plus = document.getElementById("plus");
// let reset = document.getElementById("reset");
// let mul = document.getElementById("mul");

// value = 0;

// plus.onclick = function () {
//   value++;
//   count.innerHTML = value;
// };

// minus.onclick = function () {
//   if (value > 0) value--;
//   count.innerHTML = value;
// };

// count.onclick = function () {
//   value;
//   count.innerHTML = value;
// };

// reset.onclick = function () {
//   value = 0;
//   count.innerHTML = value;
// };

// mul.onclick = function (){
//     let person = prompt("Введите число")
//     value *=  person 
//     count.innerHTML = value
//   }


const display = document.querySelector("#display");

let currentNumber = "0";
let previousNumber = null;
let operation = null;
let waiting = false;

function updateDisplay() {
  display.textContent = currentNumber;
}

function enterNumber(number) {
  if (waiting) {
    currentNumber = number;
    waiting = false;
  } else {
    currentNumber =
      currentNumber === "0"
        ? number
        : currentNumber + number;
  }

  updateDisplay();
}

function chooseOperation(op) {
  if (previousNumber !== null && !waiting) {
    calculate();
  }

  previousNumber = currentNumber;
  operation = op;
  waiting = true;
}

function calculate() {
  const first = Number(previousNumber);
  const second = Number(currentNumber);

  if (operation === "+") {
    currentNumber = String(first + second);
  }

  if (operation === "-") {
    currentNumber = String(first - second);
  }

  if (operation === "*") {
    currentNumber = String(first * second);
  }

  if (operation === "/") {
    if (second === 0) {
      currentNumber = "Error";
    } else {
      currentNumber = String(first / second);
    }
  }

  previousNumber = null;
  operation = null;
  waiting = true;

  updateDisplay();
}

document.querySelectorAll("[data-number]").forEach((button) => {
  button.addEventListener("click", () => {
    enterNumber(button.dataset.number);
  });
});

document.querySelectorAll("[data-operation]").forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperation(button.dataset.operation);
  });
});

document
  .querySelector('[data-action="equals"]')
  .addEventListener("click", calculate);

document
  .querySelector('[data-action="clear"]')
  .addEventListener("click", () => {
    currentNumber = "0";
    previousNumber = null;
    operation = null;
    waiting = false;

    updateDisplay();
  });

document
  .querySelector('[data-action="sign"]')
  .addEventListener("click", () => {
    if (currentNumber !== "0") {
      currentNumber = String(Number(currentNumber) * -1);
      updateDisplay();
    }
  });

document
  .querySelector('[data-action="percent"]')
  .addEventListener("click", () => {
    currentNumber = String(Number(currentNumber) / 100);
    updateDisplay();
  });

document
  .querySelector('[data-action="decimal"]')
  .addEventListener("click", () => {
    if (!currentNumber.includes(".")) {
      currentNumber += ".";
      updateDisplay();
    }
  });



