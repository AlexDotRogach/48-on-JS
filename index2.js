// Напишіть функцію addN(n), яка поверне іншу функцію.
// Повернена функція повинна складати одержуваний аргумент
// з аргументом n функції, що повертає


// function addN(n) {
//     return function addSecond(n2) {
//         console.log(n2 + n)
//     }
// }

// const twoValue = addN(2);
// const hundryValue = addN(100);
// const tenValue = addN(10);


// console.log(twoValue(10))
// console.log(hundryValue(10));
// console.log(tenValue(10));



function chooseBlock(blockName) {
    return function (numberOfFlat) {
        if (blockName === "A") {
            return [1,3,4,5,6,7].includes(numberOfFlat)
        }

        if (blockName === "B") {
            return [8,9,10,11].includes(numberOfFlat)
        }
    }
}


const blockA = chooseBlock("A");
const blockB = chooseBlock("B");


console.log(blockA(3))
console.log(blockB(3))
