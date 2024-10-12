// 1. Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement


const list = document.createElement('ul');

const btnAdd = document.createElement('button');

const btnRemove = document.createElement('button');

const input = document.createElement('input');

document.body.append(input, btnAdd, btnRemove, list);
btnAdd.textContent = 'add content';
btnRemove.textContent = 'remove content';

btnAdd.addEventListener('click', createItem);

function createItem() {
    const inputValue = input.value.trim();
    if (inputValue === '') return;

    const item = document.createElement('li');
    item.textContent = inputValue;
    list.append(item);

    // if (list.children.length % 2 === 0) {
    //     item.style.backgroundColor = 'yellow'
    // }
    // else {
    //     item.style.backgroundColor = 'blue'
    // }

    item.style.backgroundColor = list.children.length % 2 === 0 ? 'yellow' : 'blue';

    input.value = '';
}

btnRemove.addEventListener('click', removeItem);

function removeItem() {
    if(list.lastChild)
    list.lastChild.remove()
}
