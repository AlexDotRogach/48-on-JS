
import setUrl from "./api/const";
import fetchPokemons from "./api/fetchPokemons";
import renderPokemons from "./pokemonsControl/renderPokemons";
import refs from "./refs";
import toggleMoreInfo from "./userInterfaceControle/toggleMoreInfo";


const { loadMore, wrapper } = refs;
const sesStorageUrl = sessionStorage.getItem('nextUrl') || setUrl(20,20)
const renderPokemonsWithUrl = () => renderPokemons(sesStorageUrl)

loadMore.addEventListener('click', renderPokemonsWithUrl);
wrapper.addEventListener('click', toggleMoreInfo)

renderPokemons(setUrl(20,20))









