import getBooks from "../api/requests/getBooks";

function isBook(nameBook){

    return getBooks().then(data => {
   
        const book = data.find(({ name }) => {
            return name === nameBook;
        })
 
        return book

    })
    
}

    export default isBook;
