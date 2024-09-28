// Additional HomeWork

// *HW1
// Напишіть функцію, яка шукатиме найдовше слово у реченні

// 1-way
// const findLongestWord = (str) => {
//     let longestWord = str
//         .split(" ")
//         .sort((a, b) => {return b.length - a.length})    

//     return longestWord[0]
// }

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'


// 2-way (Detailed)
// const findLongestWord = (str) => {
//     let longestWord = str
//         .split(" ")
//         .sort((a, b) => {return b.length - a.length})
    
//     let allLongestWords = []
//     for (let i = 0; i < longestWord.length; i++) {
//         if (longestWord[0].length === longestWord[i].length) {
//             allLongestWords.push(longestWord[i])
            
//         }
//     }

//     return `Перше найдовше слово: ${longestWord[0]}\nУсі найдовші слова: ${allLongestWords}`
// }

// console.log(findLongestWord("London is the capital of Great Britain"));



// *HW2
// Напишіть функцію, яка перевіряє, чи є
// рядок (без урахування регістра) паліндромом.
// Паліндром — це слово, число, фраза або інша
// послідовність символів, яка читається як
// в обратному, так і в прямому напрямку, наприклад,
// madam або racecar


// const isPalindrome = (str) => {

//     let newStr = [];
//     str = str.toLowerCase().split("")

//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr.push(str[i])
//     }
    
//     return str.join() == newStr.join()
// }

// console.log(isPalindrome("Abba")); //true
// console.log(isPalindrome("hello")); //false



// *HW3
// Напишіть скрипт керування особистим кабінетом інтернет банка
// Є об'єкт account в якому необхідно реалізувати
// методи для работи з балансом та історією транзакцій

// Типів транзакцій всього два.
// Можна покласти або зняти гроші з рахунка
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

// Кожна транзакція це об'єкт з властивостями id, type, amount

const account = {
  // поточний баланс рахунка
  balance: 0,

  // Історія транзакцій
  transactions: [],
  
  // Метод створює і повертає об'єкт транзакцій
  // Приймає сумму і тип транзакцій
  createTransaction(type, amount) {
    const id = this.transactions.length + 1
    return {
        id,
        type,
        amount,
    };
  },

  // Метод відповідає за додавання сумми к балансу.
  // Приймає сумму транзакціи.
  // Визиває createTransaction для створення об'єкта транзакціи
  // після чого додає його в історію транзакцій
  deposit(amount) {
    const transaction = this.createTransaction(Transaction.DEPOSIT, amount)
    this.transactions.push(transaction)
    this.balance += amount
    console.log(`Депозит у розмірі ${amount} додано. Новий баланс: ${this.balance}`)
  },

  // Метод відповідає за зняття сумми з балансу.
  // Приймає сумму транзакціи.
  // Визиває createTransaction для створення об'єкта транзакціи
  // після чого додає його в історю транзакцій
  // Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  // що недостатньо коштів на рахунку
  withdraw(amount) {
    const transaction = this.createTransaction(Transaction.WITHDRAW, amount)
    this.transactions.push(transaction)
    if (this.balance >= amount) {
        this.balance -= amount
        console.log(`Знято ${amount}. Новий баланс: ${this.balance}`)
    } else {
        console.log(`Недостатньо коштів. Спроба транзакції на ${amount}. Баланс: ${this.balance}`)
        
    }
  },

  // Метод повертає поточний баланс
  getBalance() {
    return this.balance
  },

  // Метод шукає і повертає об'єкт транзакціи по id
  getTransactionDetails(id) {
    return this.transactions.find(transaction => transaction.id == id)
  },

  // Метод повертає кількіств коштів вказаного типу
  // транзакціи зі всієї історії транзакцій
  getTransactionType(type) {
    return this.transactions
        .filter(transaction => transaction.type === type)
        .reduce((acc, curr) => acc + curr.amount, 0)
  },
};


account.deposit(100)
account.withdraw(25)
account.withdraw(15)
account.deposit(50)

console.log("Транзакція із заданим id: " + account.getTransactionDetails(1))
console.log("Сума всіх поповнень: " + account.getTransactionType(Transaction.DEPOSIT))
console.log("Сума всіх витрат: " + account.getTransactionType(Transaction.WITHDRAW))
// console.table(account.transactions)

