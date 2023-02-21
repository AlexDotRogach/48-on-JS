// Напишіть сценарій на JavaScript
// для встановлення кольору фону абзацу.
// Напишіть функцію яка буде повертати випадковий колір.
// та назначати абзацу

function randomColor() {
    return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
}

function randomNumber(){
    return Math.round(Math.random()*255)
}

console.log(randomColor())

const paragraphes = document.querySelectorAll('p');

for (const paragraph of paragraphes) {
    paragraph.style.backgroundColor = randomColor();
    paragraph.style.color = randomColor();
}


// console.log((Math.random()*255).toFixed())

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

console.log(getRandomHexColor());