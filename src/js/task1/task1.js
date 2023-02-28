import './task1.css';

// Є 2 input, перший відповідає за ключ об'єкта інший за значення.
// Зробіть так, щоб у консоль виводився об'єкт після відправки,
// використовуй json parce. Приклад формату json: '{"key":"sad","value":"asd"}'
// сформований об'єкт повинен збергіатися в стореж

const isNewObj = localStorage.getItem("newObj");

createTemplateByDataFromLocalStorge(JSON.parse(isNewObj))


const form = document.querySelector("#form");

form.addEventListener("submit", createObjBySubmit);

function createObjBySubmit(event) {
    event.preventDefault();

    // console.log(event.currentTarget.elements)

    const { key, value } = event.currentTarget.elements;

    // console.log(key, value)

    const newObj = {key : key.value, value : value.value}

    // console.log(newObj)

     localStorage.setItem ('newObj', JSON.stringify(newObj));
}

function createTemplateByDataFromLocalStorge(obj = {}) {
    obj?.key && console.log(obj.key)
}

// const obj = {
//     name : "Alex"
// }


// const {name} = obj

// console.log(name)


