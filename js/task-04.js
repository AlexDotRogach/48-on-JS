// Є інпут з вибором типу фігури
// При зміні значення інпута
// div з атрибутом canChange змінюються
// на ті, що були обрані в інпуті




//   circle
//   rectangle
// const selectType = document.querySelector('#type');
// const changeEl = document.querySelectorAll('div[canchange]');
// const defaultStyleEl = 'circle';

// selectType.addEventListener('change', changeTypeEl);
// changeEl.forEach(el => el.addEventListener('mouseout', setDefault))

// function setDefault(event){
//     event.target.classList.remove(event.target.classList);
    
//     event.target.classList.add(defaultStyleEl);
// }

// function changeTypeEl(event){
//     changeEl.forEach(el=>setTypeEl(el,event))
// }

// function setTypeEl(el,event){
//     el.classList.remove(el.classList);
//     console.log(el.classList)
//     el.classList.add(event.currentTarget.value)
// }

const selectType = document.querySelector('#type');
const changeEl = document.querySelectorAll('div[canchange]');
const defaultStyleEl = selectType.firstElementChild.value;
const typeOfDivs = [...selectType.children].map(item => item.value);

selectType.addEventListener('change', changeTypeEl);
changeEl.forEach(el => el.addEventListener('mouseout', setDefault))

function setDefault({target}){
    controlClassList(target)
}

function changeTypeEl(event){
    changeEl.forEach(el => setTypeEl(el, event))
}

function setTypeEl(el, {currentTarget : {value}}){
    controlClassList(el, value)
}

function controlClassList (el, value = defaultStyleEl) {
    el.classList = [...el.classList].filter(elem => !typeOfDivs.includes(elem))
    el.classList.add(value)
}