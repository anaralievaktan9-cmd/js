// localStorage.js
// let name = localStorage.setItem('name')
// // setItem маалымытты сактайт

// let str = prompt("введите слово")

// let input = document.getElementById("input")
// let btn = document.getElementById("btn")
// let result = document.getElementById("result")
// alert("localStorage")

// btn.addEventListener("click", () => {
//     // setItem маалымытты сактайт
//     localStorage.setItem('text', input.value);
//     result.innerHTML = localStorage.getItem('text')
// })
//  // getItem МААЛЫМАТТЫ алат
// const saved = localStorage.getItem('text')
// if (saved) result.textContent = "мурда сакталган:" + saved



// let name = prompt("Атың ким?");
 //// setItem маалымытты сактайт
// localStorage.setItem("name", name);
 // getItem МААЛЫМАТТЫ алат
// let savedName = localStorage.getItem("name");

// console.log(savedName); 

document.cookie = "name=Aktan; max-age=3600";
console.log(document.cookie);