// Напишіть функцію getAvgSalary(emp),
// яка приймає масив об'єктів
// із властивістю salary та повертає середню заробітну плату.

const employees = [
    { name: "Nikita", salary: 500 },
    { name: "Vladimir", salary: 700 },
    { name: "Vasya", salary: 350 }
] 

// function getAvgSalary(employees) {
//     const salaries = employees.map(employee => employee.salary)
//     let averageSalaries = 0;
//     salaries.forEach(salary => averageSalaries += salary)
//     return Math.round(averageSalaries / salaries.length)
// }

//  console.log(getAvgSalary(employees))


// function getAvgSalary(employees) {
//     return Math.round(employees.reduce((salaries, employee) => {
//         return salaries + employee.salary
//     } , 0) / employees.length)
// }

//  console.log(getAvgSalary(employees))


console.log(
    employees.reduce((total, {name, salary}) => {
        if (salary > 500) {
            total.push({name: name + " Rich", salary})
        } else {
            total.push({name: name + " Broke", salary})
        }

        return total;
    }, [])
);