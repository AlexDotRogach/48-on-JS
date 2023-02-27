import './task1.css';
import reversStr from './reverseStr';
// Дано рядок; потрібно написати функцію,
// яка дозволяє повернути значення true,
// якщо рядок є паліндромом, і false - якщо ні.
// При цьому потрібно враховувати прогалини та розділові знаки.

// Паліндром
// Паліндром - слово, речення чи послідовність
// символів, яка абсолютно однаково читається як
// у звичному напрямку, так і у зворотному.
// Наприклад, "Anna" - це паліндром, а "table" і "John" - ні.

function checkPalindrom(str){
    str = str.toLowerCase();

    return str === reversStr(str) 
}

const phrase = "anna anna anna";

const phraseArr = phrase.split(" ");

let counter = 0;

for (const word of phraseArr) {
    if (!checkPalindrom(word)) return;

    counter++;
}

if (counter === phraseArr.length) {
    console.log("da")
}

// console.log([..."testasdasd"])
// console.log("sadasd".split(" "))

