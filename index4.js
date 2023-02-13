// є масив об`єктів потрібно вивести шаблоний рядок з віком 
// та неймом користувачів

const arr = [
    {
        name: "Alex",
        age: 23
      },
      {
        name: "Dima",
        age: 25,
      },
      {
        name: "Vasya",
        age: 16,
      }
]

for (const {name, age} of arr) {
  console.log(`name - ${name}, age - ${age}`)
}