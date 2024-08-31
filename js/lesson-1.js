//Використовуя if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

const question = prompt("Яка офіційна назва JavaScript?");

if (question.toLowerCase() === "ecmascript") {
  alert("Вірно!");
} else {
  alert("Не знаєте? ECMAScript!");
}
