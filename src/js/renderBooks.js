import getBooks from "./api/requests/getBooks";
import getBookMarkup from "./getBookMarkup";
import refs from "./refs";

const { books : booksElem } = refs;

function renderBooks() {
    getBooks()
    .then(books => {
        booksElem.replaceChildren();

        const booksTemplates = books.map(book => getBookMarkup(book)).join('');
        booksElem.insertAdjacentHTML("beforeend", booksTemplates)
    });
};

export default renderBooks;


