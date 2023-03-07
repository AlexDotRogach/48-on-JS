import {markupPokemonBase} from "./createMarkupPokemons";
import fetchPokemons from "../api/fetchPokemons";
import refs from "../refs";
import hideLoadMore from "../userInterfaceControle/hideLoadMore";
const {wrapper,loadMore}=refs;

function renderPokemons(url){
    fetchPokemons(url).then(date=>{
      const templatePokemons = date.results.map(pokemon => {
        return markupPokemonBase(pokemon)
      }).join('');
  
      wrapper.insertAdjacentHTML("beforeend",templatePokemons);
      
      if (!date.next){
        hideLoadMore(loadMore);
        sessionStorage.removeItem('nextUrl')
      } 
    console.log(sessionStorage.getItem('nextUrl'))
      sessionStorage.setItem('nextUrl', date.next)
      
      
    })
  }

  export default renderPokemons