// Написати функцію,
// яка поверне массив об'єктів,
// але замість імені буде перегорнуте ім'я

let users = [
  { id: "john", name: "John Smith", age: 16 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

const usersModificate = users.map((user) => {
    const { name, age} = user;

    const resultName = age > 18 ? name + " Adult": name + " Little";

    return {...user, name: resultName}
})

console.log(usersModificate)

function reverseString(str) {
    return str.split("").reverse().join("")
}


// {
//     key:value
// }