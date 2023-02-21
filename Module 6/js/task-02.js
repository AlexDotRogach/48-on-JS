// Отримати всі елементи div з класом pane
// І перезаписати текст на текст із масива

const texts = [
  { name: "Кінь", text: "Навіщо я прочитав про коня" },
  { name: "Віслюк", text: "Навіщо я прочитав про віслюка" },
  { name: "Корова", text: "Навіщо я прочитав про корову" },
];


const textsObj = texts.reduce((accum, text) => {
  accum[text.name] = text;

  return accum
}, {})

console.log(textsObj)

// const panes = document.querySelectorAll(".pane") 

// console.log(panes);

// for (const pane of panes) {

//   const [title, text] = pane.children

//   console.log(pane)

//   texts.forEach( (textObj) => {

//   if (textObj.name === title.textContent) {
// console.log(text)
// text.textContent = textObj.text
//   }
//   } ) 

// }


const newContainer = document.querySelectorAll('.pane');

newContainer.forEach(el => {
  const [title, text] = el.children;

  if (textsObj.hasOwnProperty(title.textContent)) {
    text.textContent = textsObj[title.textContent].text;
  }
});


