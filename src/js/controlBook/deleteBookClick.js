import deleteBook from "../api/requests/deleteBook";

function deleteBookClick (event){
    if (!event.target.classList.contains('delete')) return;

    const bookId = event.target.parentElement.dataset.id

    deleteBook(bookId)
    event.target.parentElement.remove()
}

export default deleteBookClick