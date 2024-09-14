// 1. Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте в кінець 'rock-n-roll'
// Заменіть значення 'blues' на 'classic'
// Напишіть функцію logItems(array), яка приймає
// масив і використовує цикл for, який для кожного елемента
// буде виводити повідомлення у форматі:
// <номер елемента> - <значення елемента>
// Нумерація має починатись з 1

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// // styles[1] = 'classic';
// styles[styles.indexOf('blues')] = 'classic';

// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }

// logItems(styles);
// 2. Напиши функцію checkLogin, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в prompt у цьому масиві і у разі,
// якщо є - виводить повідомлення в alert "Welcome, <name>!"
// в іншому випадку - "User not found"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const userInput = prompt("Enter your login");

//   if (array.includes(userInput)) {
//     alert(`Welcome, ${userInput}!`);
//   } else {
//     alert("User not found");
//   }
// }
// checkLogin(logins);

// / 4. Напишіть функцію calculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа

// function calculateAverage() {
//   let total = 0;
//   let counter = 0;
//   for (const arg of arguments) {
//     if (typeof arg === "number") {
//       total += arg;
//       counter += 1;
//     }
//   }
//   return total / counter;
// }
// console.log(calculateAverage(2, 6 ,8, "hello"));

// 3. Напишіть функцію, яка складатиме сусідні числа і пушитиме їх в новий масив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumPairs(array) {
//   let newArray = []

//   for (let i = 0; i < array.length - 1; i++) {
//     let currentElement = array[i]
//     let nextElement = array[i+1]
//     newArray.push(currentElement+nextElement)
//   }

//   return newArray
// }

// console.log(sumPairs(someArr))

// 7. Напиши скрипт, який для об'єкту user,
// послідовно:
// 1 - додасть поле mood зі значенням 'happy'
// 2 - замінить hobby на 'skydiving'
// 3 - замінить значення premium на false
// 4 - виводить зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// let userInfo = Object.keys(user);
// for (const key of userInfo) {
//   console.log(`${key}:${user[key]}`);
// }

// 7. Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
let sum = 0;
let allSalaries = Object.values(salaries);
for (const value of allSalaries) {
  sum += value;
}
console.log(sum);
