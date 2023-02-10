// Напишіть функцію, яка
// поверхнево зрівнює два об'єкта.

const obj1 = {
  name: "Alesx",
  surname: "Test3",
};

const obj2 = {
  name: "Alex",
  surname: "Test3",
};

function comprObject(objectFirst,objectSecond){

  return `${Object.keys(objectFirst)}${Object.values(objectFirst)}` === `${Object.keys(objectSecond)}${Object.values(objectSecond)}`

  // for (const key in objectFirst) {
  //   if (objectFirst[key] !== objectSecond[key]) return false
  // }
  
  // return true;
}

console.log(comprObject(obj1,obj2))
