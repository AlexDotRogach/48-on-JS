import postBooks from "./api/requests/postBook";
import { headers } from "./api/const";

function postFormSubmit(event){
    event.preventDefault();

    const objValue = {}

    const formData = new FormData(event.currentTarget)

    for (let [key,value] of formData){
        objValue[key] = value
    }

    console.log(objValue);

    postBooks(headers("POST", objValue))

}


export default postFormSubmit;