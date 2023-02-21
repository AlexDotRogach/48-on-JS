// Отримати всі div і якщо
// дата атрибут дорівнюватиме
// good фарбувати в зелений якщо bad в червоний
// якщо unknown то в білий

// good  - green
// bad - red
// unknown - white
 
const objControl = {
    good: `green`,
    bad: `red`,
    unknown: `white`
}

const divs = document.querySelectorAll(`div`);

divs.forEach(changeColor)

function changeColor (div) {
    div.style.backgroundColor = objControl[div.dataset.name] ?? "blue";
}


// div.getAttribute();
// div.hasAttribute();
// div.setAttribute();
