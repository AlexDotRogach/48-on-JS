// Створити функцію, яка з 2 масивів створює
// об'єкт та повертає його
// 1 - ключі, 2 значення

const keysArr = ["first", "second", "third"];
const valuesArr = ["valueFirst", "valueSecond", "valueThird"]


function getObjFromArray (keys, values) {
    const newObj = {};

    if (keys.length !== values.length) {
        return `Довжина масивів не співпадає`
    }

    // for (const key of keys) {
    //     newObj[key] = values[keys.indexOf(key)];
    // } 

    for (let i = 0; i < keys.length; i++) {
        newObj[keys[i]] = values[i];
    }
    
   return newObj;
}

console.log(getObjFromArray(keysArr, valuesArr));