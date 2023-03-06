import './task1.css';
// Створити функцію getUser, яка отримує першим параметром
// логін користувачів веб-сервісу «Github».
// Вивести на сторінку дані із запиту в контейнер name та date(created_at).
// Виводити лише дату та ім'я
// https://api.github.com/users/ім'я нашого користувача - api

{/* <span class="name"></span>
<span class="date"></span> */}
import getUser from './api/getUser'
import createMarcupUser from './createMarcupUser'

const form = document.querySelector('.form');
const data = document.querySelector('.data');

form.addEventListener('submit', fetchUser)

function fetchUser (event){
    event.preventDefault();

    const userName = event.currentTarget.elements.user.value;
    
    getUser(userName).then(user => {        
        if (data.children.length >= 2) data.removeChild(data.lastElementChild)
        
        data.insertAdjacentHTML('beforeend', createMarcupUser(user))
    }).finally(() => {
        event.target.reset()
    })
}

