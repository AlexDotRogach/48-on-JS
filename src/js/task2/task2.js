import './task2.css';

// 3) Напишіть функцію printNumbers(from, to),
// яка виводить число кожну секунду, починаючи
// з from і закінчуючи to.
// function printNumbers(from, to){

let counter = 0

let intervalId = setInterval(() => {
    counter++;
    printNumbers(counter, 5)
},1000)

function printNumbers(from, to) {
    if (from === to) {
      clearInterval(intervalId);
    }
    console.log(from)
}