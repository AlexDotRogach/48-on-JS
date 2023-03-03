import './task3.css';

// Написати сценарій, при якому при натисканні кнопки чек,
// ми перевіряємо текст і якщо якась літера повторилася понад
// 5 разів
// то виводимо: letter |your letter| repeated more than five times
// Якщо все добре в консолі ми повинні побачити:
// a repeated 3 times task3.js:28:13
// s repeated 3 times task3.js:28:13
// d repeated 3 times task3.js:28:13
//   repeated 2 times

// архітектра побудована на промісах

const formEl= document.querySelector('#form');

formEl.addEventListener('submit', checkText);

function checkText (event) {
    event.preventDefault();
    const text = event.currentTarget.elements.text.value;
    const arrayFromText = [...text];
    const objectText = arrayFromText.reduce((counter, letter) => {
        if (counter[letter]){
            counter[letter]+=1 ;
        } else {
            counter[letter] =1;
        }

        return counter;
    }, {})

    infoLetters(objectText)
    .then(object => {
        Object.entries(object)
        .forEach(([key, value]) => console.log(`${key} repeated ${value} times`))
    }).catch(console.log)
}

function infoLetters (object){
    return new Promise ((resolve, reject) => {
        for (const letter in object) {
            if (object[letter]>5){
                reject(`letter |${letter}| repeated more than five times`)
            }
        }
        resolve (object)
    })
}


// new Promise((res, rej) => {
//     res("text")
// }).then(text => {
//     if(text.length === 4) {
//         throw new Error("four")
//     }

//     console.log(text);

// }).catch(error => {
//     console.log(error)
// })


try {
    const l = 0;

    throw new Error(l)
} catch(error) {
    console.log(error)
}