// Реалізуйте клас Worker (Працівник), який матиме
// такі властивості:
// name (ім'я), surname (прізвище), rate (ставка за день роботи), days 
// (кількість відпрацьованих днів).
// Також клас повинен мати метод getSalary(),
// який виводитиме зарплату працівника.
// Зарплата - це добуток (множення) ставки rate на
// кількість відпрацьованих днів days
// зробити можливість додавання відділу, але перевіряти чи є в нього відділ 
// якщо є то повертаємо помилку.

const workers = [
  { name: "Erick", surname: "Vasin", rate: 50, days: 21 }, 
  { name: "Dima", surname: "Test", rate: 20, days: 11 },
  { name: "Vasya", surname: "Test1", rate: 32, days: 5 }
];


class Worker {
  static divisions = ["manager", "developer", "architect", "tester"];

  #name;
  #surname;
  #rate;
  #division;

  constructor({ name, surname, rate, days } = {}) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.#rate * this.days;
  }

  nextDay() {
    this.days++;
  }

  get rate () {
    return this.#rate
  }

  set rate (newRate) {
    this.#rate = newRate;
  }
  
  get division() {
    return this.#division;
  }

  set division(newDivision) {
    if (Worker.divisions.includes(this.#division)) {
      console.log(`current division is ${this.#division} you can\`t set ${newDivision} `)
      return 
    }
    
    this.#division = newDivision;
  }
}

const workersInstances = workers.reduce((workersObject, worker) => {
  workersObject[worker.name] = new Worker(worker);
  return workersObject;
}, {});

console.log(workersInstances)

workersInstances.Vasya.division = Worker.divisions[1];
console.log(workersInstances.Vasya.division);

workersInstances.Vasya.division = Worker.divisions[2];




