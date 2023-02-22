//Дані div. По першому натисканні на кожен div він фарбується
// червоним, по другому фарбується назад і так далі кожен клік
// відбувається чергування фону. Зробіть так, щоб було дві функції:
// одна фарбує в червоний колір, інша в зелений і вони змінювали один
// одного через removeEventListener.

const divsEl = document.querySelectorAll('div');
console.log(divsEl);

divsEl.forEach(div => div.addEventListener('click', setRed));

function setRed(evt) {
    const setting = {color: "red", callbackOn : setRed, callbackDown: setGreen}
    controlColorState(evt, setting)
};

function setGreen(evt) {
    const setting = {color: "green", callbackOn : setGreen, callbackDown: setDefault}
    controlColorState(evt, setting)
};

function setDefault(evt) {
    const setting = {color: "black", callbackOn : setDefault, callbackDown: setRed}
    controlColorState(evt, setting)
}

function controlColorState(evt, {color, callbackOn, callbackDown}) {
    evt.target.style.backgroundColor = color;
    evt.target.removeEventListener('click', callbackOn);
    evt.target.addEventListener('click', callbackDown);
}