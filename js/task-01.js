// Дано посилання. Прив'яжіть всім
// посиланням подію - за наведенням на
// посилання в атрибут title запишеться її текст(textContent).


const obj = {
    name : "Alex"
}

 const links = document.querySelectorAll('a');

links.forEach(link => link.addEventListener('mouseout', addTitle.bind(obj)));

function addTitle (event) {
    console.log(this.name)
    event.target.dataset.title = event.target.textContent;
}






// () => {

// }


// element.dataset.title = your value