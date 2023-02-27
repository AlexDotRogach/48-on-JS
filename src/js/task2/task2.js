import './task2.css';
import getFizzBazz from './fizz-bazz'
// Потрібно написати функцію, що
// виводить у консоль числа від 1 до n, де n
// - це ціле число, яка функція приймає
// як параметр, з такими умовами:
// виведення fizz замість чисел, кратних 3;
// виведення buzz замість чисел, кратних 5;
// виведення fizz buzz замість чисел, кратних як 3, і 5.

function consoleControle (n) {
    for (let i = 1; i <= n; i += 1){
       console.log(getFizzBazz(i))
    }
}

consoleControle(9);