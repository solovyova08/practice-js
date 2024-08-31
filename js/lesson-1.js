// //Використовуя if...else,
// //напишіть код, який буде питати:
// //"Яка офіційна назва JavaScript?"
// //Якщо користувач вводить "ECMAScript",
// //то показати через alert: "Вірно!"
// //в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const question = prompt("Яка офіційна назва JavaScript?");

// if (question.toLowerCase() === "ecmascript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }
// ____________________________________________________

//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10
const time = prompt("Enter number");

let hours = Math.floor(time / 60);
let minutes = time % 60;
hours = String(hours).padStart(2, 0);
minutes = String(minutes).padStart(2, 0);
// str.padStart(targetLength [, padString])
console.log(`${hours}:${minutes}`);
