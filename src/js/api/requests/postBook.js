import renderBooks from "../../renderBooks";
import { BASE_URL } from "../const";

function postBooks(header) {
    return fetch(`${BASE_URL}`,header).then(response => {
        if (!response.ok) {
            throw new Error (response.Error);
        }

        return response.json();
    }).then(() => {
        renderBooks();
    })
};  

export default postBooks;        