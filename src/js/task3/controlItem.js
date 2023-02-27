export function addItem (evt, parent) {
    evt.preventDefault();
  
    const inputValue = evt.currentTarget.elements.text.value;
  
    const isValue = [...parent.children].findIndex(item => item.firstElementChild.textContent === inputValue);
  
    if (isValue >= 0) return;
  
    parent.insertAdjacentHTML('beforeend', createItemMarkup(inputValue));
}

export function removeItem({target : {classList, parentElement}}) {
    if (!classList.contains("delete")) return;

    parentElement.remove()
}
  
export function createItemMarkup (text) {
    return `<div class="item">
        <div class="text">${text}</div>
        <button class="delete">remove</button>
    </div>`;
}

