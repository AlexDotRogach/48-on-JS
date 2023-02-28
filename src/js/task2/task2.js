import './task2.css';
import obj from './storage';

const { save, load } = obj;

// Зробити так, щоб при кліку на div у якого є атрибут data-order
// змінював колір. Реалізувати механізм, який буде зберігати
// стан нашого дива і при перезапуску сторінки зберігати колір.
const COLOR_KEY = 'colorDivs'
const container = document.querySelector('.container')
const dataFromStorageDivColor = localStorage.getItem(COLOR_KEY)

if (dataFromStorageDivColor) {
  setColorForDiv(JSON.parse(dataFromStorageDivColor), container)
}

container.addEventListener('click', clickChangeColor)

function clickChangeColor(event) {

const order = event.target.dataset.order

  if(!order){
    return
  }

  const randomColor = getRandomHexColor();

  event.target.style.backgroundColor = randomColor;

const colorDivs = localStorage.getItem(COLOR_KEY);
const currentObjData = {
  [order] : randomColor
}

    if (colorDivs){
      const colorDivsObj = JSON.parse(colorDivs)
      const dataForLocalStorage = {...colorDivsObj,...currentObjData}
      
      localStorage.setItem(COLOR_KEY, JSON.stringify(dataForLocalStorage))
    } else {
      localStorage.setItem(COLOR_KEY,JSON.stringify(currentObjData))
    }
}

function setColorForDiv(data, parent) {
  for (const div of parent.children) {
    if (data[div.dataset.order]) {
      div.style.background = data[div.dataset.order]
    }
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// {
//   order : randomColor 
// }
