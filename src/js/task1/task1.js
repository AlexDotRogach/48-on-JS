import './task1.css';
// Вбудована функція setTimeout використовує колбек-функцію.
// Створіть альтернативу, яка використовує проміси.
// Функція delay(ms) повинна повертати проміс,
// який перейде в стан "виконаний" через ms мілісекунд,
// так щоб ми могли додати до нього .then:

// 2
// Зробити так, щоб promise повертал значеня у вигляді часу
// та вивести
// масив виконання всіх промісів

function delay(ms){
return new Promise((resolve,reject) => {
    if (ms < 2000){
        reject(`error haven\`t done by ${ms}`)
    }

    setTimeout(()=> {
        resolve(ms)
    }, ms)
})
}

function delayControl(ms){
    delay(ms)
        .then(time => console.log(`Проміс завершився за ${time}`))
        .catch(err => console.log(`this is an error - ${err}`))
}

Promise.allSettled([delay(3000),delay(2000),delay(2000)]).then(data => console.log(data)).catch(err => console.log(err))