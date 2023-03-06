import './task2.css';
import { fetchUsers } from './api/api'

// При натисканні на look for потрібно вивести юзерів
// в блок data. Та потім реалізувати пошук на стороні клієнта 
// за імʼям.
// 'https://jsonplaceholder.typicode.com/users' - api

const formRef = document.querySelector('#form')
const data = document.querySelector('div.data');
const input = document.querySelector('input.validate');

formRef.addEventListener('submit', lookForUsers)
input.addEventListener('input', filterUsers)

function filterUsers(evt) {
    const filter = evt.currentTarget.value;
    const usersData = sessionStorage.getItem('users');
    
    if (!usersData) return

    renderUsers(JSON.parse(usersData).filter(user => user.name.includes(filter)))
};

function lookForUsers(e){
    e.preventDefault()
    fetchUsers().then(renderUsers)
}

function renderUsers(users) {
    if (!sessionStorage.getItem('users')) sessionStorage.setItem('users', JSON.stringify(users));
    
    const usersMarkup = `
        <ul>
            ${users.map(createUserMarkup).join("")}
        </ul>
    `

    // data.replaceChildren();

    while(data.firstChild) {
        data.firstChild.remove()
    }

    data.insertAdjacentHTML('beforeend', usersMarkup);
};

function createUserMarkup({name}) {
    return `<li>${name}</li>`;
};