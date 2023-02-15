// Дано масив з рядками.
// Створіть функцію яка
// буде приймати масив та
// зробить великим перший символ кожного рядка.

const strings = ["java", "sql", "javaScript", "c++", "node"];
const arr = []

strings.forEach(callBack)


function callBack(item) {
    arr.push(item[0].toUpperCase() + item.slice(1))
}