// Створити функцію, яка з об'єкта
// створює масиви та повертає об'єкт цих масивів
// 1 - ключі, 2 значення
// результат: {keys: [], values: [] }

const obj = {
  first: "valueFirst",
  second: "valueSecond",
  third: "valueThird",
};

// function createNewObject(object){

//   const newObject  = {
//     keys: [],
//     values: []
//   };

//   for (const key in obj) {
//     newObject.keys.push(key);
//     newObject.values.push(obj[key]);

//   }
//   return newObject;
// }
// console.log(createNewObject(obj));

function createNewObject(object){

  return {
    keys: Object.keys(object),
    values: Object.values(object)
  };

}
console.log(createNewObject(obj));
