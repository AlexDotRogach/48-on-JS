import { URL } from './const'



function getUser(name){
    return fetch(`${URL}/${name}`).then(response =>{
        if(!response.ok){
            throw new Error('bad request')
        }
        return response.json()
    }).catch(error => {
        console.log(error)
    })
}

export default getUser;
