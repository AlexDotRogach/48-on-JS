import refs from './refs';
import toggleForm  from './toggleForm';
import renderBooks from './renderBooks';
import postFormSubmit from './controlBook/postFormSubmit';
import uppdateFormSubmit from './controlBook/updateFormSubmit';
import deleteBookClick from './controlBook/deleteBookClick';
import getBooks from './api/requests/getBooks';

const{ controlsBtn, forms, books } = refs;
const [ addForm, uppdateForm ] = forms;

renderBooks();

controlsBtn.addEventListener('click', toggleForm);
addForm.addEventListener('submit', postFormSubmit);
uppdateForm.addEventListener('submit', uppdateFormSubmit);
books.addEventListener('click', deleteBookClick)



// async function testWrapper () {
//     async function test() {
//         const books = await getBooks()
    
//         return books;
//     }
    
//     // test().then(data => {
//     //     console.log(data)
//     // })

//     const data = await test();

//     console.log(data)
// }


// console.log(testWrapper())
