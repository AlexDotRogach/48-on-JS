function createMarcupUser({name, created_at}     ){
    return `<div>
        <span class="name">${name}</span>
        <span class="date"></span>${created_at}
    </div>`
}

export default createMarcupUser;