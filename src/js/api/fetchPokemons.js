import setUrl from "./const"
 function fetchPokemons(url){
    return fetch(url).then(response=>{
        if(!response.ok){
            throw new Error('error')
        }
        return response.json()
    }).catch(error=>{
        console.log(error)
    })
}

export default fetchPokemons