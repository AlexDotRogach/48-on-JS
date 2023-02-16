// Створити функцію конструктор робітника
// Створити метод у об'єкта
// який буде рахувати заробітну плату (salary * workDay)
// Та перебрати масив і викликати цей метод для кожного елемента

const employeesClear = [
  {
    name: "Alex",
    salary: 500,
    workDay: 5,
  },
  {
    name: "Dima",
    salary: 200,
    workDay: 3,
  },
  {
    name: "Vasya",
    salary: 600,
    workDay: 21,
  },
  {
    name: "Sergei",
    salary: 400,
    workDay: 23,
  },
];
 

function Employee({ name, salary, workDay = 210 }) { 
  this.name = name;
  this.salary = salary;
  this.workDay = workDay;
  
  this.getSalary = () => this.workDay * this.salary;
}

const employees = employeesClear.map(employee => new Employee(employee));

employees.forEach(employee => console.log(employee.getSalary()));

console.log(employees[0])

