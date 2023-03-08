import refs from './refs';
import  toggleForm  from './toggleForm';
import renderBooks from './renderBooks';
import postFormSubmit from './postFormSubmit';

const{ controlsBtn, forms } = refs;
const [ addForm ] = forms;

renderBooks();


controlsBtn.addEventListener('click', toggleForm);
addForm.addEventListener('submit',postFormSubmit);
