export function markupPokemonBase({name, url}){

    return `<div class="pokemon__item" >
    <span>${name}</span>
    <button data-url="${url}">load more info</button>
  </div>`
  }
  

  export function markupPokemonDetail({weight, height, sprites : {back_default}}) {
    return `<div class="pokemon__item-detail">
      <img src="${back_default}" alt="back_default"/>
      <span>${weight}</span>
      <span>${height}</span>
    </div>`
    
  }