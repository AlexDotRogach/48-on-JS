import { BASE_URL, headers } from "../const";

// function updateBook(id, data) {
//     return fetch(`${BASE_URL}/${id}`, headers("PATCH", data)).then(response => {
            
//         if (!response.ok) {
//             throw new Error (response.Error);
//         }

//         return response.json();
//     })
// };

const actionErrorRequest = {
    "404" : "Not found you do mistakes, please leave this site"
}

async function updateBook(id, data) {
    try {
        const response = await fetch(`${BASE_URL}/123`, headers("PATCH", data));

        if (!response.ok) throw new Error (actionErrorRequest[`${response.status}`] || "Error")

    } catch (error){
        console.log(new Error (error))
    }
};

export default updateBook;


