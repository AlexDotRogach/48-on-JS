import refs from './refs';

const { forms } = refs;
const [ addForm, updateForm ] = forms;

function toggleForm(evt) {

    switch (evt.target.className) {
        case 'add':
            addForm.classList.add('show');
            updateForm.classList.remove('show');
            break;
        case 'update':
            addForm.classList.remove('show');
            updateForm.classList.add('show');
            break;
        case 'hide':
            addForm.classList.remove('show');
            updateForm.classList.remove('show');
            break;
    }
}

export default toggleForm;