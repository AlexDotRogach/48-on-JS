import fetchPokemons from '../api/fetchPokemons'
import { markupPokemonDetail } from '../pokemonsControl/createMarkupPokemons';

function toggleMoreInfo(event) {
   if (!event.target.dataset.url){
    return;
   }
  fetchPokemons(event.target.dataset.url)
  .then(pokemon => {
        const {parentElement : {
            firstElementChild : titleItem
        }} = event.target;

        if (titleItem.nextElementSibling.classList.contains("pokemon__item-detail")) {
            titleItem.nextElementSibling.remove()
            return;
        };

        titleItem.insertAdjacentHTML("afterend", markupPokemonDetail(pokemon))
    })
}

export default toggleMoreInfo;