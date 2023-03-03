import './task2.css';

// Створити функцію, яка повертатиме масив промісів.
// Параметр amount відповідає за те, скільки промісів ми створимо.
// Створити змінну, що регулюватиме в якому стані повернеться проміс
// Вивести проміси в консоль.


// console.log(Math.round(Math.random()))


function createPromise(){
  return  new Promise((resolve, reject)=>{
        const controlStatus = Math.round(Math.random())
        if (controlStatus){
            resolve(`promise true`)
        }
        else{
            reject(`promise false`)
        }
    })
}
function createPromiseByAmount(amount,create){
   const arrayOfPromises = [];
    for (let i = 0; i < amount; i++){
       arrayOfPromises.push(create())
    }
    return arrayOfPromises;
}
console.log(createPromiseByAmount(5,createPromise));

Promise.allSettled(createPromiseByAmount(5,createPromise)).then(data => {
    for (const obj of data) {
        // console.log(obj?.value || obj?.reason)
        const [,value] = Object.entries(obj);

        console.log(value)
    }

    
})