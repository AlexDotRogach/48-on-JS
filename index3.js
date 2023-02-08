// Порахуйте скільки повторюваних значень
// у масиві та видаліть дублікати
// result:
// [1,1,3,4,5,6,7,8,9,12,9,9,7] => our arr: 1,3,4,5,6,7,8,9,12
//                                 Repeated elements: 1,9,9,7

const arrNumbers = [1, 1, 3, 4, 5, 6, 7, 8, 9, 12, 9, 9, 7];
const arrDuplicate = [];
const result = [];

// for (const number of arrNumbers){
//     if(result.includes(number)){
//         arrDuplicate.push(number)
//         continue;
//     }
// result.push(number)

// }
// console.log(`
//     our arr: ${result}
//     Repeat elements: ${arrDuplicate}
// `)


for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers.indexOf(arrNumbers[i]) === i) {
        result.push(arrNumbers[i])
        continue
    };``

    arrDuplicate.push(arrNumbers[i])
}

console.log(result, arrDuplicate)