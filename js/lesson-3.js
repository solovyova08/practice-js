const tweets = [
  {
    id: "000",
    name: "Alex",
    gender: "male",
    likes: 5,
    tags: ["js", "nodejs"],
  },
  {
    id: "001",
    name: "Kate",
    gender: "female",
    likes: 2,
    tags: ["html", "css"],
  },
  {
    id: "002",
    name: "Maria",
    gender: "female",
    likes: 17,
    tags: ["html", "js", "nodejs"],
  },
  {
    id: "003",
    name: "Borys",
    gender: "male",
    likes: 8,
    tags: ["css", "react"],
  },
  {
    id: "004",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "005",
    name: "Anna",
    gender: "female",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "006",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
];

// 1. Створити функцію getNames(array), яка приймає масив об'єктів
// і повертає масив імен усіх користувачів (поле name).
// *зробити функцію універсальною getRandomValues(array, prop), щоб вона повертала
// масив значень будь-якої заданої властивості
// **з перевіркою наявності такої властивості:
// якщо властивості немає - повертати 'Sory, no such property in array!'

// function getNames(array) {
//     return array.map(element => element.name);
// }

// console.log(getNames(tweets));

// function getRandomValues(array, prop) {
//     if (array.every(element => element[prop]))
//         return array.map(element => element[prop]);
//     return 'Sory, no such property in array!';
// }

// console.log(getRandomValues(tweets, 'tags'));

// // 3. Написати функцію getUsersWithGender(array, gender), яка приймає масив і стать
// // і повертає масив імен користувачів по цій статі (властивість gender)

// function getUsersWithGender(array, gender) {
//     // return array.filter(element => element.gender === gender).map(element => element.name);
//     return array.reduce((acc, element) => {
//         if (element.gender === gender)
//             acc.push(element.name);
//         return acc;
//     }, []);
// }

// console.log(getUsersWithGender(tweets, 'male'));

// 2. Напишіть функцію getUsersWithJs(array), яка приймає масив об'єктів і повертає масив тільки тих користувачів,
// у кого є тег "js" (властивість tags)

// function getUsersWithJs(array) {
//   return array.filter((element) => element.tags.includes("js"));
// }

// console.log(getUsersWithJs(tweets));

// 5. Написати функцію getSortedUniqueTags(array), яка приймає масив
// і повертає масив всіх тегів усіх користувачів (поле tags), при цьому не повинно бути
// повторювань тегів і вони мають бути відсортовані в алфавітному порядку.
// Використай ланцюжок методів.

// function getSortedUniqueTags(array) {
//   return array
//     .flatMap((element) => element.tags)
//     .filter((element, i, arr) => arr.indexOf(element) === i)
//     .toSorted((a, b) => a.localeCompare(b));
// }

// console.log(getSortedUniqueTags(tweets));

// 6. Напишіть функцію getStatiscticsOfTags(array), яка приймає масив
// і повертає об'єкт статистики, який враховує скільки разів повторюється кожен тег
// в усіх користувачів разом (не для кожного окремо)
// має бути відповідь: {js: 5, nodejs: 5, html: 2, css: 2, react: 4}

// function getStatiscticsOfTags(array) {
//   //   const statistic = {};
//   //   array
//   //     .flatMap((element) => element.tags)
//   //     .forEach((tag) => {
//   //       if (statistic[tag]) {
//   //         statistic[tag] += 1;
//   //       } else {
//   //         statistic[tag] = 1;
//   //       }
//   //       console.log(statistic);
//   //     });
//   //   return statistic;
//   return array
//     .flatMap((element) => element.tags)
//     .reduce(
//       (statistic, tag) => ({
//         ...statistic,
//         [tag]: statistic[tag] ? (statistic[tag] += 1) : 1,
//       }),
//       {}
//     );
// }
// console.log(getStatiscticsOfTags(tweets));

// 1. Створи клас User для створення користувача з такими властивостями:
// a. userName - ім'я, рядок
// b. age - вік, число
// c. numbersOfPost - кількість постів, число
// d. конструктор очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
// Додай метод getInfo(), який повертає рядок:
// `Користувачеві <name> <age> років і в нього <posts> публікацій.`
// Додай метод updateNumberOfPosts(amount), який оновлює кількість постів юзера
// де amount - це число, кількість постів, що має додаватись до вже існуючих у властивості numbersOfPost

// class User {
//   constructor(params) {
//     this.userName = params.userName;
//     this.age = params.age;
//     this.numbersOfPost = params.numbersOfPost;
//   }

//   getInfo() {
//     return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
//   }

//   updateNumberOfPosts(amount) {
//     this.numbersOfPost += amount;
//   }
// }

// const user1 = new User({
//   userName: "Denis",
//   age: 18,
//   numbersOfPost: 20,
// });

// console.log(user1.getInfo());
// user1.updateNumberOfPosts(10);
// console.log(user1);



// 2. Напиши класс Client який створює об'єкт
// із властивостями login, email
// Об'яви приватні властивості #login і #email,
// доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача


// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login
//     this.#email = email
//   }

//   get getClientData() {
//     return {clientLogin: this.#login, clientEmail: this.#email}
//   }

//   set changeEmail(newEmail) {
//     this.#email = newEmail
//   }

// }


// const client1 = new Client("client-1", "client1@example.com")
// console.log(client1.getClientData);
// client1.changeEmail = "client1-new@example.com"
// console.log(client1.getClientData.clientEmail);





// 3. Напиши класс Notes який управляє коллекцієй нотаток у
// властивості items.
// Нотатка це  об'єкт з властивостями text, priority
// Додай класу статичну властивість Priority,
// в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
// Додай методи getNotes(), addNote(note), removeNote(noteText)
// updatePriority(noteText, newPriority)



class Notes {

  static Priority = {
    HIGH: "high",
    MIDDLE: "middle",
    LOW: "low"
  }

  constructor() {
    this.items = []
  }

  getNotes() {
    return this.items
  }

  addNotes(note) {
    this.items.push(note)
  }

  removeNote(noteText) {
    this.items = this.items.filter((note) => note.text !== noteText)
  }

  updatePriority(noteText, newPriority) {
    const note = this.items.find((note) => note.text === noteText)
    if (note) {
      note.priority = newPriority
    }
  }

}


const testNote = new Notes()
testNote.addNotes({text: "Some text", priority: Notes.Priority.MIDDLE})
testNote.addNotes({text: "Lorem ipsum dolor", priority: Notes.Priority.HIGH})
testNote.addNotes({text: "Hello World!", priority: Notes.Priority.LOW})
testNote.removeNote("Some text")
testNote.updatePriority("Hello World!", Notes.Priority.HIGH)
console.table(testNote.getNotes())