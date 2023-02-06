// 2.
// Написати сценарій, якій буде
// виводити чи парне введене число.
// Якщо так виводити за допомогою alert - так парне,
// якщо ні то - не парне.

const numberFromUser = prompt("Введіть число");
const result = (numberFromUser % 2 === 0 && "парне") || "непарне";

alert(result);


// const str = "test"
// let test = 5;


// if (str.length == 4) {
//     test = 10;
// }


const str = "test"
let test = (str.length === 4 && 10) || 5;