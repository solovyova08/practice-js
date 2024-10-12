// 1. Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const list = document.createElement("ul");

// const btnAdd = document.createElement("button");

// const btnRemove = document.createElement("button");

// const input = document.createElement("input");

// document.body.append(input, btnAdd, btnRemove, list);
// btnAdd.textContent = "add content";
// btnRemove.textContent = "remove content";

// btnAdd.addEventListener("click", createItem);

// function createItem() {
//     const inputValue = input.value.trim();
//     if (inputValue === "") return;

//     const item = document.createElement("li");
//     item.textContent = inputValue;
//     list.append(item);

//     // if (list.children.length % 2 === 0) {
//     //     item.style.backgroundColor = 'yellow'
//     // }
//     // else {
//     //     item.style.backgroundColor = 'blue'
//     // }

//     item.style.backgroundColor =
//         list.children.length % 2 === 0 ? "yellow" : "blue";

//     input.value = "";
// }

// btnRemove.addEventListener("click", removeItem);

// function removeItem() {
//     if (list.lastChild) list.lastChild.remove();
// }

// 2. Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//     "width: 100px; height: 100px; border-width: 1px;",
//     "width: 100px; height: 100px; border-radius: 50%;",
//     "width: 150px; height: 100px; border-width: 1px;",
//     "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//     "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//     return Math.floor(Math.random() * max);
// }

// const figure = document.createElement('div');
// function setRandomState() {
//     figure.style.cssText = forms[randomither(forms.length - 1)];
//     figure.style.backgroundColor = getRandomHexColor();
//     figure.style.position = 'absolute';
//     figure.style.top = `${randomither(90)}vh`;
//     figure.style.left = `${randomither(90)}vw`;
// }
// setRandomState();
// document.body.append(figure);

// figure.addEventListener('click', setRandomState)

// 3. Створити розмітку на основі масива даних, де у кожного елемента списку
// буде вказано ім'я, кількість лайків і перелічені теги
// в index.html додайте список ul.stats, в який буде рендеритись цей список
// *властивість gender використай для додавання відповідного класу елементу списка

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
        likes: 10,
        tags: ["js", "nodejs", "react"],
    },
    {
        id: "005",
        name: "Anna",
        gender: "female",
        likes: 3,
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

// буде вказано ім'я, кількість лайків і перелічені теги
// в index.html додайте список ul.stats, в який буде рендеритись цей список
// *властивість gender використай для додавання відповідного класу елементу списка

const stats = document.querySelector('.stats');
const markup = tweets.reduce((html, tweet) => {
    const li = `<li class="stats-item ${tweet.gender}"><p class='stats-name'>Name: ${tweet.name}</p><p class="stats-likes">Likes: ${tweet.likes}</p><p class="stats-tags">Tags: ${tweet.tags.join(', ')}</p></li>`;
    html += li;
    return html;
}, '');

stats.innerHTML = markup;

