import './task3.css';
import {addItem, removeItem} from './controlItem'
import {refs} from './const/refs'

// реалізувати toDo
// Додавання елементів 
// Видалення елементів

// для створення туду
{
  /* <div class="item">
  <div class="text">${text}</div>
  <button class="delete">remove</button>
</div>; */
}

const {form, items} = refs;

const addItemContext = (evt) => addItem(evt, refs.items);

form.addEventListener('submit', addItemContext);
items.addEventListener('click', removeItem)

