// Вивести кількість вкладених об'єктів в об'єкті

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats1: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
  arr: [11, 22, 33],
};

// function objAmount(obj) {
//   const newObject = {
//       counter: 0
//   };

//   const values = Object.values(obj);
//   console.log(values);

//   for (const value of values) {
//     if (typeof value === 'object' && !Array.isArray(value)) {
//       newObject.counter += 1;
//     };
//   }
//   return newObject;
// };

function objAmount(obj) {
  const newObject = {
      counter: 0
  };

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === 'object' && !Array.isArray(value)) 
      newObject.counter += 1;
  }

  return newObject;
};


console.log(objAmount(user));

// console.log(Array.isArray(["da"]))