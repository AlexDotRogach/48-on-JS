// Зробит так,
// щоб була змога викликати метод
// getName на company1

const company1 = {
  name: "Hexlet",
  getName: function() {
    let total = 0;

    return () =>  {
      return `${this.name} ${total}`;
    }
  }
};

console.log(company1.getName()());


// function Test(name) {
//   this.name = name;
//   this.showName = () => {
//     console.log(this.name)
//   }
// }


// const test = new Test("Alex");
// console.log(Test)

// test.showName()
// // console.log(test)