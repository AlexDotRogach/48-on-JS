export const BASE_URL = " http://localhost:4000/books"
export const headers = (type, body) => {
    return {
        method: type,
        body: JSON.stringify(body),
        headers : {
            "content-type": "application/json",
            "charset" : "UTF-8"
        }
    }
}

