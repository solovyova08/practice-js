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

// const time = prompt("Enter number");

// let hours = Math.floor(time / 60);
// let minutes = time % 60;
// hours = String(hours).padStart(2, 0);
// minutes = String(minutes).padStart(2, 0);
// // str.padStart(targetLength [, padString])
// console.log(`${hours}:${minutes}`);

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

// const min = 0
// const max = 15
// let sum = 0

// for (let i = max; i >= min; i--) {
//     console.log(i)

//     if (i % 2 === 0) {
//         sum += i
//     }
// }

// console.log(sum)

// function task3(min, max) {
//     let sum = 0;

//     for (let i = max; i >= min; i--) {
//         console.log(i);

//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// console.log("Result: " + task3(0 ,15));

//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// const login = prompt("Enter login");
// console.log(login);

// if (login === "Адмін") {
//     const password = prompt("Enter password");
//     // if (password === "Я головний") {
//     //     alert("Вітаю!");
//     // } else {
//     //     alert("Невірний пароль!");
//     // }
//     alert(password === "Я головний" ? "Вітаю!" : "Невірний пароль!")
// }
// else if (login === "" || login === null) {
//     alert("Скасовано");
// }
// else {
//     alert("Я вас не знаю");
// }

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = Number(prompt("Enter number from 1 to 4"));
// let result = "";

// switch (num) {
//   case 1:
//     result = "зима";
//     break;
//   case 2:
//     result = "весна";
//     break;
//   case 3:
//     result = "літо";
//     break;
//   case 4:
//     result = "осінь";
//     break;
//   default:
//     result = "Enter number from 1 to 4";
// }

// console.log(`${num} - ${result}`);

function checkNum(num) {
  if (typeof num !== "number") {
    return "not a number";
  }
  switch (num) {
    case 1:
      return `${num} - зима`;
    case 2:
      return `${num} - весна`;
    case 3:
      return `${num} - літо`;
    case 4:
      return `${num} - осінь`;
    default:
      return `Enter number from 1 to 4`;
  }
}

console.log(checkNum("2"));
