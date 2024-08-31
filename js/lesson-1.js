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


function task3(min, max) {
    let sum = 0;

    for (let i = max; i >= min; i--) {
        console.log(i);

        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}

console.log("Result: " + task3(0 ,15));