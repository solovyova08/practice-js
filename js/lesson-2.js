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

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// let allSalaries = Object.values(salaries);
// for (const value of allSalaries) {
//   sum += value;
// }
// console.log(sum);

// 9. Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх
// як властивості об'єкта
// sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
// mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// raise() возводить першу властивсть в ступінь другої і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// * винеси перевірку  на наявність властивостей в об'єкті в окремий метод exist ()

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   sum() {
//     // if (this.exist()) return this.a + this.b;
//     return this.exist() ? this.a + this.b : "values not found";
//   },
//   mult() {
//     // if (this.a && this.b) return this.a * this.b;
//     return this.exist() ? this.a * this.b : "values not found";
//   },
//   raise() {
//     // if (this.a && this.b) return this.a ** this.b;
//     return this.exist() ? this.a ** this.b : "values not found";
//   },
//   exist() {
//     return this.a && this.b;
//   },
// };

// // calculator.read(3, 4);
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator.raise());



// 10. Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;

const phonebook = {
    contacts: [],
    add(data) {

      for (const contact of this.contacts) {
        if (contact.name === data.name || contact.email === data.email) {
          return console.log("Contact already exists!")
        }
      }

      let newContact = {
        name: data.name,
        email: data.email,
        category: data.category ?? "default",
        id: this.generateId(),
        createdAt: this.getDate()
      }

      this.contacts.push(newContact)
    },
    list() {
      console.table(this.contacts)
    },
    filtered(category) {
      let filteredArray = []
      for (const contact of this.contacts) {
        if (contact.category === category) {
          filteredArray.push(contact)
        }
      }

      return filteredArray
    },
    delete(name) {
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].name === name) {
          this.contacts.splice(i, 1)
        }
      }
    },
    updateName(oldName, newName) {
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].name === oldName) {
          this.contacts[i].name = newName
        }
      }
    },

    generateId() {
      return "#" + Math.random().toString(36).substr(2, 9);
    },
    getDate() {
      return Date.now();
    },
  };


   phonebook.add({
      name: "Mango",
      email: "mango@mail.com",
      category: "friends",
    });
    
    phonebook.add({
      name: "Poly",
      email: "poly@hotmail.com",
    });
    phonebook.add({
      name: "Katy",
      email: "katy@hotmail.com",
      category: "friends",
    });
    phonebook.add({
      name: "Katy",
      email: "katy@hotmail.com",
      category: "friends",
    });
    // phonebook.delete("Mango");
    phonebook.updateName("Poly", "Sara");
    console.log(phonebook.filtered("friends"));
    phonebook.list();