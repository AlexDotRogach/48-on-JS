import updateBook from "../api/requests/updateBook";
import renderBooks from "../renderBooks";
import isBook from "../validation/isBook";

function updateFormSubmit(event){
    event.preventDefault();

    // const name = event.currentTarget.elements.name.value;
    // const rating = event.currentTarget.elements.rating.value;
    // const describe = event.currentTarget.elements.describe.value;

    const {
        currentTarget: {elements : {
            name : {value : name}, rating : {value : rating}, describe : {value : describe}
        }}
    } = event;

    isBook(name).then(book => {
       if (!book) {
            alert('The book is`t defined')
            return;
        } 
        
        updateBook(book.id, {rating, describe}).then(() => renderBooks())
    })
}

export default updateFormSubmit;



// [
//     [test, testValue],

// ]