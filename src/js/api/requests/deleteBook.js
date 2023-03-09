import { BASE_URL, headers } from "../const";

function deleteBook (id){
   
    fetch(`${BASE_URL}/${id}`, headers("DELETE", {})).then(response => {
            
        if (!response.ok) {
            throw new Error (response.Error);
        }

        return response.json();
    })
};

export default deleteBook;
