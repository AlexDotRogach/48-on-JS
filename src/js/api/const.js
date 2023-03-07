const defaultUrl='https://pokeapi.co/api/v2/pokemon/'
const setUrl = (limit,offset) => {
    return `${defaultUrl}?limit=${limit}&offset=${offset}`
}

export default setUrl;