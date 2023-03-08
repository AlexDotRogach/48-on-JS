import { BASE_URL } from "../const";

function getBooks() {
    return fetch(`${BASE_URL}`).then(response => {
        if (!response.ok) {
            throw new Error (response.Error);
        }

        return response.json();
    })
};

export default getBooks;

// POST - body 
// PUT / PUTCH - id and body
// delete - id
// get - null 