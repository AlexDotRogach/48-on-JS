// Потрібно викинути мусор з массива, якщо там є
// null, undefined, true, false то видаляємо та
// Виводемо скільки мусора ми знайшли

// const arr = [1, 2, true, 3, undefined, "str", null, "asd", false]; --> [1,2,3,"str","asd"]

const arr = [1, 2, true, 3, undefined, "str", null, "asd", false];
let counter = 0;
const missValues = [true, undefined, null, false];
const result = [];

for (const item of arr) {
    if (missValues.includes(item)) {
        counter+=1;
        continue;

    }
    result.push(item);  

}

console.log(result);
// console.log(`counter: ${counter}`)
console.log(arr.length - result.length)